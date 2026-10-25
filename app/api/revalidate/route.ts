import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Dipanggil oleh webhook Sanity setiap post dibuat, diubah, atau dihapus.
// Hanya menghapus cache halaman blog dan sitemap, tidak mengubah data.
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  let slug: string | null = null
  try {
    const body = await req.json()
    const s = body?.slug?.current
    if (typeof s === 'string' && /^[a-z0-9-]+$/.test(s)) slug = s
  } catch {}

  revalidatePath('/blog')
  revalidatePath('/sitemap.xml')
  if (slug) revalidatePath(`/blog/${slug}`)

  return NextResponse.json({ revalidated: true, slug })
}