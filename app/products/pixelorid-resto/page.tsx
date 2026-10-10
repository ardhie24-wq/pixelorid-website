import { pageMeta } from "../../_lib/seo";
export const metadata = pageMeta({
  title: "Pixelorid Resto — Restaurant Management Software for One Branch or Many",
  description:
    "Pixelorid Resto is restaurant management software that handles orders, tables, reservations, staff and reports in one system — built for single restaurants and multi-branch operations.",
  path: "/products/pixelorid-resto",
});

const APP = "https://resto.pixelorid.biz.id";

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
    title: "Fast POS and orders",
    description:
      "Take orders by table, accept cash or QR payments, and export your orders to Excel.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
  {
    title: "Tables, reservations and customers",
    description:
      "Manage your floor, book reservations and keep a simple customer list your team can pick from.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Menu and COGS calculator",
    description:
      "Build your menu and work out the real cost of every dish, so you always know your margin.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="11" x2="8.01" y2="11" />
        <line x1="12" y1="11" x2="12.01" y2="11" />
        <line x1="16" y1="11" x2="16.01" y2="11" />
        <line x1="8" y1="15" x2="8.01" y2="15" />
        <line x1="12" y1="15" x2="12.01" y2="15" />
        <line x1="16" y1="15" x2="16.01" y2="15" />
      </svg>
    ),
  },
  {
    title: "Staff and roles",
    description:
      "Owner, manager and cashier roles. Everyone sees only what they need to do their job.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Reports and dashboard",
    description:
      "Net sales, gross profit, payment methods and best sellers, per day or per month.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    title: "Multiple branches",
    description:
      "Run several branches from one account and compare them side by side.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M4 9h16l-1.1 10.1a1 1 0 0 1-1 .9H6.1a1 1 0 0 1-1-.9L4 9z" />
        <path d="M9 13a3 3 0 0 0 6 0" />
      </svg>
    ),
  },
];

const shots = [
  {
    src: "/resto/resto-pos.png",
    title: "Take orders in seconds",
    text: "Open the POS, pick the table and add items. Your team stays fast, even when the floor is busy.",
  },
  {
    src: "/resto/resto-cogs.png",
    title: "Know the real cost of every dish",
    text: "Build your menu and let the COGS calculator show what each dish really costs you.",
  },
  {
    src: "/resto/resto-dashboard.png",
    title: "See your sales clearly",
    text: "The dashboard turns every order into numbers you can act on, for one branch or all of them.",
  },
];

const audiences = ["Restaurants", "Cafes", "Bakeries", "Multi-branch groups"];

const included = [
  "POS and orders with cash and QR payments",
  "Tables, reservations and customers",
  "Menu and COGS calculator",
  "Owner, manager and cashier roles",
  "Reports, dashboard and Excel export",
];

const plans = [
  {
    name: "Free Trial",
    price: "0",
    originalPrice: null,
    forWho: "Try all features free for 7 days.",
    limit: "1 branch, 7 days",
  },
  {
    name: "Basic",
    price: "15",
    originalPrice: "20",
    forWho: "For a single restaurant or a small pair of branches.",
    limit: "Up to 2 branches",
  },
  {
    name: "Pro",
    price: "75",
    originalPrice: "210",
    forWho: "For a growing restaurant group.",
    limit: "Up to 10 branches",
  },
];

export default function PixeloridRestoPage() {
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
              &larr; All Products
            </a>

            <a
              href={APP + "/login"}
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
                SaaS &middot; Restaurant Management
              </span>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Pixelorid Resto
              </h1>

              <p className="mt-5 text-2xl font-bold leading-tight text-pixel-dark-green">
                Simple restaurant software for growing businesses
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Pixelorid Resto brings orders, tables, reservations, staff and
                reports into one practical system, for one branch or many.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={APP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
                >
                  Explore Pixelorid Resto
                </a>

                <a
                  href={APP + "/login"}
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
                See all features &darr;
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <img
                src="/resto/resto-dashboard.png"
                alt="Pixelorid Resto dashboard"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <span className="mr-2 text-sm font-bold uppercase tracking-widest text-pixel-green">
            Built for
          </span>
          {audiences.map((a) => (
            <span
              key={a}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700"
            >
              {a}
            </span>
          ))}
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              Core features
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything Your Restaurant Needs
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From the first order to the end-of-month report.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mx-auto max-w-7xl space-y-20">
          {shots.map((shot, index) => (
            <div
              key={shot.title}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  {shot.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  {shot.text}
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                <img src={shot.src} alt={shot.title} className="h-auto w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              Simple pricing
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Choose the Number of Branches You Need
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every plan includes all features.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {plan.name}
                </h3>
                <p className="mt-2 text-slate-600">{plan.forWho}</p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">
                    ${plan.price}
                  </span>
                  <span className="text-sm text-slate-500">USD / month</span>
                </p>
                {plan.originalPrice && (
                  <p className="mt-1 text-sm text-slate-400 line-through">
                    ${plan.originalPrice} / month
                  </p>
                )}
                <p className="mt-1 text-sm font-bold text-pixel-green">
                  {plan.limit}
                </p>

                <ul className="mt-6 space-y-3">
                  {included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pixel-light-green text-xs font-bold text-pixel-green">
                        &#10003;
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={APP + "/register"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
                >
                  Sign up
                </a>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Prices are in US dollars and billed monthly.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Start Small. Grow Further.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Create your account and set up your restaurant in minutes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={APP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-7 py-4 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
            >
              Explore Pixelorid Resto
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

          <div className="flex items-center gap-5 text-sm font-semibold text-slate-600">
            <a href="https://www.instagram.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Instagram</a>
            <a href="https://id.pinterest.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Pinterest</a>
          </div>

          <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
            <a href={APP + "/terms-of-service"} className="hover:text-pixel-green">
              Resto Terms of Service
            </a>
            <a href={APP + "/privacy-policy"} className="hover:text-pixel-green">
              Resto Privacy Policy
            </a>
            <a href={APP + "/refund-policy"} className="hover:text-pixel-green">
              Resto Refund Policy
            </a>
          </div>

          <p className="text-sm text-slate-500">
            &copy; 2026 Pixelorid. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}


