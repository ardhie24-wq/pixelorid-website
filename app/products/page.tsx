export const metadata = {
  title: "Produk",
  description: "Semua produk Pixelorid: POS, Loop, dan lainnya.",
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const posIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M3 9l1.5-5h15L21 9" />
    <path d="M4 9h16l-1.1 10.1a1 1 0 0 1-1 .9H6.1a1 1 0 0 1-1-.9L4 9z" />
    <path d="M9 13a3 3 0 0 0 6 0" />
  </svg>
);

const loopIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M17 2l4 4-4 4" />
    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
    <path d="M7 22l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
  </svg>
);

const digitalIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const checkIcon = (
  <svg {...iconProps} className="h-4 w-4 shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const products = [
  {
    name: "Pixelorid POS",
    category: "SaaS Â· Food Business",
    description:
      "A practical point-of-sale and business management solution designed for food trucks and mobile food businesses.",
    icon: posIcon,
    iconBg: "bg-pixel-light-green",
    iconColor: "text-pixel-green",
    features: [
      "Point of Sale",
      "Product & Menu Management",
      "Order Management",
      "Payment Tracking",
      "Receipt Printing",
      "Sales Reports",
      "Cost & Profit Tracking",
      "Offline-first operation",
    ],
    href: "/products/pixelorid-pos",
  },
  {
    name: "Pixelorid Loop",
    category: "SaaS Â· Business Management",
    description:
      "Simple business technology designed to help growing businesses manage their workflows more efficiently.",
    icon: loopIcon,
    iconBg: "bg-pixel-light-teal",
    iconColor: "text-pixel-teal",
    features: [
      "Business Workflow Management",
      "Task & Process Organization",
      "Business Tracking",
      "Centralized Information",
      "Simple Reporting",
    ],
    href: "/products/pixelorid-loop",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="inline-flex items-center">
            <img
              src="/pixelorid-logo-cropped.png"
              alt="Pixelorid"
              className="h-8 w-auto"
            />
          </a>

          <a
            href="/"
            className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green"
          >
            â† Back to Home
          </a>
        </div>
      </header>

      <section className="px-6 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-pixel-light-green px-4 py-2 text-sm font-bold text-pixel-dark-green">
              Pixelorid SaaS Products
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Products Built for Growing Businesses
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore Pixelorid tools designed to simplify operations, improve
              workflows, and support your next stage of growth.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-10"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${product.iconBg} ${product.iconColor}`}
                >
                  {product.icon}
                </div>

                <p className="mt-6 text-sm font-bold uppercase tracking-wide text-pixel-green">
                  {product.category}
                </p>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  {product.name}
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-8">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900">
                    Key Features
                  </h3>

                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 text-pixel-green">
                          {checkIcon}
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={product.href}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
                >
                  Explore {product.name} â†’
                </a>
              </article>
            ))}
          </div>

          <article className="mt-8 rounded-3xl border border-teal-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg lg:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pixel-light-teal text-pixel-teal">
              {digitalIcon}
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-pixel-teal">
              Digital Products
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
              Practical Digital Resources
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
              Business templates, calculators, trackers, SOPs, guides, and other
              practical digital resources designed to help business owners plan,
              organize, and improve their operations.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Business Templates",
                "Calculators",
                "Trackers",
                "SOPs & Guides",
                "Canva Templates",
                "Business Resources",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>

            <a
              href="/digital-products"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
            >
              Explore Digital Products â†’
            </a>
          </article>
          <section className="mt-16 rounded-3xl border border-pixel-light-green bg-pixel-light-green p-8 text-center lg:p-12">
            <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">
              More Pixelorid Products Are Coming Soon
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              We're building practical technology for more types of growing
              businesses.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

