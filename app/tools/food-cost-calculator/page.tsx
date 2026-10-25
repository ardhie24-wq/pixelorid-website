import type { Metadata } from 'next'
import Link from 'next/link'
import MinimalHeader from "@/components/MinimalHeader"
import FoodCostCalculator from './FoodCostCalculator'

const PAGE_URL = 'https://pixelorid.biz.id/tools/food-cost-calculator'

const FAQ = [
  {
    q: 'What is a good food cost percentage?',
    a: 'Many restaurants aim for a food cost of roughly 28% to 35% of the menu price, but the right target depends on your concept, location and other costs. Use the target field in the calculator to see the price you need to reach your own goal.',
  },
  {
    q: 'How do I calculate food cost per portion?',
    a: 'Add up the cost of every ingredient the recipe uses, divide by the number of portions it makes, then add packaging or other per-portion costs. Divide that total by the selling price to get your food cost percentage.',
  },
  {
    q: 'Do I need accounting knowledge to use this?',
    a: 'No. Enter what you pay for each ingredient and how much the recipe uses. The calculator does the maths and shows the cost per portion, the food cost percentage, and the price you need to reach your target.',
  },
  {
    q: 'Do I need to convert units myself?',
    a: 'No. Enter the pack you buy (for example 5 lb for $18) and the amount you use (for example 1500 g). The calculator converts between weight units and between volume units. Weight, volume and pieces cannot be converted into each other.',
  },
  {
    q: 'Are my recipes stored on your servers?',
    a: 'Your figures are saved in your browser so you can come back to them. When you ask for the PDF, they are sent to our server only to create it and email it to you. We do not keep them in our database.',
  },
]

export const metadata: Metadata = {
  title: 'Free Food Cost Calculator for Restaurants and Cafes',
  description:
    'Work out cost per portion, food cost % and menu price for any dish. No accounting skills needed. Free, no sign up, with the PDF sent to your email.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Free Food Cost Calculator for Restaurants and Cafes',
    description:
      'Work out cost per portion, food cost % and menu price for any dish. No accounting skills needed. Free, no sign up, with the PDF sent to your email.',
    url: PAGE_URL,
    type: 'website',
  },
}

export default function FoodCostCalculatorPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Free Food Cost Calculator',
      url: PAGE_URL,
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Calculate food cost, cost per portion, margin and suggested menu price for any dish. No accounting skills needed.',
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
            Free Food Cost <span className="text-[#16a34a]">Calculator</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#475467]">
            Work out the real cost of any dish: cost per portion, food cost percentage, gross margin and the
            price you need to hit your target. No accounting skills needed. Preview your sheet below, then get
            the PDF sent to your email.
          </p>
        </div>

        <FoodCostCalculator />

        <div className="mx-auto mt-16 max-w-3xl space-y-10 text-[15px] leading-relaxed text-[#475467]">
          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-[#0f172a]">What is food cost?</h2>
            <p>
              Food cost (also called food cost percentage, or COGS for cost of goods sold) is the share of a
              menu price that goes to ingredients. If a dish costs you $2.40 to make and you sell it for $9.00,
              your food cost is 26.7%. Tracking it dish by dish shows which items make money and which quietly
              lose it.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-extrabold text-[#0f172a]">How to calculate it</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Add up the cost of every ingredient in the recipe.</li>
              <li>Divide by the number of portions the recipe makes.</li>
              <li>Add packaging or other costs per portion.</li>
              <li>
                Food cost % = cost per portion &divide; selling price &times; 100.
              </li>
            </ol>
          </section>

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
            <h2 className="mb-2 text-xl font-extrabold text-[#0f172a]">Want this for every dish, automatically?</h2>
            <p>
              <Link href="/products/pixelorid-resto" className="font-semibold text-[#16a34a] underline underline-offset-2">
                Pixelorid Resto
              </Link>{' '}
              has a built-in COGS calculator for your whole menu, and{' '}
              <Link href="/products/pixelorid-pos" className="font-semibold text-[#16a34a] underline underline-offset-2">
                Pixelorid POS
              </Link>{' '}
              shows your real profit after costs.
            </p>
          </section>

          <p className="text-sm">
            More free tools:{' '}
            <Link href="/tools/invoice-generator" className="font-semibold text-[#16a34a] underline underline-offset-2">
              Invoice Generator
            </Link>
            {' '}and{' '}
            <Link href="/tools" className="font-semibold text-[#16a34a] underline underline-offset-2">
              all free tools
            </Link>
            .
          </p>
        </div>
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