import Link from "next/link";

export const metadata = {
  title: "Dukungan",
  description: "Butuh bantuan? Hubungi tim support Pixelorid.",
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const productSupportIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1.2.9-1.2 1.7v.5" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const digitalSupportIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M6 8h12l-1 12a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

const generalQuestionsIcon = (
  <svg {...iconProps} className="h-7 w-7">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const supportOptions = [
  {
    title: "Product Support",
    description:
      "Need help understanding a Pixelorid product? Visit the relevant product page to learn more about its features and capabilities.",
    href: "/products",
    button: "Explore Products",
    icon: productSupportIcon,
    iconBg: "bg-pixel-light-green",
    iconColor: "text-pixel-green",
  },
  {
    title: "Digital Product Support",
    description:
      "For digital products purchased through Etsy, Gumroad, or Payhip, please use the support channel provided by the marketplace.",
    href: "/digital-products",
    button: "View Digital Products",
    icon: digitalSupportIcon,
    iconBg: "bg-pixel-light-teal",
    iconColor: "text-pixel-teal",
  },
  {
    title: "General Questions",
    description:
      "Have a question about Pixelorid, our products, or future solutions? Get in touch with our team.",
    href: "mailto:support@pixelorid.biz.id",
    button: "Contact Support",
    icon: generalQuestionsIcon,
    iconBg: "bg-pixel-light-green",
    iconColor: "text-pixel-green",
  },
];

const faqs = [
  {
    question: "Where can I find Pixelorid products?",
    answer:
      "You can explore Pixelorid SaaS products through the Products page and discover our digital resources through the Digital Products page.",
  },
  {
    question: "Where are Pixelorid digital products sold?",
    answer:
      "Pixelorid digital products may be available through marketplaces such as Etsy, Gumroad, and Payhip.",
  },
  {
    question: "Can I use Pixelorid products for my business?",
    answer:
      "Pixelorid products are designed with small and growing businesses in mind. Product-specific features, availability, and terms may vary by product.",
  },
  {
    question: "How can I contact Pixelorid?",
    answer:
      "For general questions, you can contact the Pixelorid support team through the contact option provided on this page.",
  },
];

export default function SupportPage() {
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
            Pixelorid Support
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            How Can We Help?
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find product information, explore our resources, or get in touch
            with the Pixelorid team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {supportOptions.map((option) => (
            <article
              key={option.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${option.iconBg} ${option.iconColor}`}
              >
                {option.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold text-slate-900">
                {option.title}
              </h2>

              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {option.description}
              </p>

              <a
                href={option.href}
                className="mt-7 inline-flex items-center justify-center rounded-xl bg-pixel-green px-5 py-3 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
              >
                {option.button} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Common Questions
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-900">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Still Need Help?
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          We&apos;re here to help you find the right Pixelorid solution for
          your business.
        </p>

        <a
          href="mailto:support@pixelorid.biz.id"
          className="mt-8 inline-flex rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
        >
          Contact Pixelorid Support →
        </a>
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
