import { pageMeta } from "../../_lib/seo";
import Link from "next/link";

export const metadata = pageMeta({
  title: "Pixelorid Growth â€” Financial Tracker for Small Businesses",
  description:
    "Pixelorid Growth is a simple financial tracking app for small businesses. Track revenue, expenses, profit and cash flow in one place. Start free.",
  path: "/products/pixelorid-growth",
});

const APP_URL = "https://growth.pixelorid.biz.id";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features = [
  {
    title: "Revenue Tracking",
    description:
      "Log every sale and income source. See exactly how much your business is earning, broken down by category and date.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Expense Management",
    description:
      "Record and categorize your business expenses. Know where your money is going and keep spending under control.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    title: "Profit Overview",
    description:
      "See your net profit at a glance. Understand the difference between revenue and expenses without complex spreadsheets.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </svg>
    ),
  },
  {
    title: "Cash Flow Monitoring",
    description:
      "Track money coming in and going out over time. Stay on top of your cash position so your business never runs dry.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 22l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "USD / month",
    note: "Up to 10 transactions",
    items: ["Revenue tracking", "Expense tracking", "Basic dashboard", "7-day free trial"],
    cta: "Start Free",
    href: APP_URL,
    highlighted: false,
  },
  {
    name: "Pro Monthly",
    price: "$9.99",
    period: "USD / month",
    note: "Billed monthly",
    items: ["Unlimited transactions", "Full dashboard", "Profit & cash flow reports", "Export data"],
    cta: "Start Pro Monthly",
    href: APP_URL,
    highlighted: true,
  },
  {
    name: "Pro Yearly",
    price: "$79",
    period: "USD / year",
    note: "Save $40.88 / year",
    items: ["Unlimited transactions", "Full dashboard", "Profit & cash flow reports", "Export data"],
    cta: "Start Pro Yearly",
    href: APP_URL,
    highlighted: false,
  },
];

export default function PixeloridGrowthPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center">
            <img
              src="/pixelorid-logo-cropped.png"
              alt="Pixelorid"
              className="h-8 w-auto"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green"
          >
            â† Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-pixel-light-green">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm">
            SaaS Â· Finance
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Simple Financial Insights for Growing Businesses
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Pixelorid Growth helps small business owners track revenue, expenses,
            profit and cash flow â€” all in one simple, practical app.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-pixel-green px-8 font-bold text-white transition hover:bg-pixel-green-hover"
            >
              Try Pixelorid Growth Free â†’
            </a>
            <a
              href={`${APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-8 font-bold text-slate-700 transition hover:border-pixel-green hover:text-pixel-green"
            >
              Log In
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
            What It Does
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Track Your Business Finances
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            No accounting degree needed. Pixelorid Growth is built for business
            owners, not accountants.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pixel-light-green text-pixel-green">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Start Free, Upgrade When Ready
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              No hidden fees. Cancel anytime.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-pixel-green bg-pixel-light-green shadow-lg"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <span className="mb-4 inline-flex self-start rounded-full bg-pixel-green px-3 py-1 text-xs font-bold text-white">
                    Best Value
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </p>
                <p className="mt-1 text-sm font-bold text-pixel-green">{plan.note}</p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pixel-green text-xs font-bold text-white">
                        âœ“
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition ${
                    plan.highlighted
                      ? "bg-pixel-green text-white hover:bg-pixel-green-hover"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-pixel-green hover:text-pixel-green"
                  }`}
                >
                  {plan.cta} â†’
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Prices are in US dollars. Subscriptions managed via Paddle.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Know Where Your Money Goes. Every Month.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Start tracking your business finances today â€” it takes less than a minute to get started.
          </p>
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-xl bg-pixel-green px-8 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
          >
            Try Pixelorid Growth Free â†’
          </a>
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
                <a href="https://id.pinterest.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Pinterest</a>
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
          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            Â© 2026 Pixelorid. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

