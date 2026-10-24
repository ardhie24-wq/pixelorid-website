import { NextResponse } from 'next/server'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import { CURRENCY_CODES } from '../../lib/currencies'
import { clientIp, rateLimit } from '../../lib/rate-limit'

export const runtime = 'nodejs'

const DEFAULT_TOOLS_LIST_ID = 4 // daftar "Tools Leads"
const INVOICE_CONSENT_VERSION = 'v1-invoice-2026-10-24'

type RGB = [number, number, number]
const GREEN: RGB = [22, 163, 74]
const DARK: RGB = [15, 23, 42]
const GRAY: RGB = [71, 85, 105]
const LIGHT: RGB = [148, 163, 184]


type Item = { description: string; qty: number; price: number }
type Invoice = {
  currency: string
  fromName: string
  fromAddress: string
  fromEmail: string
  fromPhone: string
  logoDataUrl: string
  toName: string
  toAddress: string
  toEmail: string
  invoiceNumber: string
  invoiceDate: string
  dueDate: string
  items: Item[]
  discountPct: number
  taxPct: number
  notes: string
  terms: string
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
function str(v: unknown, max: number) {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}
function num(v: unknown) {
  const n = parseFloat(String(v ?? ''))
  return Number.isFinite(n) && n > 0 ? Math.min(n, 1e9) : 0
}
function pct(v: unknown) {
  return Math.min(num(v), 100)
}
function dateStr(v: unknown) {
  const s = str(v, 10)
  return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : ''
}
function fmtDate(s: string) {
  const dt = new Date(`${s}T00:00:00Z`)
  return Number.isNaN(dt.getTime())
    ? s
    : dt.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' })
}
function money(n: number, currency: string) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency, currencyDisplay: 'code' })
    .format(n)
    .replace(/\u00a0/g, ' ')
}
function qtyText(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(2)
}
function totals(inv: Invoice) {
  const subtotal = inv.items.reduce((s, it) => s + it.qty * it.price, 0)
  const discountAmt = (subtotal * inv.discountPct) / 100
  const afterDiscount = subtotal - discountAmt
  const taxAmt = (afterDiscount * inv.taxPct) / 100
  return { subtotal, discountAmt, taxAmt, total: afterDiscount + taxAmt }
}

function addLogo(doc: jsPDF, dataUrl: string, x: number, y: number, maxW: number, maxH: number): number {
  const m = /^data:image\/(png|jpeg|jpg);base64,/i.exec(dataUrl)
  if (!m || dataUrl.length > 1_500_000) return 0
  try {
    const props = doc.getImageProperties(dataUrl)
    const ratio = Math.min(maxW / props.width, maxH / props.height)
    const w = props.width * ratio
    const h = props.height * ratio
    doc.addImage(dataUrl, m[1].toLowerCase() === 'png' ? 'PNG' : 'JPEG', x, y, w, h)
    return h
  } catch {
    return 0
  }
}

