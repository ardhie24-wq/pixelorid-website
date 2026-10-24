'use client'

import { useEffect, useMemo, useState } from 'react'
import { TOOL_CONSENT_TEXT } from '../../lib/consent'
import {
  CURRENCIES,
  DEFAULT_STATE,
  UNITS,
  blankState,
  computeSummary,
  familyOf,
  formatMoney,
  formatPct,
  newRow,
  num,
  unitLabel,
  type CalcState,
  type IngredientRow,
  type UnitId,
} from '../../lib/food-cost'

const STORAGE_KEY = 'pxl_cogs_v1'
const COOKIE_NAME = 'pxl_unlock_cogs'

const inputCls =
  'w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none focus:border-[#16a34a]'
const labelCls = 'mb-1 block text-xs font-semibold text-[#475467]'

export default function FoodCostCalculator() {
  const [state, setState] = useState<CalcState>(DEFAULT_STATE)
  const [loaded, setLoaded] = useState(false)
  const [restored, setRestored] = useState(false)
  const [unlocked, setUnlocked] = useState(false)
  const [justConfirmed, setJustConfirmed] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('') // honeypot anti-spam
  const [consent, setConsent] = useState(false)
  const [gate, setGate] = useState<'idle' | 'loading' | 'sent'>('idle')
  const [error, setError] = useState('')
  const [pdfBusy, setPdfBusy] = useState(false)
  const [pdfError, setPdfError] = useState('')

  // Muat data tersimpan dan cek status unlock saat halaman dibuka
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw) as CalcState
        if (saved && Array.isArray(saved.rows) && saved.rows.length > 0) {
          setState({ ...DEFAULT_STATE, ...saved })
          setRestored(true)
        }
      }
    } catch {}
    try {
      const fromLink = new URLSearchParams(window.location.search).get('confirmed') === '1'
      const hasCookie = document.cookie.split('; ').includes(`${COOKIE_NAME}=1`)
      if (fromLink || hasCookie) setUnlocked(true)
      if (fromLink) {
        setJustConfirmed(true)
        window.history.replaceState(null, '', window.location.pathname)
      }
    } catch {}
    setLoaded(true)
  }, [])

  // Simpan data di browser setiap ada perubahan (tidak dikirim ke server)
  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state, loaded])

  const summary = useMemo(() => computeSummary(state), [state])

  function setField<K extends keyof CalcState>(key: K, value: CalcState[K]) {
    setState((s) => ({ ...s, [key]: value }))
  }
  function updateRow(id: string, patch: Partial<IngredientRow>) {
    setState((s) => ({ ...s, rows: s.rows.map((r) => (r.id === id ? { ...r, ...patch } : r)) }))
  }
  function changePackUnit(id: string, unit: UnitId) {
    setState((s) => ({
      ...s,
      rows: s.rows.map((r) =>
        r.id !== id
          ? r
          : { ...r, packUnit: unit, usedUnit: familyOf(r.usedUnit) === familyOf(unit) ? r.usedUnit : unit }
      ),
    }))
  }
  function addRow() {
    setState((s) => ({ ...s, rows: [...s.rows, newRow(`r${Date.now()}`)] }))
  }
  function removeRow(id: string) {
    setState((s) => ({ ...s, rows: s.rows.length > 1 ? s.rows.filter((r) => r.id !== id) : s.rows }))
  }

  const fmt = (v: number | null, code = false) => (v === null ? '-' : formatMoney(v, state.currency, code))

  function summaryLines(code: boolean): [string, string][] {
    return [
      ['Portions made', summary.portions > 0 ? String(summary.portions) : '-'],
      ['Ingredient cost per portion', fmt(summary.costPerPortion, code)],
      ['Other cost per portion (packaging etc.)', fmt(summary.otherCost, code)],
      ['Total cost per portion', fmt(summary.totalPerPortion, code)],
      ['Selling price', summary.price > 0 ? fmt(summary.price, code) : '-'],
      ['Food cost %', summary.foodCostPct !== null ? formatPct(summary.foodCostPct) : '-'],
      [
        'Gross margin per portion',
        summary.marginAmount !== null && summary.marginPct !== null
          ? `${fmt(summary.marginAmount, code)} (${formatPct(summary.marginPct)})`
          : '-',
      ],
      [
        `Suggested price at ${summary.targetPct > 0 ? formatPct(summary.targetPct) : '-'} food cost`,
        fmt(summary.suggestedPrice, code),
      ],
    ]
  }

  const shownRows = state.rows
    .map((r, i) => ({ r, res: summary.results[i] }))
    .filter(({ r }) => r.name.trim() || r.packPrice || r.packSize || r.usedQty)

  async function submitGate(e: React.FormEvent) {
    e.preventDefault()
    setGate('loading')
    setError('')
    try {
      const res = await fetch('/api/free-template', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: 'cogs', email, consent, company }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setGate('sent')
    } catch (err) {
      setGate('idle')
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  async function downloadPdf() {
    setPdfBusy(true)
    setPdfError('')
    try {
      const { jsPDF } = await import('jspdf')
      const autoTable = (await import('jspdf-autotable')).default
      const doc = new jsPDF({ unit: 'pt', format: 'a4' })
      const left = 40

      doc.setFont('helvetica', 'bold')
      doc.setFontSize(20)
      doc.setTextColor(15, 23, 42)
      doc.text('Food Cost Sheet', left, 56)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(12)
      doc.setTextColor(71, 85, 105)
      doc.text(state.menuName.trim() || 'Untitled dish', left, 78)
      doc.setFontSize(10)
      doc.text(
        new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        left,
        94
      )

      const body = shownRows.map(({ r, res }, i) => [
        r.name.trim() || `Ingredient ${i + 1}`,
        `${r.usedQty || '-'} ${unitLabel(r.usedUnit)}`,
        `${r.packSize || '-'} ${unitLabel(r.packUnit)} @ ${num(r.packPrice) ? fmt(num(r.packPrice), true) : '-'}`,
        res.error ? 'check' : fmt(res.cost, true),
      ])

      autoTable(doc, {
        startY: 112,
        margin: { left, right: left },
        head: [['Ingredient', 'Amount used', 'Purchase pack', 'Cost']],
        body,
        foot: [['Recipe total', '', '', fmt(summary.recipeCost, true)]],
        theme: 'striped',
        styles: { fontSize: 10 },
        headStyles: { fillColor: [22, 163, 74] },
        footStyles: { fillColor: [241, 245, 249], textColor: [15, 23, 42] },
        columnStyles: { 3: { halign: 'right' } },
      })

      const lastY =
        (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? 300

      autoTable(doc, {
        startY: lastY + 24,
        margin: { left, right: left },
        body: summaryLines(true),
        theme: 'plain',
        styles: { fontSize: 11, cellPadding: 5 },
        columnStyles: { 0: { fontStyle: 'bold' }, 1: { halign: 'right' } },
      })

      doc.setFontSize(9)
      doc.setTextColor(120, 120, 120)
      doc.text(
        'Created with the free Food Cost Calculator - pixelorid.biz.id/tools/food-cost-calculator',
        left,
        doc.internal.pageSize.getHeight() - 30
      )

      const slug =
        (state.menuName || 'sheet')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '') || 'sheet'
      doc.save(`food-cost-${slug}.pdf`)
    } catch {
      setPdfError('Could not create the PDF. Please try again.')
    } finally {
      setPdfBusy(false)
    }
  }

  function closeModal() {
    setModalOpen(false)
    setError('')
  }

  return (
    <div>
      {justConfirmed && (
        <div className="mb-6 rounded-xl border-l-4 border-[#16a34a] bg-[#f0fdf4] px-5 py-4 text-sm text-[#166534]">
          <strong>Your email is confirmed.</strong> Your PDF is ready to download below.
          {!restored && (
            <p className="mt-1 text-[#92400e]">
              We could not find your figures in this browser (for example, if you opened the email on another
              device). Enter them below, then download.
            </p>
          )}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* ── INPUT ── */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-[#0f172a]">1. Your dish</h2>
              <button
                type="button"
                onClick={() => setState(blankState())}
                className="text-xs font-semibold text-[#475467] underline underline-offset-2 hover:text-[#16a34a]"
              >
                Start blank
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className={labelCls}>Menu item name</label>
                <input
                  type="text"
                  value={state.menuName}
                  onChange={(e) => setField('menuName', e.target.value)}
                  placeholder="e.g. Chicken burger"
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Currency</label>
                <select
                  value={state.currency}
                  onChange={(e) => setField('currency', e.target.value)}
                  className={inputCls}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={labelCls}>Portions this recipe makes</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={state.portions}
                  onChange={(e) => setField('portions', e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Other cost per portion (packaging)</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={state.otherCost}
                  onChange={(e) => setField('otherCost', e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Selling price per portion</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={state.sellingPrice}
                  onChange={(e) => setField('sellingPrice', e.target.value)}
                  className={inputCls}
                />
              </div>
              <div className="col-span-2">
                <label className={labelCls}>Target food cost % (used for the suggested price)</label>
                <input
                  type="number"
                  min="0"
                  step="any"
                  inputMode="decimal"
                  value={state.targetPct}
                  onChange={(e) => setField('targetPct', e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
            <h2 className="mb-1 text-lg font-extrabold text-[#0f172a]">2. Ingredients</h2>
            <p className="mb-4 text-xs text-[#475467]">
              Enter the pack you buy (for example 5 lb for $18) and the amount the recipe uses. Units are
              converted for you.
            </p>
            <div className="space-y-3">
              {state.rows.map((r, i) => {
                const res = summary.results[i]
                return (
                  <div key={r.id} className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3">
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-6">
                      <div className="col-span-2 flex items-end gap-2 sm:col-span-6">
                        <div className="flex-1">
                          <label className={labelCls}>Ingredient</label>
                          <input
                            type="text"
                            value={r.name}
                            onChange={(e) => updateRow(r.id, { name: e.target.value })}
                            placeholder="e.g. Chicken breast"
                            className={inputCls}
                          />
                        </div>
                        <button
                          type="button"
                          onClick={() => removeRow(r.id)}
                          aria-label="Remove ingredient"
                          className="mb-0.5 rounded-lg px-2 py-2 text-xs font-semibold text-[#dc2626] hover:bg-[#fef2f2]"
                        >
                          Remove
                        </button>
                      </div>
                      <div>
                        <label className={labelCls}>Pack price</label>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          inputMode="decimal"
                          value={r.packPrice}
                          onChange={(e) => updateRow(r.id, { packPrice: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Pack size</label>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          inputMode="decimal"
                          value={r.packSize}
                          onChange={(e) => updateRow(r.id, { packSize: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Pack unit</label>
                        <select
                          value={r.packUnit}
                          onChange={(e) => changePackUnit(r.id, e.target.value as UnitId)}
                          className={inputCls}
                        >
                          {UNITS.map((u) => (
                            <option key={u.id} value={u.id}>
                              {u.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Amount used</label>
                        <input
                          type="number"
                          min="0"
                          step="any"
                          inputMode="decimal"
                          value={r.usedQty}
                          onChange={(e) => updateRow(r.id, { usedQty: e.target.value })}
                          className={inputCls}
                        />
                      </div>
                      <div>
                        <label className={labelCls}>Used unit</label>
                        <select
                          value={r.usedUnit}
                          onChange={(e) => updateRow(r.id, { usedUnit: e.target.value as UnitId })}
                          className={inputCls}
                        >
                          {UNITS.map((u) => (
                            <option key={u.id} value={u.id}>
                              {u.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>Cost</label>
                        <div className="flex h-[38px] items-center text-sm font-bold text-[#0f172a]">
                          {res.error ? '-' : fmt(res.cost)}
                        </div>
                      </div>
                    </div>
                    {res.error && <p className="mt-2 text-xs text-[#b45309]">{res.error}</p>}
                  </div>
                )
              })}
            </div>
            <button
              type="button"
              onClick={addRow}
              className="mt-4 rounded-lg border border-[#16a34a] px-4 py-2 text-sm font-semibold text-[#16a34a] transition-colors hover:bg-[#f0fdf4]"
            >
              + Add ingredient
            </button>
          </section>
        </div>

        {/* ── PREVIEW + DOWNLOAD ── */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="mb-3 text-lg font-extrabold text-[#0f172a]">3. Preview your PDF</h2>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm" aria-label="PDF preview">
            <div className="border-b border-[#e2e8f0] pb-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#16a34a]">Food Cost Sheet</p>
              <h3 className="mt-1 text-xl font-extrabold text-[#0f172a]">
                {state.menuName.trim() || 'Untitled dish'}
              </h3>
            </div>
            <table className="mt-4 w-full text-left text-[13px] text-[#475467]">
              <thead>
                <tr className="text-xs text-[#6b7280]">
                  <th className="py-1 font-semibold">Ingredient</th>
                  <th className="py-1 font-semibold">Used</th>
                  <th className="py-1 text-right font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {shownRows.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-3 text-[#9ca3af]">
                      Add ingredients to see them here.
                    </td>
                  </tr>
                )}
                {shownRows.map(({ r, res }, i) => (
                  <tr key={r.id} className="border-t border-[#f1f5f9]">
                    <td className="py-1.5 text-[#0f172a]">{r.name.trim() || `Ingredient ${i + 1}`}</td>
                    <td className="py-1.5">
                      {r.usedQty || '-'} {unitLabel(r.usedUnit)}
                    </td>
                    <td className="py-1.5 text-right">{res.error ? 'check' : fmt(res.cost)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-[#e2e8f0] font-bold text-[#0f172a]">
                  <td className="py-2" colSpan={2}>
                    Recipe total
                  </td>
                  <td className="py-2 text-right">{fmt(summary.recipeCost)}</td>
                </tr>
              </tfoot>
            </table>
            <dl className="mt-3 space-y-1.5 border-t border-[#e2e8f0] pt-3 text-[13px]">
              {summaryLines(false).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="font-semibold text-[#0f172a]">{k}</dt>
                  <dd className="text-right text-[#475467]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {summary.problems > 0 && (
            <p className="mt-3 text-xs text-[#b45309]">
              {summary.problems} ingredient row(s) need attention and are not counted in the totals.
            </p>
          )}

          <div className="mt-4">
            {unlocked ? (
              <button
                type="button"
                onClick={downloadPdf}
                disabled={pdfBusy}
                className="w-full rounded-xl bg-[#16a34a] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#15803d] disabled:opacity-70"
              >
                {pdfBusy ? 'Preparing PDF...' : 'Download PDF'}
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  aria-label="Download PDF (locked, enter your email to unlock)"
                  className="w-full cursor-pointer rounded-xl bg-[#e5e7eb] px-6 py-3.5 text-[15px] font-bold text-[#6b7280] transition-colors hover:bg-[#d1d5db]"
                >
                  &#128274; Download PDF
                </button>
                <p className="mt-2 text-center text-xs text-[#6b7280]">
                  Free. Confirm your email once to unlock the download.
                </p>
              </>
            )}
            {pdfError && <p className="mt-2 text-center text-sm text-[#dc2626]">{pdfError}</p>}
          </div>
        </div>
      </div>

      {/* ── EMAIL GATE ── */}
      {modalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 px-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-white p-7"
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close"
              className="absolute right-4 top-3 text-2xl text-[#6b7280]"
            >
              &times;
            </button>

            {gate === 'sent' ? (
              <div>
                <h3 className="text-xl font-extrabold text-[#0f172a]">Check your email</h3>
                <p className="mt-2 text-sm text-[#4b5563]">
                  We sent a confirmation link to {email}. Click it and you will come back to this page with your
                  PDF ready to download. Your figures are saved in this browser. If you do not see the email
                  within a few minutes, check your spam folder.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-4 rounded-lg bg-[#16a34a] px-6 py-3 text-sm font-bold text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={submitGate}>
                <h3 className="text-xl font-extrabold text-[#0f172a]">Unlock your PDF</h3>
                <p className="mb-4 mt-2 text-sm text-[#4b5563]">
                  Enter your email. We will send you a confirmation link. Click it and your download unlocks.
                </p>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputCls}
                />
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                />
                <label className="mt-4 flex items-start gap-2.5 text-[13px] leading-snug text-[#4b5563]">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5"
                  />
                  <span>
                    {TOOL_CONSENT_TEXT}{' '}
                    <a
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#16a34a] underline"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
                {error && <p className="mt-3 text-sm text-[#dc2626]">{error}</p>}
                <button
                  type="submit"
                  disabled={gate === 'loading'}
                  className="mt-4 w-full rounded-lg bg-[#16a34a] px-6 py-3.5 text-[15px] font-bold text-white disabled:opacity-70"
                >
                  {gate === 'loading' ? 'Sending...' : 'Send confirmation link'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}