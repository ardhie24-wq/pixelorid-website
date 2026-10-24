import type { Metadata } from 'next'
import Link from 'next/link'

const PAGE_URL = 'https://pixelorid.biz.id/tools'

export const metadata: Metadata = {
  title: 'Free Tools for Small Business Owners',
  description:
    'Free calculators and generators for small business owners. Work out food cost, margins and more, then download your results as a PDF.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free Tools for Small Business Owners',
    description:
      'Free calculators and generators for small business owners. Work out food cost, margins and more, then download your results as a PDF.',
    url: PAGE_URL,
    type: 'website',
  },
}

const TOOLS = [
  {
    href: '/tools/food-cost-calculator',
    title: 'Food Cost Calculator',
    text: 'Calculate food cost, cost per portion, margin and the menu price you need for any dish. Download the result as a PDF.',
    cta: 'Open the calculator',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-[#0f172a]">
            Pixel<span className="text-[#16a34a]">orid</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#475569] transition-colors hover:text-[#16a34a]">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-14 pb-20">
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-[#f0fdf4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#16a34a]">
            Free tools
          </span>
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Free Tools for <span className="text-[#16a34a]">Small Business</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#475467]">
            Simple calculators and generators you can use right in your browser. Preview your results for free,
            and download them as a PDF.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="block rounded-2xl border border-[#e2e8f0] bg-white p-7 transition-colors hover:border-[#16a34a]"
            >
              <h2 className="mb-2 text-xl font-extrabold text-[#0f172a]">{t.title}</h2>
              <p className="mb-4 text-[14.5px] leading-relaxed text-[#475467]">{t.text}</p>
              <span className="text-sm font-bold text-[#16a34a]">{t.cta} &rarr;</span>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#6b7280]">More free tools are on the way.</p>
      </main>

      <footer className="border-t border-[#e2e8f0] bg-white py-8 text-center text-sm text-[#475569]">
        <p className="mb-3 font-extrabold text-[#0f172a]">Pixelorid</p>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/terms" className="transition-colors hover:text-[#16a34a]">Terms of Service</Link>
          <Link href="/privacy" className="transition-colors hover:text-[#16a34a]">Privacy Policy</Link>
          <Link href="/refund" className="transition-colors hover:text-[#16a34a]">Refund Policy</Link>
        </div>
      </footer>
    </div>
  )
}