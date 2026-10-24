import { createHmac, timingSafeEqual } from 'crypto'

export type DoiPayload = { e: string; n: string; v: string; t: number }

function sign(data: string, secret: string) {
  return createHmac('sha256', secret).update(data).digest('base64url')
}

export function createToken(p: DoiPayload, secret: string) {
  const data = Buffer.from(JSON.stringify(p)).toString('base64url')
  return `${data}.${sign(data, secret)}`
}

export function verifyToken(token: string, secret: string, maxAgeMs: number): DoiPayload | null {
  const [data, sig] = token.split('.')
  if (!data || !sig) return null
  const a = Buffer.from(sig)
  const b = Buffer.from(sign(data, secret))
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null
  try {
    const p = JSON.parse(Buffer.from(data, 'base64url').toString()) as DoiPayload
    if (!p.e || typeof p.t !== 'number' || Date.now() - p.t > maxAgeMs) return null
    return p
  } catch {
    return null
  }
}