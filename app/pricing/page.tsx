import Link from "next/link";

const options = [
  {
    title: "Pixelorid SaaS",
    description:
      "Business software designed to help growing businesses manage their everyday operations more efficiently.",
    items: [
      "Practical business tools",
      "Designed for growing businesses",
      "Product-specific features",
      "Flexible subscription options",
    ],
    href: "/products",
    button: "Explore SaaS Products",
  },
  {
    title: "Digital Products",
    description:
      "Ready-to-use templates, calculators, trackers, SOPs, and other resources for business owners.",
    items: [
      "Business templates",
      "Calculators & trackers",
      "SOPs & guides",
      "Canva templates",
    ],
    href: "/digital-products",
    button: "Explore Digital Products",
  },
];

export default function PricingPage() {
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
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="bg-pixel-light-green">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm">
            Pixelorid Pricing
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Choose the Right Solution for Your Business
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Pixelorid offers practical SaaS products and digital resources
            designed for businesses at different stages of growth.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {options.map((option) => (
            <article
              key={option.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
            >
              <h2 className="text-2xl font-extrabold text-slate-900">
                {option.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {option.description}
              </p>

              <ul className="mt-7 space-y-4">
                {option.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pixel-light-green text-sm font-bold text-pixel-green">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={option.href}
                className="mt-9 inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
              >
                {option.button} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
            Simple & Transparent
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Pricing That Fits the Product
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Pixelorid products are offered independently, so each product can
            have pricing and plans that match its features and business needs.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Product-specific pricing and availability are shown on the
            respective product or marketplace.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Not Sure Where to Start?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Explore our products and resources to find the solution that matches
          your current business needs.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/products"
            className="inline-flex rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
          >
            Explore SaaS Products
          </Link>

          <Link
            href="/digital-products"
            className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-pixel-green hover:text-pixel-green"
          >
            Browse Digital Products
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <img
                src="/pixelorid-logo-cropped.png"
                alt="Pixelorid"
                className="h-8 w-auto"
              />
              <p className="mt-3 text-sm text-slate-500">
                Simple technology for growing businesses.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
              <Link href="/products" className="hover:text-pixel-green">
                Products
              </Link>
              <Link
                href="/digital-products"
                className="hover:text-pixel-green"
              >
                Digital Products
              </Link>
              <Link href="/pricing" className="hover:text-pixel-green">
                Pricing
              </Link>
              <Link href="/about" className="hover:text-pixel-green">
                About
              </Link>
              <Link href="/support" className="hover:text-pixel-green">
                Support
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">
            © 2026 Pixelorid. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
