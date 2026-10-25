import { pageMeta } from "../../_lib/seo";
import Link from "next/link";
import JsonLd from "../../_components/JsonLd";

export const metadata = pageMeta({
  title: "Invoice and Quotation Software for Freelancers",
  description:
    "Create invoices and quotations, manage customers and track payments in one simple workspace. Start your 7-day free trial.",
  path: "/products/pixelorid-invoice-generator",
});

const SITE_URL = "https://www.pixelorid.biz.id";
const APP_URL = "https://igenerator.pixelorid.biz.id";

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
    title: "Invoices",
    description: "Itemized invoices with quantities, discounts, tax, due dates, notes, and payment instructions.",
    icon: (<svg {...iconProps} className="h-6 w-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h8" /></svg>),
  },
  {
    title: "Quotations",
    description: "Send a quotation with a validity date, then convert an accepted one into an invoice.",
    icon: (<svg {...iconProps} className="h-6 w-6"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>),
  },
  {
    title: "Customers",
    description: "Keep contact details and see each customer's invoice history in one place.",
    icon: (<svg {...iconProps} className="h-6 w-6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
  },
  {
    title: "PDF Export",
    description: "Download clean, printable PDFs for invoices and quotations that your clients can read at a glance.",
    icon: (<svg {...iconProps} className="h-6 w-6"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>),
  },
  {
    title: "Payment Status",
    description: "Track draft, sent, paid, overdue, and canceled invoices so you always know who still owes you.",
    icon: (<svg {...iconProps} className="h-6 w-6"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>),
  },
  {
    title: "Dashboard",
    description: "See what is invoiced, paid, outstanding, and overdue, based only on your own records.",
    icon: (<svg {...iconProps} className="h-6 w-6"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>),
  },
];

const audiences = ["Freelancers", "Consultants", "Small Agencies", "Contractors", "Small Businesses"];

const steps = [
  { title: "Set up your business", description: "Add your business name, logo, currency, tax defaults, and invoice numbering once." },
  { title: "Add customers and create documents", description: "Create an invoice or quotation, add line items, and choose a currency for each document." },
  { title: "Send and track", description: "Download the PDF, send it to your client, and update the status as payments arrive." },
];

const plans = [
  { name: "Free Trial", price: "$0", period: "for 7 days", note: "All features included", cta: "Start Free Trial", highlighted: false },
  { name: "Pro Monthly", price: "$9", period: "USD / month", note: "Unlimited invoices and quotations", cta: "Start Pro Monthly", highlighted: false },
  { name: "Pro Yearly", price: "$90", period: "USD / year", note: "Save $18 per year", cta: "Start Pro Yearly", highlighted: true },
];

const planItems = ["Unlimited invoices and quotations", "Customer management", "PDF export", "Payment status tracking", "Dashboard"];

