import type { Metadata } from 'next'
import MinimalHeader from "@/components/MinimalHeader"
import InvoiceGenerator from './InvoiceGenerator'

const PAGE_URL = 'https://pixelorid.biz.id/tools/invoice-generator'

const FAQ = [
  {
    q: 'Is this invoice generator really free?',
    a: 'Yes. Fill in your details, preview the invoice, and send it to your email at no cost. No account required.',
  },
  {
    q: 'Where is my invoice data stored?',
    a: 'All your invoice data stays in your browser. We never store your invoice details on our servers. Only your email address is saved so we can send you the PDF.',
  },
  {
    q: 'Can I send the invoice directly to my client?',
    a: 'The PDF is sent to your own email address. You can then forward it or attach it to your own email to your client.',
  },
  {
    q: 'Can I add my business logo?',
    a: 'Yes. Upload your logo when filling in the From section and it will appear at the top of the PDF invoice.',
  },
  {
    q: 'How are tax and discount calculated?',
    a: 'Discount is applied first as a percentage of the subtotal. Tax is then calculated as a percentage of the discounted subtotal.',
  },
]

export const metadata: Metadata = {
  title: 'Free Invoice Generator — Create & Email PDF Invoices',
  description:
    'Create professional PDF invoices in seconds. Add your logo, line items, tax and discount. Free invoice generator — send the PDF straight to your email.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free Invoice Generator — Create & Email PDF Invoices',
    description:
      'Create professional PDF invoices in seconds. Add your logo, line items, tax and discount. Free invoice generator — send the PDF straight to your email.',
    url: PAGE_URL,
    type: 'website',
  },
}

export default function InvoiceGeneratorPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Free Invoice Generator',
      url: PAGE_URL,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'Create professional PDF invoices and send them to your email for free.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />

      <MinimalHeader />

      <main className="mx-auto max-w-6xl px-6 py-12 pb-20">
        <div className="mb-10 max-w-3xl">
          <span className="mb-4 inline-block rounded-full bg-[#f0fdf4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#16a34a]">
            Free tool
          </span>
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Free Invoice <span className="text-[#16a34a]">Generator</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#475467]">
            Fill in your business details and line items, preview the invoice, then send the PDF straight
            to your email. No account needed, no watermark, no data stored on our servers.
          </p>
        </div>

        <InvoiceGenerator />

        <div className="mx-auto mt-16 max-w-3xl space-y-10 text-[15px] leading-relaxed text-[#475467]">
          <section>
            <h2 className="mb-4 text-2xl font-extrabold text-[#0f172a]">Frequently asked questions</h2>
            <div className="space-y-5">
              {FAQ.map((f) => (
                <div key={f.q}>
                  <h3 className="font-extrabold text-[#0f172a]">{f.q}</h3>
                  <p className="mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[#e2e8f0] bg-white px-8 py-7">
            <h2 className="mb-2 text-xl font-extrabold text-[#0f172a]">Need recurring invoices and client tracking?</h2>
            <p>
              <a href="/products/pixelorid-invoice-generator" className="font-semibold text-[#16a34a] underline underline-offset-2">
                Pixelorid Invoice Generator
              </a>{' '}
              lets you save clients, reuse invoice templates, and track payment status — all in one place.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#e2e8f0] bg-white py-8 text-center text-sm text-[#475569]">
        <p className="mb-3 font-extrabold text-[#0f172a]">Pixelorid</p>
        <div className="flex flex-wrap justify-center gap-5">
          <a href="/terms" className="transition-colors hover:text-[#16a34a]">Terms of Service</a>
          <a href="/privacy" className="transition-colors hover:text-[#16a34a]">Privacy Policy</a>
          <a href="/refund" className="transition-colors hover:text-[#16a34a]">Refund Policy</a>
        </div>
      </footer>
    </div>
  )
}