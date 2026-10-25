import { NextResponse } from 'next/server'
import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import {
  CURRENCIES,
  UNITS,
  computeSummary,
  formatMoney,
  formatPct,
  num,
  unitLabel,
  type CalcState,
  type IngredientRow,
  type UnitId,
} from '../../lib/food-cost'
import { clientIp, rateLimit } from '../../lib/rate-limit'

export const runtime = 'nodejs'

const DEFAULT_TOOLS_LIST_ID = 4 // daftar "Tools Leads"
const COGS_CONSENT_VERSION = 'v1-cogs-2026-10-25'

type RGB = [number, number, number]
const GREEN: RGB = [22, 163, 74]
const DARK: RGB = [15, 23, 42]
const GRAY: RGB = [71, 85, 105]
const LIGHT: RGB = [148, 163, 184]

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
function str(v: unknown, max: number) {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

const UNIT_IDS = new Set<string>(UNITS.map((u) => u.id))
function unitOr(v: unknown, fallback: UnitId): UnitId {
  return typeof v === 'string' && UNIT_IDS.has(v) ? (v as UnitId) : fallback
}

// Membaca ulang data dari browser dan membersihkannya. Angka dihitung ulang di server.
function parseState(raw: unknown): CalcState | null {
  if (!raw || typeof raw !== 'object') return null
  const d = raw as Record<string, unknown>
  if (!Array.isArray(d.rows)) return null
  const cur = str(d.currency, 3)
  const rows: IngredientRow[] = d.rows.slice(0, 50).map((r, i) => {
    const x = (r ?? {}) as Record<string, unknown>
    return {
      id: `r${i}`,
      name: str(x.name, 100),
      packPrice: str(x.packPrice, 20),
      packSize: str(x.packSize, 20),
      packUnit: unitOr(x.packUnit, 'g'),
      usedQty: str(x.usedQty, 20),
      usedUnit: unitOr(x.usedUnit, 'g'),
    }
  })
  return {
    menuName: str(d.menuName, 100),
    currency: (CURRENCIES as readonly string[]).includes(cur) ? cur : 'USD',
    portions: str(d.portions, 20),
    otherCost: str(d.otherCost, 20),
    sellingPrice: str(d.sellingPrice, 20),
    targetPct: str(d.targetPct, 20),
    rows,
  }
}

function buildPdf(state: CalcState): string {
  const summary = computeSummary(state)
  const cur = state.currency
  const fmt = (v: number | null) => (v === null ? '-' : formatMoney(v, cur, true))

  const shownRows = state.rows
    .map((r, i) => ({ r, res: summary.results[i] }))
    .filter(({ r }) => r.name.trim() || r.packPrice || r.packSize || r.usedQty)

  const summaryLines: [string, string][] = [
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

  const doc = new jsPDF({ unit: 'pt', format: 'a4' })
  const left = 40

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.setTextColor(...DARK)
  doc.text('Food Cost Sheet', left, 56)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  doc.setTextColor(...GRAY)
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
    `${r.packSize || '-'} ${unitLabel(r.packUnit)} @ ${num(r.packPrice) ? fmt(num(r.packPrice)) : '-'}`,
    res.error ? 'check' : fmt(res.cost),
  ])

  autoTable(doc, {
    startY: 112,
    margin: { left, right: left },
    head: [['Ingredient', 'Amount used', 'Purchase pack', 'Cost']],
    body,
    foot: [['Recipe total', '', '', fmt(summary.recipeCost)]],
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
    body: summaryLines,
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

  return Buffer.from(doc.output('arraybuffer')).toString('base64')
}

export async function POST(req: Request) {
  // Anti-spam: batasi jumlah permintaan per IP dan ukuran data
  const ipCheck = rateLimit(`cogs-ip:${clientIp(req)}`, 8, 10 * 60 * 1000)
  if (!ipCheck.ok) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a few minutes.' },
      { status: 429, headers: { 'Retry-After': String(ipCheck.retryAfter) } }
    )
  }
  if (Number(req.headers.get('content-length') ?? 0) > 200_000) {
    return NextResponse.json({ error: 'Your data is too large.' }, { status: 413 })
  }

  const body = (await req.json().catch(() => null)) as {
    state?: unknown
    name?: unknown
    email?: unknown
    consent?: unknown
    marketing?: unknown
    company?: unknown
  } | null

  // Honeypot: bot mengisi field tersembunyi, abaikan diam-diam
  if (body?.company) return NextResponse.json({ ok: true })

  const name = str(body?.name, 100)
  const email = str(body?.email, 200).toLowerCase()
  if (!name) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }
  if (body?.consent !== true) {
    return NextResponse.json({ error: 'Please tick the box to agree before continuing.' }, { status: 400 })
  }

  // Anti-spam: batasi jumlah email per alamat penerima
  const mailCheck = rateLimit(`cogs-mail:${email}`, 3, 60 * 60 * 1000)
  if (!mailCheck.ok) {
    return NextResponse.json(
      { error: 'You have reached the hourly limit for this email address. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(mailCheck.retryAfter) } }
    )
  }

  const state = parseState(body?.state)
  if (!state) {
    return NextResponse.json({ error: 'Invalid request. Please refresh and try again.' }, { status: 400 })
  }
  if (computeSummary(state).recipeCost <= 0) {
    return NextResponse.json(
      { error: 'Please fill in at least one ingredient with a pack price, pack size and amount used.' },
      { status: 400 }
    )
  }

  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    console.warn('[send-cogs] BREVO_API_KEY belum diisi')
    return NextResponse.json({ error: 'Sending is temporarily unavailable. Please try again later.' }, { status: 503 })
  }

  let pdfBase64: string
  try {
    pdfBase64 = buildPdf(state)
  } catch (e) {
    console.error('[send-cogs] PDF error', e)
    return NextResponse.json({ error: 'Could not create the PDF. Please try again.' }, { status: 500 })
  }

  const dish = state.menuName.trim()
  const slug =
    (dish || 'sheet')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'sheet'

  const html = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px">