function buildPdf(inv: Invoice): string {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const L = 15
  const R = 195
  const PH = 297
  const cur = inv.currency
  let y = 15

  const wrap = (t: string, w: number): string[] =>
    t.split('\n').flatMap(l => doc.splitTextToSize(l, w) as string[])
  const need = (h: number) => {
    if (y + h > PH - 20) {
      doc.addPage()
      y = 20
    }
  }

  // Header kiri: logo atau nama bisnis
  const logoH = inv.logoDataUrl ? addLogo(doc, inv.logoDataUrl, L, y, 45, 18) : 0
  if (!logoH) {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(16)
    doc.setTextColor(...DARK)
    doc.text(inv.fromName, L, y + 7, { maxWidth: 95 })
  }

  // Header kanan: judul dan detail invoice
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.setTextColor(...GREEN)
  doc.text('INVOICE', R, y + 8, { align: 'right' })
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9.5)
  doc.setTextColor(...GRAY)
  let ry = y + 15
  doc.text(`No. ${inv.invoiceNumber}`, R, ry, { align: 'right' })
  ry += 5
  if (inv.invoiceDate) {
    doc.text(`Date: ${fmtDate(inv.invoiceDate)}`, R, ry, { align: 'right' })
    ry += 5
  }
  if (inv.dueDate) {
    doc.text(`Due: ${fmtDate(inv.dueDate)}`, R, ry, { align: 'right' })
    ry += 5
  }
  y = Math.max(y + Math.max(logoH, 14), ry) + 6

  // Blok From dan Bill To
  const party = (label: string, x: number, name: string, lines: string[]) => {
    let py = y
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(8)
    doc.setTextColor(...LIGHT)
    doc.text(label, x, py)
    py += 5
    doc.setFontSize(11)
    doc.setTextColor(...DARK)
    const nameLines = doc.splitTextToSize(name, 80) as string[]
    doc.text(nameLines, x, py)
    py += nameLines.length * 5
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(...GRAY)
    for (const raw of lines) {
      if (!raw) continue
      for (const l of wrap(raw, 80)) {
        doc.text(l, x, py)
        py += 4.6
      }
    }
    return py
  }
  const y1 = party('FROM', L, inv.fromName, [inv.fromAddress, inv.fromEmail, inv.fromPhone])
  const y2 = party('BILL TO', 110, inv.toName, [inv.toAddress, inv.toEmail])
  y = Math.max(y1, y2) + 6

  // Tabel item
  autoTable(doc, {
    startY: y,
    margin: { left: L, right: 15 },
    head: [['Description', 'Qty', 'Unit price', 'Amount']],
    body: inv.items.map(it => [
      it.description || '-',
      qtyText(it.qty),
      money(it.price, cur),
      money(it.qty * it.price, cur),
    ]),
    theme: 'striped',
    styles: { font: 'helvetica', fontSize: 9.5, cellPadding: 2.5, textColor: DARK },
    headStyles: { fillColor: GREEN, textColor: [255, 255, 255], fontStyle: 'bold' },
    alternateRowStyles: { fillColor: [248, 250, 252] },
    columnStyles: {
      1: { halign: 'right', cellWidth: 20 },
      2: { halign: 'right', cellWidth: 36 },
      3: { halign: 'right', cellWidth: 36 },
    },
  })
  const finalY =
    (doc as unknown as { lastAutoTable?: { finalY: number } }).lastAutoTable?.finalY ?? y + 20
  y = finalY + 8

  // Total
  const t = totals(inv)
  need(40)
  const tl = 115
  const line = (label: string, value: string) => {
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(...GRAY)
    doc.text(label, tl, y)
    doc.setTextColor(...DARK)
    doc.text(value, R, y, { align: 'right' })
    y += 6
  }
  line('Subtotal', money(t.subtotal, cur))
  if (inv.discountPct > 0) line(`Discount (${inv.discountPct}%)`, `-${money(t.discountAmt, cur)}`)
  if (inv.taxPct > 0) line(`Tax (${inv.taxPct}%)`, `+${money(t.taxAmt, cur)}`)
  doc.setDrawColor(226, 232, 240)
  doc.line(tl, y - 2, R, y - 2)
  y += 3
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...DARK)
  doc.text('Total', tl, y)
  doc.setFontSize(13)
  doc.setTextColor(...GREEN)
  doc.text(money(t.total, cur), R, y, { align: 'right' })
  y += 12

  // Catatan dan syarat
  const block = (title: string, text: string) => {
    if (!text) return
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    const lines = wrap(text, R - L)
    need(lines.length * 4.6 + 10)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.setTextColor(...DARK)
    doc.text(title, L, y)
    y += 5
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9.5)
    doc.setTextColor(...GRAY)
    for (const l of lines) {
      doc.text(l, L, y)
      y += 4.6
    }
    y += 5
  }
  block('Notes', inv.notes)
  block('Terms', inv.terms)

  // Footer di semua halaman
  const pages = doc.getNumberOfPages()
  for (let i = 1; i <= pages; i++) {
    doc.setPage(i)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.setTextColor(...LIGHT)
    doc.text(
      'Created with the free Pixelorid Invoice Generator - pixelorid.biz.id/tools/invoice-generator',
      105,
      PH - 10,
      { align: 'center' }
    )
  }

  return Buffer.from(doc.output('arraybuffer')).toString('base64')
}

