import type { MetadataRoute } from 'next'

// TODO: ganti dengan domain asli Anda (tanpa trailing slash)
const BASE_URL = 'https://pixelorid.biz.id'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/digital-products',
    '/pricing',
    '/products',
    '/products/pixelorid-loop',
    '/products/pixelorid-pos',
    '/support',
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }))
}
