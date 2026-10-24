import { NextResponse } from 'next/server'
import { verifyToken } from '../../../lib/doi-token'

const DEFAULT_TOOLS_LIST_ID = 4 // daftar "Tools Leads"
const MAX_AGE_MS = 48 * 60 * 60 * 1000
const UNLOCK_COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 hari

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

  const source = p.s === 'cogs' ? 'cogs' : 'free-template'

  const attributes: Record<string, string> = {
    TOOL_SOURCE: source,
    CONSENT_TEXT_VERSION: p.v,
    CONSENT_AT: new Date(p.t).toISOString().slice(0, 10),
  }
  if (p.n) attributes.FIRSTNAME = p.n

  const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      email: p.e,
      attributes,
      listIds: [listId],
      updateEnabled: true,
    }),
  })

  if (!brevoRes.ok) {
    console.error('[free-template/confirm] Brevo error', brevoRes.status, await brevoRes.text())
    return new NextResponse('Could not save your confirmation. Please try the link again.', { status: 502 })
  }

  const target = source === 'cogs' ? '/tools/food-cost-calculator?confirmed=1' : '/free-templates/confirmed'
  const response = NextResponse.redirect(new URL(target, url.origin))
  if (source === 'cogs') {
    response.cookies.set('pxl_unlock_cogs', '1', {
      path: '/',
      maxAge: UNLOCK_COOKIE_MAX_AGE,
      sameSite: 'lax',
      secure: url.protocol === 'https:',
      httpOnly: false,
    })
  }
  return response
}