export async function POST(req: Request) {
  // Anti-spam: batasi jumlah permintaan per IP dan ukuran data
  const ipCheck = rateLimit(`invoice-ip:${clientIp(req)}`, 8, 10 * 60 * 1000)
  if (!ipCheck.ok) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429, headers: { 'Retry-After': String(ipCheck.retryAfter) } }
    )
  }
  if (Number(req.headers.get('content-length') ?? 0) > 3_000_000) {
    return NextResponse.json({ error: 'The invoice is too large. Please use a smaller logo.' }, { status: 413 })
  }
  const body = (await req.json().catch(() => null)) as {
    data?: Record<string, unknown>
    currency?: unknown
    name?: unknown
    email?: unknown
    consent?: unknown
  } | null
  const d = body?.data
  if (!d || typeof d !== 'object') {
    return NextResponse.json({ error: 'Invalid request. Please refresh and try again.' }, { status: 400 })
  }

  // Penerima: nama + email dari modal kirim
  const recipientName = str(body?.name, 100)
  const recipientEmail = str(body?.email, 200).toLowerCase()
  if (!recipientName) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(recipientEmail)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (body?.consent !== true) {
    return NextResponse.json({ error: 'Please tick the box to agree before continuing.' }, { status: 400 })
  }

  // Anti-spam: batasi jumlah invoice per alamat email penerima
  const mailCheck = rateLimit(`invoice-mail:${recipientEmail}`, 3, 60 * 60 * 1000)
  if (!mailCheck.ok) {
    return NextResponse.json(
      { error: 'You have reached the hourly limit for this email address. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(mailCheck.retryAfter) } }
    )
  }

  // Isi invoice
  const fromName = str(d.fromName, 100)
  const toName = str(d.toName, 100)
  if (!fromName) return NextResponse.json({ error: 'Please enter your business name.' }, { status: 400 })
  if (!toName) return NextResponse.json({ error: 'Please enter the client name.' }, { status: 400 })

  const rawItems: unknown[] = Array.isArray(d.items) ? d.items.slice(0, 50) : []
  const items: Item[] = rawItems
    .map(it => {
      const r = (it ?? {}) as Record<string, unknown>
      return { description: str(r.description, 200), qty: num(r.qty), price: num(r.price) }
    })
    .filter(it => it.description || it.price > 0)
  if (items.length === 0) {
    return NextResponse.json({ error: 'Please add at least one line item with a price.' }, { status: 400 })
  }

  const currencyRaw = str(body?.currency, 3)
  const inv: Invoice = {
    currency: CURRENCY_CODES.includes(currencyRaw) ? currencyRaw : 'USD',
    fromName,
    fromAddress: str(d.fromAddress, 300),
    fromEmail: str(d.fromEmail, 200),
    fromPhone: str(d.fromPhone, 40),
    logoDataUrl: typeof d.logoDataUrl === 'string' ? d.logoDataUrl : '',
    toName,
    toAddress: str(d.toAddress, 300),
    toEmail: str(d.toEmail, 200),
    invoiceNumber: str(d.invoiceNumber, 40) || 'INV-001',
    invoiceDate: dateStr(d.invoiceDate),
    dueDate: dateStr(d.dueDate),
    items,
    discountPct: pct(d.discountPct),
    taxPct: pct(d.taxPct),
    notes: str(d.notes, 1000),
    terms: str(d.terms, 1000),
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.warn('[send-invoice] BREVO_API_KEY belum diisi')
    return NextResponse.json({ error: 'Sending is temporarily unavailable. Please try again later.' }, { status: 503 })
  }

  let pdfBase64: string
  try {
    pdfBase64 = buildPdf(inv)
  } catch (e) {
    console.error('[send-invoice] PDF error', e)
    return NextResponse.json({ error: 'Could not create the PDF. Please try again.' }, { status: 500 })
  }

  const total = money(totals(inv).total, inv.currency)
  const fileName = `invoice-${inv.invoiceNumber.replace(/[^A-Za-z0-9_-]/g, '-')}.pdf`

  const html = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px">
<h2 style="margin:0 0 12px">Your invoice is ready</h2>
<p style="color:#4b5563">Hi ${esc(recipientName)}, invoice <strong>${esc(inv.invoiceNumber)}</strong> for <strong>${esc(inv.toName)}</strong> (total ${esc(total)}) is attached to this email as a PDF.</p>
<p style="color:#9ca3af;font-size:12px;margin-top:24px">Sent via the free Pixelorid Invoice Generator. You can unsubscribe from our emails at any time.</p>
</div>`

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'PIXELORID', email: 'support@pixelorid.biz.id' },
      to: [{ email: recipientEmail, name: recipientName }],
      subject: `Your invoice ${inv.invoiceNumber} (PDF attached)`,
      htmlContent: html,
      attachment: [{ name: fileName, content: pdfBase64 }],
    }),
  })

  if (!res.ok) {
    console.error('[send-invoice] Brevo error', res.status, await res.text())
    return NextResponse.json({ error: 'Could not send the email. Please try again.' }, { status: 502 })
  }

  // Simpan otomatis ke list Brevo. Invoice sudah terkirim, jadi gagal simpan tidak membatalkan.
  const listId = Number(process.env.BREVO_TOOLS_LIST_ID) || DEFAULT_TOOLS_LIST_ID
  try {
    const saved = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        email: recipientEmail,
        attributes: {
          FIRSTNAME: recipientName,
          TOOL_SOURCE: 'invoice',
          CONSENT_TEXT_VERSION: INVOICE_CONSENT_VERSION,
          CONSENT_AT: new Date().toISOString().slice(0, 10),
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    })
    if (!saved.ok) console.error('[send-invoice] Brevo contact error', saved.status, await saved.text())
  } catch (e) {
    console.error('[send-invoice] Brevo contact exception', e)
  }

  return NextResponse.json({ ok: true })
}