import Link from "next/link";
import { pageMeta } from "../../_lib/seo";
import JsonLd from "../../_components/JsonLd";
import LoopHeroSlider from "../../components/LoopHeroSlider";

export const metadata = pageMeta({
  title: "Client Follow-Up App for Small Service Businesses",
  description:
    "Track every client and lead, see who is due for a follow-up, and reach out on time. Try Pixelorid Loop free for 7 days.",
  path: "/products/pixelorid-loop",
});

const APP_URL = "https://loop.pixelorid.biz.id";
const SITE_URL = "https://www.pixelorid.biz.id";

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
    title: "Client Records",
    description:
      "Keep contact details and visit history for every client in one organized place.",
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
    title: "Follow-Up List",
    description:
      "See at a glance which clients are due for a follow-up, based on their last visit and how often they usually return.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Activity History",
    description:
      "Record every interaction so you always know what was said, and when.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Message Templates",
    description:
      "Start from ready-made templates and reach out in seconds instead of writing from scratch.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Services and Rebooking Intervals",
    description:
      "Set up your services and how often each client usually returns, so follow-ups match your real schedule.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Web-Based Access",
    description:
      "Open Loop from any browser on your phone or computer. Nothing to install.",
    icon: (
      <svg {...iconProps} className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const steps = [
  {
    title: "Add your clients and services",
    description:
      "Save each client and the services you offer, and set how often a client usually comes back.",
  },
  {
    title: "See who is due",
    description:
      "Loop compares each last visit date with the usual rebooking interval and lists the clients who need a follow-up.",
  },
  {
    title: "Reach out and log it",
    description:
      "Use a ready-made message template to get in touch, then record the activity so nothing is forgotten.",
  },
];

const audiences = [
  "Salons and Beauty Studios",
  "Barbershops",
  "Spas and Wellness",
  "Personal Care Services",
  "Small Service Teams",
];

const planItems = [
  "Client records and follow-up list",
  "Message templates",
  "Activity history",
];

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "for 7 days",
    note: "Try every feature",
    items: planItems,
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro Monthly",
    price: "$10",
    period: "USD / month",
    note: "Billed monthly",
    items: planItems,
    cta: "Start Pro Monthly",
    highlighted: false,
  },
  {
    name: "Pro Yearly",
    price: "$100",
    period: "USD / year",
    note: "Save $20 per year",
    items: planItems,
    cta: "Start Pro Yearly",
    highlighted: true,
  },
];

const faqs = [
  {
    question: "What is Pixelorid Loop?",
    answer:
      "Pixelorid Loop is a web-based client follow-up app for small service businesses. It keeps your clients, services and activity in one place and shows you who is due for a follow-up.",
  },
  {
    question: "Who is Pixelorid Loop for?",
    answer:
      "It is built for small service businesses whose clients come back regularly, such as salons, barbershops and spas.",
  },
  {
    question: "How does Loop know who to follow up with?",
    answer:
      "You set how often each client usually returns. Loop compares that rebooking interval with the date of the last visit and lists the clients who are due.",
  },
  {
    question: "Do I need to install anything?",
    answer:
      "No. Pixelorid Loop runs in your web browser on a phone or a computer.",
  },
  {
    question: "How much does Pixelorid Loop cost?",
    answer:
      "Every plan includes all features. Start with a 7-day free trial, then pay $10 per month or $100 per year, which saves $20. Prices are in US dollars.",
  },
  {
    question: "Is my client data private?",
    answer:
      "Yes. Each business account can only access its own data.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Pixelorid Loop",
      url: `${SITE_URL}/products/pixelorid-loop`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "A web-based client follow-up app for small service businesses. Track clients, see who is due for a follow-up and log every interaction.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: [
        {
          "@type": "Offer",
          name: "Pro Monthly",
          price: "10",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Pro Yearly",
          price: "100",
          priceCurrency: "USD",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function PixeloridLoopPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center">
            <img
              src="/pixelorid-logo-cropped.png"
              alt="Pixelorid"
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/products"
              className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green"
            >
              ← All Products
            </Link>

            <a
              href={`${APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-pixel-green transition hover:text-pixel-green-hover"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pixel-light-teal via-white to-pixel-light-green px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm ring-1 ring-pixel-green/10">
                Pixelorid Loop · SaaS for Service Businesses
              </span>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Never Miss a Client Follow-Up Again
              </h1>

              <p className="mt-5 text-2xl font-bold leading-tight text-pixel-green-hover">
                A simple client follow-up app for small service businesses
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Pixelorid Loop keeps every client, visit and message in one
                place and shows you who is due for a follow-up, so repeat
                bookings stop slipping through the cracks.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`${APP_URL}/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
                >
                  Start Your 7-Day Free Trial →
                </a>

                <a
                  href={`${APP_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-pixel-green bg-white px-6 py-3.5 text-sm font-bold text-pixel-green transition hover:bg-pixel-light-teal"
                >
                  Log In
                </a>
              </div>

              <a
                href="#how-it-works"
                className="mt-5 inline-flex text-sm font-bold text-slate-500 underline-offset-4 transition hover:text-pixel-green hover:underline"
              >
                See how it works ↓
              </a>
            </div>

            <LoopHeroSlider />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Follow-Ups Slip When Client Details Live in Chats and Memory
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            When you are busy serving clients, it is easy to forget who was due
            to come back. Loop gives you one clear list of the clients to
            contact, so every returning client gets a timely message.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything You Need to Keep Clients Coming Back
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Practical tools for client follow-up, without the complexity of a
              big CRM.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pixel-light-teal text-pixel-green">
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

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              From Client List to Follow-Up in Three Steps
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pixel-green text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Made for Businesses With Returning Clients
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            If your clients book again and again, Loop helps you stay in touch
            at the right time.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {audiences.map((label) => (
              <li
                key={label}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-pixel-dark-green"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Start With a 7-Day Free Trial
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every plan includes all features.
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
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </p>
                <p className="mt-1 text-sm font-bold text-pixel-green">
                  {plan.note}
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pixel-green text-xs font-bold text-white">
                        ✓
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${APP_URL}/register`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition ${
                    plan.highlighted
                      ? "bg-pixel-green text-white hover:bg-pixel-green-hover"
                      : "border border-slate-300 bg-white text-slate-700 hover:border-pixel-green hover:text-pixel-green"
                  }`}
                >
                  {plan.cta} →
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Prices are in US dollars. See{" "}
            <Link href="/pricing" className="font-semibold text-pixel-green hover:underline">
              all Pixelorid pricing
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Keep Every Client One Follow-Up Away
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Start your free trial and see who is due for a follow-up today.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/register`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-7 py-4 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
            >
              Start Your 7-Day Free Trial →
            </a>

            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-transparent px-7 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-slate-900"
            >
              Explore Other Products
            </Link>
          </div>
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
              <div className="mt-4 flex items-center gap-5 text-sm font-semibold text-slate-600">
                <a
                  href="https://www.instagram.com/pixelorid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pixel-green"
                >
                  Instagram
                </a>
                <a
                  href="https://www.pinterest.com/pixelorid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pixel-green"
                >
                  Pinterest
                </a>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-semibold text-slate-600">
              <Link href="/products" className="hover:text-pixel-green">Products</Link>
              <Link href="/digital-products" className="hover:text-pixel-green">Digital Products</Link>
              <Link href="/pricing" className="hover:text-pixel-green">Pricing</Link>
              <Link href="/blog" className="hover:text-pixel-green">Blog</Link>
              <Link href="/about" className="hover:text-pixel-green">About</Link>
              <Link href="/support" className="hover:text-pixel-green">Support</Link>
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
