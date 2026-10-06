import HeroSlider from "./components/HeroSlider";

const products = [
  {
    name: "Pixelorid POS",
    category: "SaaS · Food Business",
    description:
      "A practical point-of-sale and business management solution designed for food trucks and mobile food businesses.",
    href: "/products/pixelorid-pos",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M4 9h16l-1.1 10.1a1 1 0 0 1-1 .9H6.1a1 1 0 0 1-1-.9L4 9z" />
        <path d="M9 13a3 3 0 0 0 6 0" />
      </svg>
    ),
  },
  {
    name: "Pixelorid Resto",
    category: "SaaS · Restaurant Management",
    description:
      "Pixelorid Resto brings orders, tables, reservations, staff and reports into one practical system, for one branch or many.",
    href: "/products/pixelorid-resto",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M3 2v7a2 2 0 0 0 4 0V2" />
        <path d="M7 2v20" />
        <path d="M17 2c-1.1 0-2 1.3-2 3v4c0 1.7.9 3 2 3s2-1.3 2-3V5c0-1.7-.9-3-2-3z" />
        <path d="M17 12v10" />
      </svg>
    ),
  },
  {
    name: "Pixelorid Loop",
    category: "SaaS · Service Business",
    description:
      "A web-based client follow-up app built for small service businesses — track every lead and client, know who to follow up with, and never let a conversation go cold.",
    href: "/products/pixelorid-loop",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M17 2l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 22l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const businessTypes = [
  {
    label: "Food Businesses",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <path d="M3 2v7a2 2 0 0 0 4 0V2" />
        <path d="M7 2v20" />
        <path d="M17 2c-1.1 0-2 1.3-2 3v4c0 1.7.9 3 2 3s2-1.3 2-3V5c0-1.7-.9-3-2-3z" />
        <path d="M17 12v10" />
      </svg>
    ),
  },
  {
    label: "Beauty Businesses",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    label: "Retail Businesses",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    label: "Service Businesses",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Growing Businesses",
    icon: (
      <svg {...iconProps} className="h-5 w-5">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Simple",
    description:
      "Easy-to-understand tools without unnecessary complexity.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Practical",
    description:
      "Built around real business needs and everyday workflows.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Accessible",
    description:
      "Technology designed with growing businesses in mind.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 9.9-1" />
      </svg>
    ),
  },
  {
    title: "Built to Grow",
    description:
      "Solutions that evolve with your business as your needs change.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    ),
  },
];

