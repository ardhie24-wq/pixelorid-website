import Link from "next/link";

export const metadata = {
  title: "Produk Digital",
  description: "Jelajahi produk digital Pixelorid yang tersedia di Etsy, Gumroad, dan Payhip.",
}


const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const categories = [
  {
    title: "Business Templates",
    href: "https://pixelorid.gumroad.com/?tags=business-templates",
    description:
      "Practical templates designed to help small businesses organize their everyday operations.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <line x1="8" y1="13" x2="16" y2="13" />
        <line x1="8" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: "Calculators",
    href: "https://pixelorid.gumroad.com/?tags=calculators",
    description:
      "Simple tools to help business owners calculate costs, pricing, profit, and other important numbers.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="11" x2="8" y2="11.01" />
        <line x1="12" y1="11" x2="12" y2="11.01" />
        <line x1="16" y1="11" x2="16" y2="11.01" />
        <line x1="8" y1="15" x2="8" y2="15.01" />
        <line x1="12" y1="15" x2="12" y2="15.01" />
        <line x1="16" y1="15" x2="16" y2="15.01" />
        <line x1="8" y1="19" x2="8" y2="19.01" />
        <line x1="12" y1="19" x2="12" y2="19.01" />
        <line x1="16" y1="19" x2="16" y2="19.01" />
      </svg>
    ),
  },
  {
    title: "Trackers",
    href: "https://pixelorid.gumroad.com/?tags=trackers",
    description:
      "Easy-to-use trackers for monitoring business activities, performance, and progress.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M3 3v18h18" />
        <path d="M18.7 8 12 14.7l-3.3-3.4L4 16" />
      </svg>
    ),
  },
  {
    title: "SOPs & Guides",
    href: "https://pixelorid.gumroad.com/?tags=guides",
    description:
      "Practical guides and standard operating procedure resources for growing businesses.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1z" />
        <path d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <path d="m9 13 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Canva Templates",
    href: "https://pixelorid.gumroad.com/?tags=canva-templates",
    description:
      "Editable Canva templates created to help business owners work faster and present their business professionally.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18 3.5 3.5 0 0 0 3.5-3.5c0-.83-.33-1.58-.87-2.13a1.5 1.5 0 0 1 1.06-2.56H17a3.5 3.5 0 0 0 3.5-3.5C20.5 6.36 16.7 3 12 3z" />
        <circle cx="8" cy="10" r="1" fill="currentColor" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
        <circle cx="16" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Business Resources",
    href: "https://pixelorid.gumroad.com/?tags=business-resources",
    description:
      "Useful digital resources created to simplify planning, organization, and business management.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="2" y1="13" x2="22" y2="13" />
      </svg>
    ),
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

async function getGumroadProducts() {
  try {
    const token = process.env.GUMROAD_ACCESS_TOKEN;
    const res = await fetch(
      `https://api.gumroad.com/v2/products?access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) return [];

    const data = await res.json();

    return (data.products ?? []).map((p: any) => ({
      id: p.id,
      name: p.name,
      price: (p.price / 100).toFixed(2),
      currency: p.currency,
      url: p.short_url,
      thumbnail: p.thumbnail_url ?? null,
      salesCount: p.sales_count,
    }));
  } catch {
    return [];
  }
}

export default async function DigitalProductsPage() {
  const products = await getGumroadProducts();
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



      <section className="relative overflow-hidden bg-gradient-to-br from-pixel-light-green via-white to-pixel-light-teal px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm ring-1 ring-pixel-green/10">
                Pixelorid Digital Products
              </span>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Practical Digital Resources for Your Business
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Ready-to-use digital products designed to help business
                owners plan, organize, track, and improve their everyday
                operations.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
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

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Product Library
                    </p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">
                      Digital Products
                    </p>
                    <p className="mt-1 text-xs font-semibold text-pixel-green">
                      {products.length} Products Live on Gumroad
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pixel-light-green text-pixel-green">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 2 2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-5">
                  {products
                    .filter((product: any) => product.thumbnail)
                    .slice(0, 20)
                    .map((product: any) => (
                      <div
                        key={product.id}
                        className="overflow-hidden rounded-lg bg-white"
                      >
                        <img
                          src={product.thumbnail}
                          alt={product.name}
                          className="h-12 w-full object-cover"
                        />
                      </div>
                    ))}
                </div>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">
                      Marketplaces
                    </span>
                    <span className="text-sm font-bold text-pixel-green">
                      {marketplaces.length} Stores
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {marketplaces.map((marketplace) => (
                      <span
                        key={marketplace.name}
                        className="rounded-full bg-pixel-light-green px-3 py-1 text-xs font-bold text-pixel-green"
                      >
                        {marketplace.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            <Link
              key={category.title}
              href={category.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg block"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pixel-light-green text-pixel-green">
                {category.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {category.description}
              </p>
            </Link>
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
                  className="group rounded-2xl border border-pixel-green bg-pixel-green p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-white">
                    {marketplace.name}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {marketplace.description}
                  </p>
                  <p className="mt-3 text-sm font-bold text-white opacity-0 transition group-hover:opacity-100">
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

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          Available Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 p-4 transition hover:shadow-md"
            >
              {product.thumbnail && (
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="mb-4 h-40 w-full rounded-lg object-cover"
                />
              )}
              <h3 className="text-sm font-semibold text-slate-800">
                {product.name}
              </h3>
              <p className="mt-2 text-pixel-green font-bold">
                ${product.price}
              </p>
            </a>
          ))}
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
