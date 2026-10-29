import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

const BASE_URL = 'https://pixelorid.biz.id'
const LAST_UPDATED = new Date('2026-10-29')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/blog',
    '/digital-products',
    '/free-templates',
    '/pricing',
    '/privacy',
    '/products',
    '/products/pixelorid-loop',
    '/products/pixelorid-pos',
    '/products/pixelorid-resto',
    '/products/pixelorid-growth',
    '/products/pixelorid-invoice-generator',
    '/refund',
    '/support',
    '/terms',
    '/tools',
    '/tools/food-cost-calculator',
    '/tools/invoice-generator',
  ]

  const staticRoutes = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_UPDATED,
    changeFrequency: (
      route === '' ? 'daily' :
      route === '/blog' || route === '/digital-products' ? 'weekly' :
      'monthly'
    ) as 'daily' | 'weekly' | 'monthly',
    priority:
      route === '' ? 1.0 :
      route === '/digital-products' ? 0.95 :
      route === '/blog' ? 0.9 :
      route === '/products' ? 0.85 :
      route.startsWith('/products/') ? 0.8 :
      route === '/tools' ? 0.8 :
      route.startsWith('/tools/') ? 0.75 :
      route === '/pricing' ? 0.75 :
      0.6,
  }))

  const posts = await client.fetch(POSTS_QUERY)
  const blogRoutes = posts.map((post: { slug: { current: string }, publishedAt: string }) => ({
    url: `${BASE_URL}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt || LAST_UPDATED),
    changeFrequency: 'monthly' as 'monthly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...blogRoutes]
}