const digitalProducts = [
  "Business Templates",
  "Calculators",
  "Trackers",
  "SOPs & Guides",
  "Canva Templates",
  "Business Resources",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="inline-flex items-center"><img src="/pixelorid-logo-cropped.png" alt="Pixelorid" className="h-8 w-auto" /></a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            <a href="/products" className="transition hover:text-pixel-green">
              Products
            </a>
            <a
              href="/digital-products"
              className="transition hover:text-pixel-green"
            >
              Digital Products
            </a>
            <a href="/pricing" className="transition hover:text-pixel-green">
              Pricing
            </a>
            <a href="/about" className="transition hover:text-pixel-green">
              About
            </a>
            <a href="/support" className="transition hover:text-pixel-green">
              Support
            </a>
          </nav>

          <a
            href="/products"
            className="hidden rounded-xl bg-pixel-green px-5 py-3 text-sm font-bold text-white transition hover:bg-pixel-green-hover sm:inline-flex"
          >
            Get Started
          </a>

          <details className="relative lg:hidden">
  <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-slate-700">
    <span className="text-xl">&#9776;</span>
  </summary>

  <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
    <nav className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
      <a href="/products" className="rounded-lg px-4 py-3 hover:bg-pixel-light-green hover:text-pixel-green">
        Products
      </a>
      <a href="/digital-products" className="rounded-lg px-4 py-3 hover:bg-pixel-light-green hover:text-pixel-green">
        Digital Products
      </a>
      <a href="/pricing" className="rounded-lg px-4 py-3 hover:bg-pixel-light-green hover:text-pixel-green">
        Pricing
      </a>
      <a href="/about" className="rounded-lg px-4 py-3 hover:bg-pixel-light-green hover:text-pixel-green">
        About
      </a>
      <a href="/support" className="rounded-lg px-4 py-3 hover:bg-pixel-light-green hover:text-pixel-green">
        Support
      </a>
      <a href="/products" className="mt-2 rounded-xl bg-pixel-green px-4 py-3 text-center font-bold text-white hover:bg-pixel-green-hover">
        Get Started
      </a>
    </nav>
  </div>
</details>
        </div>
      </header>

      {/* Hero */}
      <HeroSlider />

      {/* Brand intro */}
      <section id="about" className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-28">
          <div className="mx-auto mb-5 h-1 w-12 rounded-full bg-pixel-green" />

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Technology That Grows With Your Business
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Starting small shouldn&apos;t mean thinking small.
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-slate-600">
            Pixelorid creates practical technology for businesses at different
            stages of growth — from getting started with limited resources to
            managing a growing operation.
          </p>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="font-bold text-pixel-green">OUR PRODUCTS</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Tools Built for Growing Businesses
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore Pixelorid products designed to solve real business
              problems, simplify everyday operations, and support your next
              stage of growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-pixel-green">
                  {product.icon}
                </div>

                <p className="text-sm font-bold text-pixel-green">
                  {product.category}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-slate-950">
                  {product.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {product.description}
                </p>

                <a
                  href={product.href}
                  className="mt-7 inline-flex font-bold text-pixel-green transition hover:text-pixel-green-hover"
                >
                  Explore {product.name} →
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-green-100 bg-green-50 p-7 sm:flex-row sm:items-center">
            <div>
              <p className="font-bold text-slate-950">
                More Pixelorid products are coming soon.
              </p>
              <p className="mt-1 text-sm text-slate-600">
                We&apos;re building more practical tools for growing businesses.
              </p>
            </div>

            <a
              href="/products"
              className="font-bold text-pixel-green hover:text-pixel-green-hover"
            >
              View All Products →
            </a>
          </div>
        </div>
      </section>

      {/* Small businesses */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold text-pixel-green">BUILT FOR BUSINESS</p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Built for Small Businesses
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you&apos;re starting with a small operation or managing
                a growing business, Pixelorid provides practical, approachable
                technology for businesses at every stage of growth.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {businessTypes.map((business, index) => (
                <div
                  key={business.label}
                  className={`rounded-2xl border p-5 ${
                    index === businessTypes.length - 1
                      ? "border-green-200 bg-green-50"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div
                    className={`mb-3 flex h-9 w-9 items-center justify-center rounded-xl ${
                      index === businessTypes.length - 1
                        ? "bg-white text-pixel-green"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {business.icon}
                  </div>
                  <p className="font-bold text-slate-900">{business.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Pixelorid */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold text-pixel-green">WHY PIXELORID</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Technology Without the Complexity
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-pixel-green">
                  {benefit.icon}
                </div>

                <h3 className="text-lg font-extrabold text-slate-950">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Products */}
      <section id="digital-products" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold text-pixel-green">DIGITAL PRODUCTS</p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Digital Resources for Your Business
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Beyond SaaS, Pixelorid creates practical digital products and
                resources to help business owners plan, organize, track, and
                improve their operations.
              </p>

              <a
                href="/digital-products"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-pixel-green px-6 font-bold text-white transition hover:bg-pixel-green-hover"
              >
                Explore Digital Products
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {digitalProducts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-sm font-semibold text-slate-500">
            Available on Etsy · Gumroad · Payhip
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:py-28">
          <p className="font-bold text-green-400">OUR PHILOSOPHY</p>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Start Small, Build Better, Grow Further.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Your business doesn&apos;t have to be big to deserve better
            technology.
          </p>

          <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-slate-300">
            Pixelorid is built around a simple idea: useful technology should
            be accessible to businesses at every stage of growth.
          </p>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {["Start", "Grow", "Build", "Establish"].map((stage, index) => (
              <div key={stage} className="flex items-center gap-3">
                <div className="rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-bold text-white">
                  {stage}
                </div>

                {index < 3 && (
                  <span className="hidden text-slate-600 sm:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="pricing" className="bg-green-50">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-28">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Ready to Find the Right Tool for Your Business?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Explore Pixelorid products designed to help your business move
            forward.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/products"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-pixel-green px-6 font-bold text-white transition hover:bg-pixel-green-hover"
            >
              Explore Products
            </a>

            <a
              href="/support"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 font-bold text-slate-800 transition hover:bg-slate-50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="support" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a href="/" className="inline-flex items-center"><img src="/pixelorid-logo-cropped.png" alt="Pixelorid" className="h-8 w-auto" /></a>

              <p className="mt-4 max-w-sm leading-7 text-slate-600">
                Simple technology for growing businesses.
              </p>
              <div className="mt-4 flex items-center gap-5 text-sm font-semibold text-slate-600">
                <a href="https://www.instagram.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Instagram</a>
                <a href="https://id.pinterest.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Pinterest</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-950">Products</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a className="block hover:text-pixel-green" href="/products/pixelorid-pos">Pixelorid POS
                </a>
                <a className="block hover:text-pixel-green" href="/products/pixelorid-resto">Pixelorid Resto
                </a>
                <a className="block hover:text-pixel-green" href="/products/pixelorid-loop">Pixelorid Loop
                </a>
                <a className="block hover:text-pixel-green" href="/products">All Products
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-950">Digital Products</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a
                  className="block hover:text-pixel-green"
                  href="https://pixelorid.etsy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Etsy
                </a>
                <a
                  className="block hover:text-pixel-green"
                  href="https://pixelorid.gumroad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gumroad
                </a>
                <a
                  className="block hover:text-pixel-green"
                  href="https://payhip.com/pixelorid"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Payhip
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-950">Company</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a className="block hover:text-pixel-green" href="/about">
                  About
                </a>
                <a className="block hover:text-pixel-green" href="/pricing">
                  Pricing
                </a>
                <a className="block hover:text-pixel-green" href="/support">
                  Support
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-slate-950">Legal</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-600">
                <a className="block hover:text-pixel-green" href="/terms">
                  Terms of Service
                </a>
                <a className="block hover:text-pixel-green" href="/privacy">
                  Privacy Policy
                </a>
                <a className="block hover:text-pixel-green" href="/refund">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-7 text-sm text-slate-500">
            © 2026 Pixelorid. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
