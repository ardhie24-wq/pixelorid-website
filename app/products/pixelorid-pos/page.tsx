const features = [
  {
    title: "Point of Sale",
    description:
      "Take orders quickly and keep your daily sales organized from one simple workspace.",
  },
  {
    title: "Product & Menu Management",
    description:
      "Manage products, categories, prices, costs, and menu information in one place.",
  },
  {
    title: "Order Management",
    description:
      "Keep orders organized from the moment they are created through payment completion.",
  },
  {
    title: "Payment Tracking",
    description:
      "Track completed payments and keep your transaction records organized.",
  },
  {
    title: "Receipt Printing",
    description:
      "Connect supported thermal printers and print customer receipts after payment.",
  },
  {
    title: "Sales Reports",
    description:
      "Understand your daily business activity with practical sales reporting.",
  },
  {
    title: "Cost & Profit Tracking",
    description:
      "Track product costs, operating expenses, and profit instead of looking at sales alone.",
  },
  {
    title: "Offline-first",
    description:
      "Designed around food truck workflows where reliable connectivity cannot always be guaranteed.",
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

          <a
            href="/products"
            className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green"
          >
            ← All Products
          </a>
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
                  href="#features"
                  className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
                >
                  Explore Features
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-pixel-green hover:text-pixel-green"
                >
                  View All Products
                </a>
              </div>
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

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pixel-light-green text-xl font-extrabold text-pixel-green">
                    $
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
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pixel-light-green text-lg font-extrabold text-pixel-green">
                  ✓
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

          <a
            href="/products"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-pixel-green px-7 py-4 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
          >
            Explore Pixelorid Products →
          </a>
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
