import Link from "next/link";

const categories = [
  {
    title: "Business Templates",
    description:
      "Practical templates designed to help small businesses organize their everyday operations.",
  },
  {
    title: "Calculators",
    description:
      "Simple tools to help business owners calculate costs, pricing, profit, and other important numbers.",
  },
  {
    title: "Trackers",
    description:
      "Easy-to-use trackers for monitoring business activities, performance, and progress.",
  },
  {
    title: "SOPs & Guides",
    description:
      "Practical guides and standard operating procedure resources for growing businesses.",
  },
  {
    title: "Canva Templates",
    description:
      "Editable Canva templates created to help business owners work faster and present their business professionally.",
  },
  {
    title: "Business Resources",
    description:
      "Useful digital resources created to simplify planning, organization, and business management.",
  },
];

const marketplaces = [
  {
    name: "Etsy",
    description: "Digital templates & resources",
    href: "https://pixelorid.etsy.com",
  },
  {
    name: "Gumroad",
    description: "Digital business products",
    href: "https://pixelorid.gumroad.com/",
  },
  {
    name: "Payhip",
    description: "Business resources",
    href: "https://payhip.com/pixelorid",
  },
];

export default function DigitalProductsPage() {
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
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-8 lg:py-28">
          <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm">
            Pixelorid Digital Products
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Practical Digital Resources for Your Business
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Ready-to-use digital products designed to help business owners
            plan, organize, track, and improve their everyday operations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {marketplaces.map((marketplace) => (
              <a
                key={marketplace.name}
                href={marketplace.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
              >
                Shop on {marketplace.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
            Explore Our Resources
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tools Made for Real Business Needs
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            From business templates and calculators to SOPs, trackers, and
            editable resources, Pixelorid digital products are built to be
            practical and easy to use.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pixel-light-green text-xl font-extrabold text-pixel-green">
                {category.title.charAt(0)}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {category.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
                Available Online
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Find Pixelorid Digital Products on Your Favorite Marketplace
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Our digital products are available through trusted online
                marketplaces, making it easy to discover and purchase the
                resources that fit your business needs.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {marketplaces.map((marketplace) => (
                <a
                  key={marketplace.name}
                  href={marketplace.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-pixel-green hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-pixel-green">
                    {marketplace.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {marketplace.description}
                  </p>
                  <p className="mt-3 text-sm font-bold text-pixel-green opacity-0 transition group-hover:opacity-100">
                    Visit store →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Built to Help You Work Smarter
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Pixelorid digital products focus on practical solutions that save
          time, improve organization, and help small business owners make
          better decisions.
        </p>

        <Link
          href="/products"
          className="mt-8 inline-flex rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
        >
          Explore Pixelorid SaaS →
        </Link>
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
