import type { Metadata } from 'next'
import Link from 'next/link'
import MinimalHeader from "@/components/MinimalHeader"

const PAGE_URL = 'https://pixelorid.biz.id/tools'

export const metadata: Metadata = {
  title: 'Free Tools for Small Business: Food Cost and Invoices',
  description:
    'Free calculators and invoice tools for small business owners. No accounting skills needed, no sign up. Get your results as a PDF sent to your email.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free Tools for Small Business: Food Cost and Invoices',
    description:
      'Free calculators and invoice tools for small business owners. No accounting skills needed, no sign up. Get your results as a PDF sent to your email.',
    url: PAGE_URL,
    type: 'website',
  },
}

const TOOLS = [
  {
    href: '/tools/food-cost-calculator',
    title: 'Food Cost Calculator',
    text: 'Calculate food cost, cost per portion, margin and the menu price you need for any dish. Get the result as a PDF sent to your email.',
    cta: 'Open the calculator',
  },
  {
    href: '/tools/invoice-generator',
    title: 'Invoice Generator',
    text: 'Create a clean invoice with your logo, line items, discount and tax, in 30+ currencies. Get the PDF sent to your email.',
    cta: 'Open the generator',
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <MinimalHeader />

      <main className="mx-auto max-w-4xl px-6 py-14 pb-20">
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-[#f0fdf4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#16a34a]">
            Free tools
          </span>
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Free Tools for <span className="text-[#16a34a]">Small Business</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#475467]">
            Simple calculators and generators for business owners, with no accounting skills needed. Preview
            your results for free, then get them as a PDF sent to your email.
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