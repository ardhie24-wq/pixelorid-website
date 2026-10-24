// Pembatas jumlah permintaan sederhana (disimpan di memori server).
// Catatan: di Vercel tiap server punya memori sendiri, jadi ini penghalang
// untuk spam sederhana, bukan perlindungan penuh.
type Bucket = { count: number; resetAt: number }

const store = new Map<string, Bucket>()

export function clientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded?.split(',')[0] ?? req.headers.get('x-real-ip') ?? 'unknown'
  return ip.trim() || 'unknown'
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): { ok: boolean; retryAfter: number } {
  const now = Date.now()

  if (store.size > 5000) {
    for (const [k, b] of store) {
      if (b.resetAt <= now) store.delete(k)
    }
  }

  const bucket = store.get(key)
  if (!bucket || bucket.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, retryAfter: 0 }
  }

  bucket.count += 1
  if (bucket.count > limit) {
    return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) }
  }
  return { ok: true, retryAfter: 0 }
}