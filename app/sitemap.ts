import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.pixelorid.biz.id'
// Ubah tanggal ini setiap kali isi halaman benar-benar berubah
const LAST_UPDATED = new Date('2026-10-05')

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/digital-products',
    '/pricing',
    '/products',
    '/products/pixelorid-loop',
    '/products/pixelorid-pos',
    '/products/pixelorid-resto',
    '/support',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_UPDATED,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}