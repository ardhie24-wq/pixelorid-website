'use client'

import { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import { CURRENCIES } from '../../lib/currencies'

// ── Types ──────────────────────────────────────────────────────────────────
interface LineItem {
  id: string
  description: string
  qty: string
  price: string
}

interface InvoiceData {
  // From
  fromName: string
  fromAddress: string
  fromEmail: string
  fromPhone: string
  logoDataUrl: string | null
  // Bill To
  toName: string
  toAddress: string
  toEmail: string
  // Invoice details
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  // Line items
  items: LineItem[]
  // Totals
  discountPct: string
  taxPct: string
  // Notes
  notes: string
  terms: string
}

type ModalState = 'idle' | 'open' | 'loading' | 'sent' | 'error'

const labelCls = 'mb-1 block text-xs font-semibold text-[#475467]'
const inputCls = 'w-full rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm text-[#0f172a] outline-none focus:border-[#16a34a] focus:ring-1 focus:ring-[#16a34a]'

function newItem(): LineItem {
  return { id: crypto.randomUUID(), description: '', qty: '1', price: '' }
}

function fmt(n: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(n)
}

// ── Main component ─────────────────────────────────────────────────────────
export default function InvoiceGenerator() {
  const [currency, setCurrency] = useState('USD')
  const [data, setData] = useState<InvoiceData>({
    fromName: '', fromAddress: '', fromEmail: '', fromPhone: '', logoDataUrl: null,
    toName: '', toAddress: '', toEmail: '',
    invoiceNumber: 'INV-001',
    invoiceDate: new Date().toISOString().slice(0, 10),
    dueDate: '',
    items: [newItem()],
    discountPct: '', taxPct: '',
    notes: '', terms: 'Payment is due within the number of days stated on this invoice.',
  })
  const [modal, setModal] = useState<ModalState>('idle')
  const [sendName, setSendName] = useState('')
  const [sendEmail, setSendEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const logoInputRef = useRef<HTMLInputElement>(null)

  // ── Helpers ──────────────────────────────────────────────────────────────
  const set = useCallback((field: keyof InvoiceData, value: string | null) => {
    setData(prev => ({ ...prev, [field]: value }))
  }, [])

  const setItem = useCallback((id: string, field: keyof LineItem, value: string) => {
    setData(prev => ({
      ...prev,
      items: prev.items.map(it => it.id === id ? { ...it, [field]: value } : it),
    }))
  }, [])

  const addItem = () => setData(prev => ({ ...prev, items: [...prev.items, newItem()] }))
  const removeItem = (id: string) => setData(prev => ({ ...prev, items: prev.items.filter(it => it.id !== id) }))

  // ── Logo upload ──────────────────────────────────────────────────────────
  function handleLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => set('logoDataUrl', reader.result as string)
    reader.readAsDataURL(file)
  }

  // ── Totals ───────────────────────────────────────────────────────────────
  const subtotal = data.items.reduce((sum, it) => {
    const q = parseFloat(it.qty) || 0
    const p = parseFloat(it.price) || 0
    return sum + q * p
  }, 0)
  const discountAmt = subtotal * (parseFloat(data.discountPct) || 0) / 100
  const afterDiscount = subtotal - discountAmt
  const taxAmt = afterDiscount * (parseFloat(data.taxPct) || 0) / 100
  const total = afterDiscount + taxAmt

  // ── Send ─────────────────────────────────────────────────────────────────
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sendEmail.trim())
  const canSend = consent && sendName.trim() !== '' && emailOk

  async function handleSend() {
    if (!canSend) return
    setModal('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/send-invoice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data,
          currency,
          name: sendName.trim(),
          email: sendEmail.trim(),
          consent,
          marketing,
        }),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => null)
        throw new Error(j?.error || 'Failed')
      }
      setModal('sent')
      setMarketing(false)
      setConsent(false)
    } catch (e: unknown) {
      setErrorMsg(e instanceof Error ? e.message : 'Something went wrong. Please try again.')
      setModal('error')
    }
  }

  function openModal() {
    if (!sendEmail && data.fromEmail) setSendEmail(data.fromEmail)
    if (!sendName && data.fromName) setSendName(data.fromName)
    setModal('open')
  }

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">

      {/* ── CURRENCY ── */}
      <div className="flex items-center gap-3">
        <label className={labelCls}>Currency</label>
        <select value={currency} onChange={e => setCurrency(e.target.value)}
          className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-sm text-[#0f172a] focus:border-[#16a34a] focus:outline-none focus:ring-1 focus:ring-[#16a34a]">
          {CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code} - {c.name}</option>)}
        </select>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* ── FROM ── */}
        <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <h2 className="mb-4 text-base font-extrabold text-[#0f172a]">1. From (Your Business)</h2>

          {/* Logo */}
          <div className="mb-4">
            <label className={labelCls}>Logo (optional)</label>
            {data.logoDataUrl ? (
              <div className="flex items-center gap-3">
                <img src={data.logoDataUrl} alt="logo" className="h-12 w-auto rounded object-contain" />
                <button type="button" onClick={() => { set('logoDataUrl', null); if (logoInputRef.current) logoInputRef.current.value = '' }}
                  className="text-xs text-[#ef4444] hover:underline">Remove</button>
              </div>
            ) : (
              <button type="button" onClick={() => logoInputRef.current?.click()}
                className="flex items-center gap-2 rounded-lg border border-dashed border-[#cbd5e1] px-4 py-3 text-sm text-[#64748b] hover:border-[#16a34a] hover:text-[#16a34a]">
                Upload logo
              </button>
            )}
            <input ref={logoInputRef} type="file" accept="image/*" className="hidden" onChange={handleLogo} />
          </div>

          <div className="space-y-3">
            <div>
              <label className={labelCls}>Business name *</label>
              <input className={inputCls} value={data.fromName} onChange={e => set('fromName', e.target.value)} placeholder="Acme Co." />
            </div>
            <div>
              <label className={labelCls}>Address</label>
              <textarea className={inputCls + ' resize-none'} rows={2} value={data.fromAddress} onChange={e => set('fromAddress', e.target.value)} placeholder="123 Main St, City, State" />
            </div>
            <div>
              <label className={labelCls}>Email</label>
              <input className={inputCls} type="email" value={data.fromEmail} onChange={e => set('fromEmail', e.target.value)} placeholder="you@yourbusiness.com" />
            </div>
            <div>
              <label className={labelCls}>Phone</label>
              <input className={inputCls} value={data.fromPhone} onChange={e => set('fromPhone', e.target.value)} placeholder="+1 555 000 0000" />
            </div>
          </div>
        </section>

        {/* ── BILL TO ── */}
        <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
          <h2 className="mb-4 text-base font-extrabold text-[#0f172a]">2. Bill To (Client)</h2>
          <div className="space-y-3">
            <div>
              <label className={labelCls}>Client name *</label>
              <input className={inputCls} value={data.toName} onChange={e => set('toName', e.target.value)} placeholder="Client Name or Company" />
            </div>
            <div>
              <label className={labelCls}>Address</label>
              <textarea className={inputCls + ' resize-none'} rows={2} value={data.toAddress} onChange={e => set('toAddress', e.target.value)} placeholder="456 Client Ave, City, State" />
            </div>
            <div>
              <label className={labelCls}>Client email</label>
              <input className={inputCls} type="email" value={data.toEmail} onChange={e => set('toEmail', e.target.value)} placeholder="client@email.com" />
            </div>
          </div>
        </section>
      </div>

      {/* ── INVOICE DETAILS ── */}
      <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
        <h2 className="mb-4 text-base font-extrabold text-[#0f172a]">3. Invoice Details</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelCls}>Invoice number</label>
            <input className={inputCls} value={data.invoiceNumber} onChange={e => set('invoiceNumber', e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Invoice date</label>
            <input className={inputCls} type="date" value={data.invoiceDate} onChange={e => set('invoiceDate', e.target.value)} />
          </div>
          <div>
            <label className={labelCls}>Due date</label>
            <input className={inputCls} type="date" value={data.dueDate} onChange={e => set('dueDate', e.target.value)} />
          </div>
        </div>
      </section>

      {/* ── LINE ITEMS ── */}
      <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
        <h2 className="mb-4 text-base font-extrabold text-[#0f172a]">4. Line Items</h2>
        <div className="mb-2 hidden grid-cols-[1fr_80px_100px_36px] gap-2 text-xs font-semibold text-[#94a3b8] sm:grid">
          <span>Description</span><span>Qty</span><span>Unit price</span><span />
        </div>
        <div className="space-y-2">
          {data.items.map((it) => (
            <div key={it.id} className="grid grid-cols-[1fr_80px_100px_36px] items-center gap-2">
              <input className={inputCls} value={it.description} onChange={e => setItem(it.id, 'description', e.target.value)} placeholder="Service or product" />
              <input className={inputCls} type="number" min="0" value={it.qty} onChange={e => setItem(it.id, 'qty', e.target.value)} />
              <input className={inputCls} type="number" min="0" step="0.01" value={it.price} onChange={e => setItem(it.id, 'price', e.target.value)} placeholder="0.00" />
              <button type="button" onClick={() => removeItem(it.id)} disabled={data.items.length === 1}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#94a3b8] hover:bg-[#fef2f2] hover:text-[#ef4444] disabled:opacity-30">
                &times;
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={addItem}
          className="mt-3 text-sm font-semibold text-[#16a34a] hover:underline">
          + Add line item
        </button>

        {/* Totals */}
        <div className="mt-6 space-y-2 border-t border-[#e2e8f0] pt-4 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-[#475467]">Subtotal</span>
            <span className="font-semibold text-[#0f172a]">{fmt(subtotal, currency)}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#475467]">Discount</span>
            <div className="flex items-center gap-2">
              <input className="w-20 rounded-lg border border-[#e2e8f0] px-2 py-1 text-right text-sm focus:border-[#16a34a] focus:outline-none" type="number" min="0" max="100" value={data.discountPct} onChange={e => set('discountPct', e.target.value)} placeholder="0" />
              <span className="text-[#475467]">%</span>
              <span className="w-24 text-right font-semibold text-[#ef4444]">-{fmt(discountAmt, currency)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#475467]">Tax</span>
            <div className="flex items-center gap-2">
              <input className="w-20 rounded-lg border border-[#e2e8f0] px-2 py-1 text-right text-sm focus:border-[#16a34a] focus:outline-none" type="number" min="0" max="100" value={data.taxPct} onChange={e => set('taxPct', e.target.value)} placeholder="0" />
              <span className="text-[#475467]">%</span>
              <span className="w-24 text-right font-semibold text-[#0f172a]">+{fmt(taxAmt, currency)}</span>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[#e2e8f0] pt-2">
            <span className="font-extrabold text-[#0f172a]">Total</span>
            <span className="text-xl font-extrabold text-[#16a34a]">{fmt(total, currency)}</span>
          </div>
        </div>
      </section>

      {/* ── NOTES / TERMS ── */}
      <section className="rounded-2xl border border-[#e2e8f0] bg-white p-6">
        <h2 className="mb-4 text-base font-extrabold text-[#0f172a]">5. Notes &amp; Terms</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls}>Notes</label>
            <textarea className={inputCls + ' resize-none'} rows={3} value={data.notes} onChange={e => set('notes', e.target.value)} placeholder="Thank you for your business!" />
          </div>
          <div>
            <label className={labelCls}>Terms</label>
            <textarea className={inputCls + ' resize-none'} rows={3} value={data.terms} onChange={e => set('terms', e.target.value)} />
          </div>
        </div>
      </section>

      {/* ── SEND BUTTON ── */}
      {modal === 'sent' ? (
        <div className="rounded-2xl border border-[#16a34a] bg-[#f0fdf4] px-6 py-5">
          <p className="font-extrabold text-[#16a34a]">Invoice sent!</p>
          <p className="mt-1 text-sm text-[#475467]">Check your inbox at <strong>{sendEmail}</strong>. The PDF is attached.</p>
        </div>
      ) : (
        <button type="button" onClick={openModal}
          className="w-full rounded-xl bg-[#16a34a] px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#15803d]">
          Send Invoice to My Email
        </button>
      )}

      {/* ── MODAL ── */}
      {(modal === 'open' || modal === 'loading' || modal === 'error') && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-7 shadow-xl">
            <h3 className="mb-1 text-xl font-extrabold text-[#0f172a]">Send invoice to your email</h3>
            <p className="mb-5 text-sm text-[#475467]">
              Enter your name and email. We will send the invoice PDF to this address.
            </p>

            {modal === 'error' && (
              <p className="mb-4 rounded-lg bg-[#fef2f2] px-4 py-3 text-sm font-semibold text-[#ef4444]">{errorMsg}</p>
            )}

            <div className="space-y-3">
              <div>
                <label className={labelCls}>Your name *</label>
                <input className={inputCls} value={sendName} onChange={e => setSendName(e.target.value)} placeholder="Your name" autoComplete="name" />
              </div>
              <div>
                <label className={labelCls}>Your email *</label>
                <input className={inputCls} type="email" value={sendEmail} onChange={e => setSendEmail(e.target.value)} placeholder="you@email.com" autoComplete="email" />
              </div>
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-[#475467]">
  <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)}
    className="mt-0.5 h-4 w-4 shrink-0 accent-[#16a34a]" />
  <span>
    I agree that Pixelorid may email me the invoice PDF I requested. I have read the{' '}
    <Link href="/privacy" target="_blank" className="font-semibold text-[#16a34a] underline">Privacy Policy</Link>.
  </span>
</label>
<label className="mt-3 flex cursor-pointer items-start gap-3 text-sm text-[#475467]">
  <input type="checkbox" checked={marketing} onChange={e => setMarketing(e.target.checked)}
    className="mt-0.5 h-4 w-4 shrink-0 accent-[#16a34a]" />
  <span>
    (Optional) Yes, send me free templates and occasional tips from Pixelorid by email. I can unsubscribe at any time.
  </span>
</label>

            <div className="mt-5 flex gap-3">
              <button type="button" onClick={() => { setModal('idle'); setConsent(false); setMarketing(false); setErrorMsg('') }}
                className="flex-1 rounded-xl border border-[#e2e8f0] px-4 py-3 text-sm font-semibold text-[#475467] hover:bg-[#f8fafc]">
                Cancel
              </button>
              <button type="button" onClick={handleSend} disabled={!canSend || modal === 'loading'}
                className="flex-1 rounded-xl bg-[#16a34a] px-4 py-3 text-sm font-bold text-white hover:bg-[#15803d] disabled:opacity-50">
                {modal === 'loading' ? 'Sending...' : 'Send PDF'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}