const faqs = [
  { question: "What is Pixelorid Invoice Generator?", answer: "Pixelorid Invoice Generator is a web app that lets you create professional invoices and quotations, manage customers, and track payment status in one simple workspace." },
  { question: "Who is it for?", answer: "It is built for freelancers, consultants, contractors, small agencies, and small businesses that need reliable invoicing without a heavy accounting system." },
  { question: "Can I send quotations as well as invoices?", answer: "Yes. You can create a quotation with a validity date and convert it into an invoice once the client accepts it." },
  { question: "Can I download invoices as PDF?", answer: "Yes. Every invoice and quotation can be downloaded as a clean, printable PDF to send to your clients." },
  { question: "How much does it cost?", answer: "Start with a 7-day free trial with all features included. After that, pay $9 per month or $90 per year, which saves $18. Prices are in US dollars." },
  { question: "Is my data private?", answer: "Yes. Each account can only access its own customers, invoices, and quotations." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Pixelorid Invoice Generator",
      url: `${SITE_URL}/products/pixelorid-invoice-generator`,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: "A web app to create professional invoices and quotations, manage customers, and track payment status. Built for freelancers and small businesses.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: [
        { "@type": "Offer", name: "Pro Monthly", price: "9", priceCurrency: "USD" },
        { "@type": "Offer", name: "Pro Yearly", price: "90", priceCurrency: "USD" },
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

export default function PixeloridInvoiceGeneratorPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link href="/" className="flex items-center">
            <img src="/pixelorid-logo-cropped.png" alt="Pixelorid" className="h-8 w-auto" />
          </Link>
          <Link href="/products" className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green">All Products</Link>
        </div>
      </header>

      <section className="bg-gradient-to-br from-pixel-light-green via-white to-pixel-light-teal px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-green shadow-sm ring-1 ring-pixel-green/10">SaaS Invoicing</span>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">Invoices and Quotations Without the Busywork</h1>
            <p className="mt-5 text-2xl font-bold leading-tight text-pixel-dark-green">Professional invoicing for freelancers and small businesses.</p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">Create invoices, send quotations, manage customers, and keep track of payments in one simple, modern workspace.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={`${APP_URL}/register`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">Start Your Free Trial</a>
              <a href={`${APP_URL}/login`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-pixel-green bg-white px-6 py-3.5 text-sm font-bold text-pixel-green transition hover:bg-pixel-light-green">Log In</a>
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-5xl rounded-2xl border border-slate-200 bg-white p-2 shadow-xl sm:p-3">
            <img src="/hero-pixelorid-invoice-generator.png" alt="Pixelorid Invoice Generator dashboard showing total invoices, total invoiced, total paid, outstanding and overdue amounts" width={1896} height={861} className="h-auto w-full rounded-xl" />
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Example dashboard with sample data. Your dashboard shows only your own data.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">What It Does</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Invoices, Quotations, and Customers in One Place</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">The essentials for getting paid, and nothing you do not need.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pixel-light-green text-pixel-green">{feature.icon}</div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Who It Is For</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Simple Invoicing for Small Businesses</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Made for people who need reliable invoicing without a heavy accounting system.</p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {audiences.map((label) => (
              <li key={label} className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-pixel-dark-green">{label}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">How It Works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">From Setup to Paid in Three Steps</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pixel-green text-sm font-bold text-white">{index + 1}</span>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl border border-pixel-light-green bg-pixel-light-green p-8 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Free tool</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900">Need One Invoice Right Now? Make It Free</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">Create a professional invoice in minutes and get it as a PDF with the free Invoice Generator. When you need to save customers, send quotations and track payments, Pixelorid Invoice Generator keeps it all in one workspace.</p>
            </div>
            <Link href="/tools/invoice-generator" className="inline-flex shrink-0 items-center justify-center rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">Try the Free Invoice Generator</Link>
          </div>
        </div>
      </section>
      <section id="pricing" className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">Pricing</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Start Free, Upgrade When Ready</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Every plan includes all features. No hidden fees. Cancel anytime.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`flex flex-col rounded-2xl border p-8 ${plan.highlighted ? "border-pixel-green bg-pixel-light-green shadow-lg" : "border-slate-200 bg-white shadow-sm"}`}>
                {plan.highlighted && (<span className="mb-4 inline-flex self-start rounded-full bg-pixel-green px-3 py-1 text-xs font-bold text-white">Best Value</span>)}
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </p>
                <p className="mt-1 text-sm font-bold text-pixel-green">{plan.note}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {planItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pixel-green text-xs font-bold text-white">v</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href={`${APP_URL}/register`} target="_blank" rel="noopener noreferrer" className={`mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition ${plan.highlighted ? "bg-pixel-green text-white hover:bg-pixel-green-hover" : "border border-slate-300 bg-white text-slate-700 hover:border-pixel-green hover:text-pixel-green"}`}>{plan.cta}</a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">Prices are in US dollars. Subscriptions managed via Paddle.</p>
        </div>
      </section>

      <section id="faq" className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Ready to Send Your First Invoice?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">Start your free trial and set up your business in a few minutes.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`${APP_URL}/register`} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-xl bg-pixel-green px-8 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover">Start Your Free Trial</a>
            <Link href="/pricing" className="inline-flex justify-center rounded-xl border border-slate-500 px-8 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800">View Pricing</Link>
          </div>
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
                <a href="https://www.pinterest.com/pixelorid/" target="_blank" rel="noopener noreferrer" className="hover:text-pixel-green">Pinterest</a>
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
          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-500">2026 Pixelorid. All rights reserved.</div>
        </div>
      </footer>
    </main>
  );
}