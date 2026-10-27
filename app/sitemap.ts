import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { POSTS_QUERY } from '@/sanity/lib/queries'

const BASE_URL = 'https://pixelorid.biz.id'
const LAST_UPDATED = new Date('2026-10-24')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/about',
    '/blog',
    '/digital-products',
    '/pricing',
    '/products',
    '/products/pixelorid-loop',
    '/products/pixelorid-pos',
    '/products/pixelorid-resto',
    '/products/pixelorid-growth',
    '/products/pixelorid-invoice-generator',
    '/support',
    '/tools',
    '/tools/food-cost-calculator',
    '/tools/invoice-generator',
  ]

  const staticRoutes = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: LAST_UPDATED,
    changeFrequency: (route === '' ? 'daily' : 'weekly') as 'daily' | 'weekly',
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.7,
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
