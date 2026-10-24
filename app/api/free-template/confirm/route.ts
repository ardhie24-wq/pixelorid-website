import { NextResponse } from 'next/server'
import { verifyToken } from '../../../lib/doi-token'

const DEFAULT_TOOLS_LIST_ID = 4 // daftar "Tools Leads"
const MAX_AGE_MS = 48 * 60 * 60 * 1000

export async function GET(req: Request) {
  const url = new URL(req.url)
  const apiKey = process.env.BREVO_API_KEY
  const secret = process.env.DOI_SECRET
  const listId = Number(process.env.BREVO_TOOLS_LIST_ID) || DEFAULT_TOOLS_LIST_ID

  if (!apiKey || !secret) {
    return new NextResponse('Service unavailable.', { status: 503 })
  }

  const p = verifyToken(url.searchParams.get('token') ?? '', secret, MAX_AGE_MS)
  if (!p) {
    return new NextResponse('This confirmation link is invalid or has expired. Please sign up again.', { status: 400 })
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      email: p.e,
      attributes: {
        FIRSTNAME: p.n,
        TOOL_SOURCE: 'free-template',
        CONSENT_TEXT_VERSION: p.v,
        CONSENT_AT: new Date(p.t).toISOString().slice(0, 10),
      },
      listIds: [listId],
      updateEnabled: true,
    }),
  })

  if (!res.ok) {
    console.error('[free-template/confirm] Brevo error', res.status, await res.text())
    return new NextResponse('Could not save your confirmation. Please try the link again.', { status: 502 })
  }

  return NextResponse.redirect(new URL('/free-templates/confirmed', url.origin))
}