import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)

  // Honeypot: bot mengisi field tersembunyi, abaikan diam-diam
  if (body?.company) return NextResponse.json({ ok: true })

  const name = String(body?.name ?? '').trim().slice(0, 100)
  const email = String(body?.email ?? '').trim().toLowerCase().slice(0, 200)

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid name and email.' }, { status: 400 })
  }

  const apiKey = process.env.BREVO_API_KEY
  const listId = Number(process.env.BREVO_LIST_ID)

  if (!apiKey || !listId) {
    console.warn('[free-template] BREVO_API_KEY / BREVO_LIST_ID belum diisi, email tidak disimpan:', email)
    return NextResponse.json({ ok: true, stored: false })
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name },
      listIds: [listId],
      updateEnabled: true,
    }),
  })

  if (!res.ok) {
    console.error('[free-template] Brevo error', res.status, await res.text())
    return NextResponse.json({ error: 'Could not save your details. Please try again.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true, stored: true })
}