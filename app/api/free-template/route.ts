import { NextResponse } from 'next/server'
import { CONSENT_TEXT_VERSION } from '../../lib/consent'
import { createToken } from '../../lib/doi-token'

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  // Honeypot: bot mengisi field tersembunyi, abaikan diam-diam
  if (body?.company) return NextResponse.json({ ok: true })

  const name = String(body?.name ?? '').trim().slice(0, 100)
  const email = String(body?.email ?? '').trim().toLowerCase().slice(0, 200)
  const consent = body?.consent === true

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid name and email.' }, { status: 400 })
  }
  if (!consent) {
    return NextResponse.json({ error: 'Please tick the box to agree before continuing.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const secret = process.env.DOI_SECRET
  if (!apiKey || !secret) {
    console.warn('[free-template] BREVO_API_KEY atau DOI_SECRET belum diisi')
    return NextResponse.json({ error: 'Sign-up is temporarily unavailable. Please try again later.' }, { status: 503 })
  }

  const origin = new URL(req.url).origin
  const token = createToken({ e: email, n: name, v: CONSENT_TEXT_VERSION, t: Date.now() }, secret)
  const link = `${origin}/api/free-template/confirm?token=${encodeURIComponent(token)}`

  const html = `<div style="font-family:Arial,sans-serif;max-width:480px;margin:0 auto;padding:24px;text-align:center">
<h2 style="margin:0 0 12px">Confirm your email</h2>
<p style="color:#4b5563">Hi ${esc(name)}, please confirm your email address to receive your free file and occasional tips from Pixelorid. If you didn't request this, you can ignore this email.</p>
<p style="margin:24px 0"><a href="${link}" style="background:#16a34a;color:#fff;padding:14px 24px;border-radius:8px;text-decoration:none;font-weight:600">Confirm my email</a></p>
<p style="color:#9ca3af;font-size:12px">This link is valid for 48 hours.</p>
</div>`

  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      sender: { name: 'PIXELORID', email: 'support@pixelorid.biz.id' },
      to: [{ email, name }],
      subject: 'Confirm your email',
      htmlContent: html,
    }),
  })

  if (!res.ok) {
    console.error('[free-template] Brevo error', res.status, await res.text())
    return NextResponse.json({ error: 'Could not send the confirmation email. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}