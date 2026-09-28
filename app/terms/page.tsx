import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Pixelorid — governing your use of our SaaS products and digital products.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">

      {/* ── NAVBAR ── */}
      <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-xl font-extrabold tracking-tight text-[#0f172a]">
            Pixel<span className="text-[#16a34a]">orid</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-[#475569] transition-colors hover:text-[#16a34a]">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <main className="mx-auto max-w-3xl px-6 py-14 pb-20">

        <div className="mb-10 border-b border-[#e2e8f0] pb-8">
          <span className="mb-4 inline-block rounded-full bg-[#f0fdf4] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#16a34a]">
            Legal
          </span>
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight text-[#0f172a]">
            Terms of <span className="text-[#16a34a]">Service</span>
          </h1>
          <p className="text-sm text-[#475569]">
            Last updated: September 27, 2026 &nbsp;·&nbsp; Operated by{" "}
            <strong className="text-[#0f172a]">Ardiyanto</strong>, Klaten, Central Java, Indonesia
          </p>
        </div>

        <div className="space-y-4">

          <Section num="1" title="Introduction & Acceptance">
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of all
              products and services operated by <strong>Ardiyanto</strong> under the{" "}
              <strong>Pixelorid</strong> brand (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;),
              an individual/sole trader based in Klaten, Central Java, Indonesia.
            </p>
            <p>
              By creating an account, downloading an app, purchasing a product, or using any part
              of our services, you agree to be bound by these Terms. If you do not agree, please
              do not use our services.
            </p>
          </Section>

          <Section num="2" title="Description of Services">
            <p>Pixelorid operates two categories of products:</p>
            <ul>
              <li>
                <strong>SaaS Products</strong> — subscription-based software platforms accessible
                via web or mobile app, requiring an active subscription or free trial. We may offer
                multiple SaaS products across different business categories, each with its own
                product page and feature set.
              </li>
              <li>
                <strong>Digital Products</strong> — downloadable templates, spreadsheets,
                calculators, guides, and other digital resources sold as one-time purchases via
                third-party marketplaces including Etsy, Gumroad, and Payhip.
              </li>
            </ul>
            <p>
              Our product portfolio may expand over time. Each product may have supplemental
              documentation available on its respective product page.
            </p>
          </Section>

          <Section num="3" title="Free Trial (SaaS Products)">
            <p>
              New accounts for our SaaS products may be granted a free trial period upon
              registration — full access at no charge, no payment information required.
            </p>
            <ul>
              <li>The trial begins on the date your account is created.</li>
              <li>Access to paid features is restricted after the trial unless you subscribe.</li>
              <li>
                One trial per account. Creating multiple accounts to extend trial access is a
                violation of these Terms.
              </li>
            </ul>
            <p>
              The duration of the free trial may vary by product and is displayed on the respective
              product page at the time of registration.
            </p>
          </Section>

          <Section num="4" title="Subscriptions & Payments">
            <p>
              Continued use of SaaS products after the trial requires a paid subscription, billed
              in advance. All SaaS payments are processed by <strong>Paddle.com</strong>, our
              authorized payment processor and Merchant of Record. By subscribing you also agree
              to Paddle&apos;s terms of service. We never receive or store your payment card data.
            </p>
            <p>
              Subscriptions renew automatically unless cancelled before the next renewal date.
              Prices are displayed on each product&apos;s pricing page and may change with advance
              notice.
            </p>
            <p>
              Digital product purchases are one-time payments processed by the respective
              marketplace (Etsy, Gumroad, or Payhip) and governed by that platform&apos;s payment
              terms.
            </p>
          </Section>

          <Section num="5" title="User Obligations">
            <p>By using our services, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information when registering.</li>
              <li>Keep your login credentials confidential.</li>
              <li>Use the services only for lawful purposes.</li>
              <li>
                Not reverse-engineer, decompile, or tamper with our software or license systems.
              </li>
              <li>Not resell, redistribute, or sublicense our products to third parties.</li>
              <li>
                Not use our services to process transactions for illegal goods or services.
              </li>
            </ul>
          </Section>

          <Section num="6" title="Intellectual Property">
            <p>
              All Pixelorid products — software, website content, branding, logos, templates, and
              underlying code — are the intellectual property of Ardiyanto and protected by
              applicable law. Nothing in these Terms transfers ownership rights to you.
            </p>
            <p>
              You retain all rights to your own business data entered into our applications.
            </p>
          </Section>

          <Section num="7" title="Suspension & Termination">
            <p>
              We may suspend or terminate your account if you violate these Terms, engage in
              fraudulent activity, or fail to pay subscription fees within the applicable grace
              period.
            </p>
            <p>
              You may cancel at any time by contacting{" "}
              <a href="mailto:support@pixelorid.biz.id" className="font-semibold text-[#16a34a] underline underline-offset-2">
                support@pixelorid.biz.id
              </a>
              . Cancellation stops future billing but does not entitle you to a refund of amounts
              already charged (see our{" "}
              <Link href="/refund" className="font-semibold text-[#16a34a] underline underline-offset-2">
                Refund Policy
              </Link>
              ).
            </p>
          </Section>

          <Section num="8" title="Disclaimer of Warranties">
            <p>
              Our services are provided <strong>&quot;as is&quot;</strong> and{" "}
              <strong>&quot;as available&quot;</strong> without warranties of any kind. We do not
              warrant that the services will be uninterrupted, error-free, or completely secure.
            </p>
          </Section>

          <Section num="9" title="Limitation of Liability">
            <p>
              To the maximum extent permitted by law, Ardiyanto shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of our services, including loss of revenue, data loss, or service interruption.
            </p>
            <p>
              Our total aggregate liability shall not exceed the amount you paid us in the{" "}
              <strong>three (3) months</strong> preceding the claim.
            </p>
            <div className="mt-3 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              ⚠️ Some jurisdictions do not allow these limitations. In such cases, our liability
              will be limited to the fullest extent permitted by applicable law.
            </div>
          </Section>

          <Section num="10" title="Changes to These Terms">
            <p>
              We may update these Terms at any time. We will notify you of material changes by
              updating the date above and, where appropriate, by email. Continued use after
              changes take effect constitutes acceptance.
            </p>
          </Section>

          <Section num="11" title="Governing Law">
            <p>
              These Terms are governed by the laws of <strong>Indonesia</strong>. Disputes shall
              be subject to the competent courts in Klaten, Central Java, Indonesia, unless
              otherwise required by mandatory local consumer protection law.
            </p>
          </Section>

          <Section num="12" title="Contact">
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@pixelorid.biz.id" className="font-semibold text-[#16a34a] underline underline-offset-2">
                  support@pixelorid.biz.id
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://pixelorid.biz.id" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#16a34a] underline underline-offset-2">
                  pixelorid.biz.id
                </a>
              </li>
              <li>
                <strong>Operated by:</strong> Ardiyanto, Klaten, Central Java, Indonesia
              </li>
            </ul>
          </Section>

        </div>
      </main>

      <LegalFooter current="terms" />
    </div>
  );
}

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#e2e8f0] bg-white px-8 py-7">
      <h2 className="mb-4 flex items-center gap-3 text-[17px] font-extrabold text-[#0f172a]">
        <span className="flex h-7 w-7 min-w-[28px] items-center justify-center rounded-lg bg-[#f0fdf4] text-xs font-extrabold text-[#16a34a]">
          {num}
        </span>
        {title}
      </h2>
      <div className="space-y-3 text-[14.5px] leading-relaxed text-[#475467] [&_strong]:text-[#0f172a] [&_ul]:mt-2 [&_ul]:space-y-1 [&_ul>li]:relative [&_ul>li]:pl-5 [&_ul>li]:before:absolute [&_ul>li]:before:left-1 [&_ul>li]:before:font-bold [&_ul>li]:before:text-[#16a34a] [&_ul>li]:before:content-['•']">
        {children}
      </div>
    </div>
  );
}

function LegalFooter({ current }: { current: "terms" | "privacy" | "refund" }) {
  const links = [
    { href: "/terms", label: "Terms of Service", key: "terms" },
    { href: "/privacy", label: "Privacy Policy", key: "privacy" },
    { href: "/refund", label: "Refund Policy", key: "refund" },
  ];
  return (
    <footer className="border-t border-[#e2e8f0] bg-white py-8 text-center text-sm text-[#475569]">
      <p className="mb-3 font-extrabold text-[#0f172a]">Pixelorid</p>
      <div className="flex flex-wrap justify-center gap-5">
        {links.map((l) => (
          <Link
            key={l.key}
            href={l.href}
            className={l.key === current ? "font-bold text-[#16a34a]" : "transition-colors hover:text-[#16a34a]"}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
