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
    title: "Point of Sale",
    description:
      "Take orders quickly and keep your daily sales organized from one simple workspace.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Product & Menu Management",
    description:
      "Manage products, categories, prices, costs, and menu information in one place.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Order Management",
    description:
      "Keep orders organized from the moment they are created through payment completion.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
      </svg>
    ),
  },
  {
    title: "Payment Tracking",
    description:
      "Track completed payments and keep your transaction records organized.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
  {
    title: "Receipt Printing",
    description:
      "Connect supported thermal printers and print customer receipts after payment.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    title: "Sales Reports",
    description:
      "Understand your daily business activity with practical sales reporting.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    title: "Cost & Profit Tracking",
    description:
      "Track product costs, operating expenses, and profit instead of looking at sales alone.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    title: "Offline-first",
    description:
      "Designed around food truck workflows where reliable connectivity cannot always be guaranteed.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <line x1="1" y1="1" x2="23" y2="23" />
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
        <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </svg>
    ),
  },
];

const audiences = [
  "Food Trucks",
  "Mobile Food Businesses",
  "Small Food Businesses",
  "Growing Food Operations",
];

export default function PixeloridPOSPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="inline-flex items-center">
            <img
              src="/pixelorid-logo-cropped.png"
              alt="Pixelorid"
              className="h-8 w-auto"
            />
          </a>

          <div className="flex items-center gap-6">
            <a
              href="/products"
              className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green"
            >
              ← All Products
            </a>

            <a
              href="https://pos.pixelorid.biz.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-pixel-green transition hover:text-pixel-green-hover"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-pixel-light-green via-white to-pixel-light-teal px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm ring-1 ring-pixel-green/10">
                SaaS · Food Business
              </span>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Pixelorid POS
              </h1>

              <p className="mt-5 text-2xl font-bold leading-tight text-pixel-dark-green">
                Point of Sale & Business Management for Food Trucks
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                A practical point-of-sale and business management solution
                designed for food trucks and mobile food businesses.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://pos.pixelorid.biz.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
                >
                  Get Started
                </a>

                <a
                  href="https://pos.pixelorid.biz.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-pixel-green bg-white px-6 py-3.5 text-sm font-bold text-pixel-green transition hover:bg-pixel-light-green"
                >
                  Login
                </a>
              </div>

              <a
                href="#features"
                className="mt-5 inline-flex text-sm font-bold text-slate-500 underline-offset-4 transition hover:text-pixel-green hover:underline"
              >
                See all features ↓
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Today's Sales
                    </p>
                    <p className="mt-2 text-3xl font-extrabold text-slate-900">
                      $2,480.00
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
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Orders
                    </p>
                    <p className="mt-1 text-xl font-extrabold text-slate-900">
                      84
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Items
                    </p>
                    <p className="mt-1 text-xl font-extrabold text-slate-900">
                      126
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Profit
                    </p>
                    <p className="mt-1 text-xl font-extrabold text-pixel-green">
                      $740
                    </p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">
                      Daily performance
                    </span>
                    <span className="text-sm font-bold text-pixel-green">
                      +18.4%
                    </span>
                  </div>

                  <div className="mt-4 flex h-28 items-end gap-2">
                    <div className="h-10 flex-1 rounded-t-lg bg-pixel-green/20" />
                    <div className="h-16 flex-1 rounded-t-lg bg-pixel-green/30" />
                    <div className="h-12 flex-1 rounded-t-lg bg-pixel-green/40" />
                    <div className="h-20 flex-1 rounded-t-lg bg-pixel-green/50" />
                    <div className="h-24 flex-1 rounded-t-lg bg-pixel-green/60" />
                    <div className="h-28 flex-1 rounded-t-lg bg-pixel-green" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              Built for food businesses
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Designed Around the Way Food Trucks Work
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Food truck businesses need technology that is practical,
              straightforward, and ready for fast-moving daily operations.
              Pixelorid POS brings essential business workflows together in
              one place.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {audiences.map((audience) => (
              <span
                key={audience}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              Core features
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Run Your Daily Operations
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pixelorid POS brings everyday sales and business management tasks
              into a practical workflow.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pixel-light-green text-pixel-green">
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
                Beyond sales
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Understand Your Business Beyond Revenue
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Sales tell you how much money came in. Pixelorid POS is
                designed to help you look deeper by considering product costs,
                recipes, ingredients, operating expenses, and profit.
              </p>
            </div>

            <div className="rounded-3xl border border-pixel-light-green bg-pixel-light-green p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Revenue
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">
                    Sales
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Product Costs
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">
                    COGS
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Expenses
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">
                    Operations
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <p className="text-sm font-semibold text-slate-500">
                    Result
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-pixel-green">
                    Net Profit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
            Simple technology
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Built to Help Your Business Move Forward
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Start with the tools you need today and build toward a more
            organized, data-driven operation as your business grows.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://pos.pixelorid.biz.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-7 py-4 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
            >
              Get Started with Pixelorid POS
            </a>

            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-transparent px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Other Products
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <img
            src="/pixelorid-logo-cropped.png"
            alt="Pixelorid"
            className="h-7 w-auto"
          />

          <p className="text-sm text-slate-500">
            © 2026 Pixelorid. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
