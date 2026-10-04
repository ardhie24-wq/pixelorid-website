import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Refund Policy for Pixelorid — 7-day refunds for SaaS subscriptions via Paddle; digital products are final.",
};

export default function RefundPage() {
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
            Refund <span className="text-[#16a34a]">Policy</span>
          </h1>
          <p className="text-sm text-[#475569]">
            Last updated: October 4, 2026 &nbsp;·&nbsp; Operated by{" "}
            <strong className="text-[#0f172a]">Ardiyanto</strong>, Klaten, Central Java, Indonesia
          </p>
        </div>

        {/* Policy banner */}
        <div className="mb-6 rounded-2xl bg-[#0f172a] px-8 py-10 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#16a34a] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
            Refund Policy at a Glance
          </span>
          <div className="mt-6 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-xl bg-[#1e293b] px-5 py-5">
              <h2 className="mb-2 text-lg font-extrabold text-white">SaaS Subscriptions</h2>
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                Pixelorid POS, Resto, Loop and future SaaS products:{" "}
                <strong className="text-white">7-day refund window</strong>, handled by Paddle.
              </p>
            </div>
            <div className="rounded-xl bg-[#1e293b] px-5 py-5">
              <h2 className="mb-2 text-lg font-extrabold text-white">Digital Products</h2>
              <p className="text-sm leading-relaxed text-[#94a3b8]">
                Templates sold on Etsy, Gumroad and Payhip:{" "}
                <strong className="text-white">all sales are final</strong>, no refunds.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">

          <Section num="1" title="SaaS Subscriptions">
            <p>
              <strong>Paddle.com</strong> is the Merchant of Record for all our SaaS orders and
              handles payments, billing, taxes, and refunds. See the{" "}
              <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#16a34a] underline underline-offset-2">
                Paddle Checkout Buyer Terms
              </a>{" "}
              and{" "}
              <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#16a34a] underline underline-offset-2">
                Paddle Privacy Policy
              </a>.
            </p>
            <ul>
              <li>
                You may request a refund within <strong>7 days</strong> of the payment date. This
                applies to your first payment and to each renewal, and you do not need to give a
                reason.
              </li>
              <li>
                Submit your request at{" "}
                <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#16a34a] underline underline-offset-2">
                  paddle.net
                </a>{" "}
                using the email address you used for the purchase, or email{" "}
                <a href="mailto:support@pixelorid.biz.id" className="font-semibold text-[#16a34a] underline underline-offset-2">
                  support@pixelorid.biz.id
                </a>{" "}
                and we will help you.
              </li>
              <li>Requests made after 7 days are reviewed case by case.</li>
              <li>
                Approved refunds are returned by Paddle to the original payment method. Timing
                depends on your payment provider.
              </li>
            </ul>
          </Section>

          <Section num="2" title="Free Trials">
            <p>
              A free trial period itself carries no charge, so there is nothing to refund during
              the trial. Your first payment after the trial is covered by Section 1.
            </p>
          </Section>

          <Section num="3" title="Cancellation (SaaS Subscriptions)">
            <p>You may cancel your SaaS subscription at any time. Upon cancellation:</p>
            <ul>
              <li>Your subscription remains active until the end of the current paid period.</li>
              <li>You will not be charged for the next renewal cycle.</li>
              <li>Cancelling does not by itself create a refund beyond the 7-day window in Section 1.</li>
            </ul>
            <p>
              To cancel, contact us at{" "}
              <a href="mailto:support@pixelorid.biz.id" className="font-semibold text-[#16a34a] underline underline-offset-2">
                support@pixelorid.biz.id
              </a>{" "}
              or manage your subscription via the Paddle billing portal in your confirmation email.
            </p>
          </Section>

          <Section num="4" title="Digital Products">
            <p>
              Digital products are delivered instantly as downloadable files and cannot be
              returned, so all sales are final and not refundable. Please review the description
              and previews on the product listing before you buy.
            </p>
            <p>
              The refund rules of the marketplace where you bought the product (Etsy, Gumroad, or
              Payhip) also apply. If you have a problem with a file, contact us at{" "}
              <a href="mailto:support@pixelorid.biz.id" className="font-semibold text-[#16a34a] underline underline-offset-2">
                support@pixelorid.biz.id
              </a>{" "}
              and we will try to help.
            </p>
          </Section>
          <Section num="5" title="Statutory Rights & Legal Exceptions">
            <p>
              We acknowledge that certain jurisdictions grant statutory consumer rights that may apply:
            </p>
            <ul>
              <li>
                <strong>EU / EEA consumers</strong> — EU law provides a 14-day right of
                withdrawal for digital service contracts. However, this right may be waived when
                the consumer expressly consents to immediate access and acknowledges the loss of
                withdrawal rights before purchase. Such consent is collected at checkout. As a
                result, the withdrawal right is generally waived once service or product access
                begins.
              </li>
              <li>
                <strong>Other jurisdictions</strong> — If mandatory consumer protection laws in
                your country grant rights that cannot be contractually waived, we will comply to
                the minimum extent required by law.
              </li>
            </ul>
            <div className="mt-3 rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              ⚠️ Nothing in this policy excludes rights you hold under mandatory applicable law.
              If you believe you have a statutory entitlement to a refund, please contact us.
            </div>
          </Section>

          <Section num="6" title="Payment Disputes & Chargebacks">
            <p>
              All SaaS payments are processed by <strong>Paddle.com</strong> (Merchant of Record).
              If you believe you were charged in error, please contact us at{" "}
              <a href="mailto:support@pixelorid.biz.id" className="font-semibold text-[#16a34a] underline underline-offset-2">
                support@pixelorid.biz.id
              </a>{" "}
              before initiating a chargeback. Filing a chargeback without first contacting us may
              result in immediate account suspension.
            </p>
          </Section>

          <Section num="7" title="Contact Us">
            <p>We aim to respond to all inquiries within 3 business days.</p>
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

      <LegalFooter current="refund" />
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
