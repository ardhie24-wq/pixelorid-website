'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
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

const inputCls =
  'w-full rounded-lg border border-[#d1d5db] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none focus:border-[#16a34a]'
const labelCls = 'mb-1 block text-xs font-semibold text-[#475467]'

type ModalState = 'idle' | 'open' | 'loading' | 'sent' | 'error'

export default function FoodCostCalculator() {
  const [state, setState] = useState<CalcState>(DEFAULT_STATE)
  const [loaded, setLoaded] = useState(false)
  const [modal, setModal] = useState<ModalState>('idle')
  const [sendName, setSendName] = useState('')
  const [sendEmail, setSendEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [company, setCompany] = useState('') // honeypot anti-spam
  const [errorMsg, setErrorMsg] = useState('')

  // Muat data tersimpan di browser (tidak dikirim ke server)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw) as CalcState
        if (saved && Array.isArray(saved.rows) && saved.rows.length > 0) {
          setState({ ...DEFAULT_STATE, ...saved })
        }
      }
    } catch {}
    setLoaded(true)
  }, [])

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

  const fmt = (v: number | null) => (v === null ? '-' : formatMoney(v, state.currency))

  function summaryLines(): [string, string][] {
    return [
      ['Portions made', summary.portions > 0 ? String(summary.portions) : '-'],
      ['Ingredient cost per portion', fmt(summary.costPerPortion)],
      ['Other cost per portion (packaging etc.)', fmt(summary.otherCost)],
      ['Total cost per portion', fmt(summary.totalPerPortion)],
      ['Selling price', summary.price > 0 ? fmt(summary.price) : '-'],
      ['Food cost %', summary.foodCostPct !== null ? formatPct(summary.foodCostPct) : '-'],
      [
        'Gross margin per portion',
        summary.marginAmount !== null && summary.marginPct !== null
          ? `${fmt(summary.marginAmount)} (${formatPct(summary.marginPct)})`
          : '-',
      ],
      [
        `Suggested price at ${summary.targetPct > 0 ? formatPct(summary.targetPct) : '-'} food cost`,
        fmt(summary.suggestedPrice),
      ],
    ]
  }

  const shownRows = state.rows
    .map((r, i) => ({ r, res: summary.results[i] }))
    .filter(({ r }) => r.name.trim() || r.packPrice || r.packSize || r.usedQty)

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sendEmail.trim())
  const canSend = consent && sendName.trim() !== '' && emailOk

  async function handleSend() {
    if (!canSend) return
    setModal('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/send-cogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state,
          name: sendName.trim(),
          email: sendEmail.trim(),
          consent,
          marketing,
          company,
        }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => null)
        throw new Error(j?.error || 'Something went wrong. Please try again.')
      }
      setModal('sent')
      setConsent(false)
      setMarketing(false)
    } catch (e: unknown) {
      setErrorMsg(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
      setModal('error')
    }
  }

  function openModal() {
    setModal('open')
  }

  function closeModal() {
    setModal('idle')
    setConsent(false)
    setMarketing(false)
    setErrorMsg('')
  }

  return (
    <div>
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

        {/* ── PREVIEW + SEND ── */}
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
              {summaryLines().map(([k, v]) => (
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
            {modal === 'sent' ? (
              <div className="rounded-2xl border border-[#16a34a] bg-[#f0fdf4] px-6 py-5">
                <p className="font-extrabold text-[#16a34a]">PDF sent!</p>
                <p className="mt-1 text-sm text-[#475467]">
                  Check your inbox at <strong>{sendEmail}</strong>. The PDF is attached.
                </p>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  onClick={openModal}
                  className="w-full rounded-xl bg-[#16a34a] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#15803d]"
                >
                  Send PDF to My Email
                </button>
                <p className="mt-2 text-center text-xs text-[#6b7280]">Free. We send the PDF to your email.</p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* ── MODAL ── */}
      {(modal === 'open' || modal === 'loading' || modal === 'error') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-xl">
            <h3 className="mb-1 text-xl font-extrabold text-[#0f172a]">Send food cost sheet to your email</h3>
            <p className="mb-5 text-sm text-[#475467]">
              Enter your name and email. We will send the PDF to this address.
            </p>

            {modal === 'error' && (
              <p className="mb-4 rounded-lg bg-[#fef2f2] px-4 py-3 text-sm font-semibold text-[#ef4444]">{errorMsg}</p>
            )}

            <div className="space-y-3">
              <div>
                <label className={labelCls}>Your name *</label>
                <input
                  className={inputCls}
                  value={sendName}
                  onChange={(e) => setSendName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>
              <div>
                <label className={labelCls}>Your email *</label>
                <input
                  className={inputCls}
                  type="email"
                  value={sendEmail}
                  onChange={(e) => setSendEmail(e.target.value)}
                  placeholder="you@email.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
            />

            <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-[#475467]">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#16a34a]"
              />
              <span>
                I agree that Pixelorid may email me the food cost PDF I requested. I have read the{' '}
                <Link href="/privacy" target="_blank" className="font-semibold text-[#16a34a] underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <label className="mt-3 flex cursor-pointer items-start gap-3 text-sm text-[#475467]">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-[#16a34a]"
              />
              <span>
                (Optional) Yes, send me free templates and occasional tips from Pixelorid by email. I can
                unsubscribe at any time.
              </span>
            </label>

            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={closeModal}
                className="flex-1 rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm font-semibold text-[#475467] hover:bg-[#f8fafc]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSend}
                disabled={!canSend || modal === 'loading'}
                className="flex-1 rounded-xl bg-[#16a34a] px-4 py-3 text-sm font-bold text-white hover:bg-[#15803d] disabled:opacity-50"
              >
                {modal === 'loading' ? 'Sending...' : 'Send PDF'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}