<h2 style="margin:0 0 12px">Your food cost sheet is ready</h2>
<p style="color:#4b5563">Hi ${esc(name)}, your food cost sheet${dish ? ` for <strong>${esc(dish)}</strong>` : ''} is attached to this email as a PDF.</p>
<p style="color:#9ca3af;font-size:12px;margin-top:24px">Sent via the free Pixelorid Food Cost Calculator. You can unsubscribe from our emails at any time.</p>
</div>`

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'PIXELORID', email: 'support@pixelorid.biz.id' },
      to: [{ email, name }],
      subject: dish ? `Your food cost sheet: ${dish}` : 'Your food cost sheet',
      htmlContent: html,
      attachment: [{ name: `food-cost-${slug}.pdf`, content: pdfBase64 }],
    }),
  })

  if (!res.ok) {
    console.error('[send-cogs] Brevo error', res.status, await res.text())
    return NextResponse.json({ error: 'Could not send the email. Please try again.' }, { status: 502 })
  }

  // Tambah ke list hanya jika pengguna mencentang email pemasaran (opsional).
  if (body?.marketing !== true) return NextResponse.json({ ok: true })

  const listId = Number(process.env.BREVO_TOOLS_LIST_ID) || DEFAULT_TOOLS_LIST_ID
  try {
    const saved = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        email,
        attributes: {
          FIRSTNAME: name,
          TOOL_SOURCE: 'cogs',
          CONSENT_TEXT_VERSION: COGS_CONSENT_VERSION,
          CONSENT_AT: new Date().toISOString().slice(0, 10),
        },
        listIds: [listId],
        updateEnabled: true,
      }),
    })
    if (!saved.ok) console.error('[send-cogs] Brevo contact error', saved.status, await saved.text())
  } catch (e) {
    console.error('[send-cogs] Brevo contact exception', e)
  }

  return NextResponse.json({ ok: true })
}