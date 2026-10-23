import { pageMeta } from "../_lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Pricing - POS, Resto, Loop, Growth and Invoice Generator",
  description:
    "Simple, transparent USD pricing for every Pixelorid product: food truck POS, restaurant software, client follow-up app, cash flow tracker and invoicing.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center">
            <img src="/pixelorid-logo-cropped.png" alt="Pixelorid" className="h-8 w-auto" />
          </Link>
          <Link href="/" className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green">Back to Home</Link>
        </div>
      </header>

      <section className="bg-pixel-light-green">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm">Pixelorid Pricing</span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">Simple, Transparent Pricing</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">Every Pixelorid product is priced independently. Start free, upgrade when you are ready.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Pixelorid Resto</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">Restaurant management software</h2>
          <p className="mt-3 leading-7 text-slate-600">Every plan includes all features. Choose the number of branches you need.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Free Trial</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$0</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">1 branch, 7 days</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Basic</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$15</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm text-slate-400 line-through">$20 / month</p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Up to 2 branches</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$75</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm text-slate-400 line-through">$210 / month</p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Up to 10 branches</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">Prices are in US dollars and billed monthly.</p>
          <Link href="/products/pixelorid-resto" className="mt-6 inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">View Pixelorid Resto</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Pixelorid POS</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">Food truck point of sale</h2>
          <p className="mt-3 leading-7 text-slate-600">Every plan includes all features.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Free Trial</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$0</span><span className="text-sm text-slate-500">for 7 days</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">All features included</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Monthly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$18</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Billed monthly</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Yearly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$180</span><span className="text-sm text-slate-500">USD / year</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Save $36 per year</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">Prices are in US dollars. Subscriptions managed via Paddle.</p>
          <Link href="/products/pixelorid-pos" className="mt-6 inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">View Pixelorid POS</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Pixelorid Loop</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">Client follow-up app</h2>
          <p className="mt-3 leading-7 text-slate-600">Every plan includes all features.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Free Trial</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$0</span><span className="text-sm text-slate-500">for 7 days</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">All features included</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Monthly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$10</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Billed monthly</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Yearly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$100</span><span className="text-sm text-slate-500">USD / year</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Save $20 per year</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">Prices are in US dollars. Subscriptions managed via Paddle.</p>
          <Link href="/products/pixelorid-loop" className="mt-6 inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">View Pixelorid Loop</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Pixelorid Invoice Generator</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">Invoicing for freelancers and small businesses</h2>
          <p className="mt-3 leading-7 text-slate-600">Every plan includes all features.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Free Trial</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$0</span><span className="text-sm text-slate-500">for 7 days</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">All features included</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Monthly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$9</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Unlimited invoices and quotations</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Yearly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$90</span><span className="text-sm text-slate-500">USD / year</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Save $18 per year</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">Prices are in US dollars. Subscriptions managed via Paddle.</p>
          <Link href="/products/pixelorid-invoice-generator" className="mt-6 inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">View Pixelorid Invoice Generator</Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Pixelorid Growth</p>
          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">Cash flow and profit tracker</h2>
          <p className="mt-3 leading-7 text-slate-600">Start free, then upgrade when you are ready.</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Free</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$0</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Up to 10 transactions</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Monthly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$9.99</span><span className="text-sm text-slate-500">USD / month</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Unlimited transactions</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-extrabold text-slate-900">Pro Yearly</h3>
              <p className="mt-3 flex items-baseline gap-2"><span className="text-4xl font-extrabold text-slate-900">$79</span><span className="text-sm text-slate-500">USD / year</span></p>
              <p className="mt-1 text-sm font-bold text-pixel-green">Save $40.88 per year</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">Prices are in US dollars.</p>
          <Link href="/products/pixelorid-growth" className="mt-6 inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">View Pixelorid Growth</Link>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Not Sure Where to Start?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Explore our products to find the solution that matches your business needs.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/products" className="inline-flex rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">Explore Products</Link>
            <Link href="/support" className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-pixel-green hover:text-pixel-green">Contact Us</Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <img src="/pixelorid-logo-cropped.png" alt="Pixelorid" className="h-8 w-auto" />
              <p className="mt-3 text-sm text-slate-500">Simple technology for growing businesses.</p>
              <div className="mt-4 flex items-center gap-5 text-sm font-semibold text-slate-600">
                <a href="https://www.instagram.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Instagram</a>
                <a href="https://www.pinterest.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Pinterest</a>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
              <Link href="/products" className="hover:text-pixel-green">Products</Link>
              <Link href="/digital-products" className="hover:text-pixel-green">Digital Products</Link>
              <Link href="/pricing" className="hover:text-pixel-green">Pricing</Link>
              <Link href="/about" className="hover:text-pixel-green">About</Link>
              <Link href="/support" className="hover:text-pixel-green">Support</Link>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">2026 Pixelorid. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}