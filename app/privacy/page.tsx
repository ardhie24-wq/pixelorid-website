import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Pixelorid — how we collect, use, and protect your personal data.",
};

export default function PrivacyPage() {
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
            Privacy <span className="text-[#16a34a]">Policy</span>
          </h1>
          <p className="text-sm text-[#475569]">
            Last updated: October 4, 2026 &nbsp;·&nbsp; Operated by{" "}
            <strong className="text-[#0f172a]">Ardiyanto</strong>, Klaten, Central Java, Indonesia
          </p>
        </div>

        <div className="space-y-4">

          <Section num="1" title="Introduction">
            <p>
              This Privacy Policy explains how <strong>Ardiyanto</strong>, operating as{" "}
              <strong>Pixelorid</strong> (pixelorid.biz.id), collects, uses, stores, and protects
              your personal data when you use any of our services — including SaaS products,
              digital products, and our website.
            </p>
            <p>We are committed to handling your data responsibly and transparently.</p>
          </Section>

          <Section num="2" title="What Data We Collect">
            <p>
              We collect only what is necessary to operate our services. The data differs by
              product, so it is described below for each SaaS product.
            </p>

            <h3 className="mt-4 text-[15px] font-extrabold text-[#0f172a]">Data common to all SaaS products</h3>
            <ul>
              <li><strong>Account data:</strong> your name, email address, and login credentials</li>
              <li><strong>Business profile data:</strong> information about your business that you provide</li>
              <li><strong>Subscription status:</strong> your plan, trial dates, and payment status as reported to us by Paddle</li>
              <li><strong>Support messages:</strong> messages you send us and our replies</li>
              <li><strong>Technical data:</strong> device and browser type, IP address, and basic logs needed to run and secure the service</li>
              <li><strong>Payment data:</strong> collected by Paddle, not by us (see Section 6)</li>
            </ul>

            <div className="mt-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4">
              <h3 className="mb-2 text-[15px] font-extrabold text-[#0f172a]">Pixelorid POS (Android app and website)</h3>
              <ul>
                <li><strong>License and device data:</strong> license status, trial dates, and the identifier of the device you activate, stored on our servers (Supabase)</li>
                <li><strong>Your business records stay on your device.</strong> The products, prices, costs, orders, and sales you record in the app are stored in a local database on your device. We do not collect them on our servers unless you choose to send them to us, for example as an attachment to a support request.</li>
                <li><strong>Website:</strong> the Pixelorid POS website is hosted on Cloudflare.</li>
              </ul>
            </div>

            <div className="mt-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4">
              <h3 className="mb-2 text-[15px] font-extrabold text-[#0f172a]">Pixelorid Resto (web app)</h3>
              <p>
                Pixelorid Resto runs in your browser, and your restaurant data is stored on our
                servers (Supabase). This includes:
              </p>
              <ul>
                <li>Your name and profile photo</li>
                <li>Restaurant name, logo, currency, tax settings, and time zone</li>
                <li>Branch details (address and phone number)</li>
                <li>Menu items, prices, and costs</li>
                <li>Orders and payment records (cash and QR payments are only recorded in the app)</li>
                <li>Tables and reservations</li>
                <li>Customer details you choose to enter (name and contact)</li>
                <li>Staff accounts (name, email, photo, role, and branch)</li>
              </ul>
              <p>
                Cookies are required to keep you logged in. Your theme and branch preferences are
                saved in your browser.
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4">
              <h3 className="mb-2 text-[15px] font-extrabold text-[#0f172a]">Pixelorid Loop (web app)</h3>
              <p>
                Pixelorid Loop runs in your browser. The information you enter is stored on our
                servers (Supabase) and the app is hosted on Vercel. This includes:
              </p>
              <ul>
                <li>Business name and services offered</li>
                <li>Client records, follow-ups, and message templates</li>
              </ul>
              <p>
                For the data about your own clients that you enter into Loop, you are the
                controller and we process that data on your behalf to provide the service.
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] px-5 py-4">
              <h3 className="mb-2 text-[15px] font-extrabold text-[#0f172a]">Future SaaS products</h3>
              <p>
                When we launch a new SaaS product, the data it handles will be added to this
                section before launch.
              </p>
            </div>
          </Section>

          <Section num="3" title="Data We Do NOT Collect">
            <p>We do not collect, access, or store:</p>
            <ul>
              <li>Payment card numbers, bank details, or financial credentials (payments are handled by Paddle)</li>
              <li>GPS location or location history</li>
              <li>Contact lists, photos, or files from your device, other than files you choose to upload or send to us</li>
              <li>For Pixelorid POS: the sales and operational records stored locally in the app, unless you choose to send them to us</li>
            </ul>
          </Section>
          <Section num="4" title="How We Use Your Data">
            <p>We use your data solely to:</p>
            <ul>
              <li>Create and manage your account</li>
              <li>Verify license status and device activations</li>
              <li>Provide access during your trial or active subscription</li>
              <li>Send transactional emails (account confirmation, password reset)</li>
              <li>Respond to support inquiries</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <div className="mt-3 rounded-lg border-l-4 border-[#16a34a] bg-[#f0fdf4] px-4 py-3 text-sm text-[#166534]">
              🚫 We do <strong>not</strong> sell, rent, or share your personal data with third
              parties for marketing or advertising purposes.
            </div>
          </Section>

          <Section num="5" title="Data Storage & Security">
            <p>
              Your account data is stored on <strong>Supabase</strong>, a cloud database platform
              implementing industry-standard security including encryption at rest and in transit.
              Our websites and applications are hosted with infrastructure providers such as
              Cloudflare (Pixelorid POS website) and Vercel (Pixelorid Loop).
            </p>
            <p>
              We operate from Indonesia, and our service providers may process data in other
              countries. Where personal data is transferred across borders, we take steps to
              ensure it stays protected, such as relying on contractual commitments from our
              providers and, where applicable, recognized transfer safeguards.
            </p>
            <p>
              While we take reasonable measures to protect your data, no online system is
              completely secure. In the event of a breach that materially affects your rights,
              we will notify you as required by applicable law.
            </p>
          </Section>
          <Section num="6" title="Paddle — Payment Processor & Merchant of Record">
            <p>
              SaaS subscription payments are processed by <strong>Paddle.com</strong> (Paddle.com
              Market Limited), acting as our Merchant of Record. This means:
            </p>
            <ul>
              <li>Paddle collects your payment information directly — we never receive or store card data.</li>
              <li>Paddle issues invoices and is legally responsible for payment transactions.</li>
              <li>Paddle may collect additional data for tax compliance and fraud prevention.</li>
            </ul>
            <p>
              Paddle&apos;s data practices are governed by their Privacy Policy at{" "}
              <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#16a34a] underline underline-offset-2">
                paddle.com/legal/privacy
              </a>.
            </p>
          </Section>

          <Section num="7" title="Digital Product Marketplaces">
            <p>
              Digital products are sold via third-party marketplaces including{" "}
              <strong>Etsy</strong>, <strong>Gumroad</strong>, and <strong>Payhip</strong>.
              Purchases on these platforms are subject to each platform&apos;s own privacy policy.
              We may receive your email address from these platforms for order fulfillment only.
            </p>
          </Section>

          <Section num="8" title="Cookies & Local Storage">
            <p>
              Our web portals may use browser <strong>localStorage</strong> to temporarily store
              session data during registration flows. This data is stored on your device only and
              removed once setup is complete.
            </p>
            <p>
              We do not use tracking, advertising, or analytics cookies. Third-party scripts
              (e.g. Supabase JS, Paddle JS) may set their own cookies per their privacy policies.
            </p>
          </Section>

          <Section num="9" title="Data Retention">
            <p>
              We retain your account data for as long as your account is active or as needed to
              provide the service. Upon deletion request, we will remove or anonymize your data
              within 30 days, except where retention is required by law.
            </p>
          </Section>

          <Section num="10" title="Your Rights">
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li><strong>Access</strong> — request a copy of data we hold about you</li>
              <li><strong>Correction</strong> — request correction of inaccurate data</li>
              <li><strong>Deletion</strong> — request deletion of your account and data</li>
              <li><strong>Portability</strong> — request your data in machine-readable format</li>
              <li><strong>Objection</strong> — object to certain types of processing</li>
            </ul>
            <p>
              Contact us at{" "}
              <a href="mailto:support@pixelorid.biz.id" className="font-semibold text-[#16a34a] underline underline-offset-2">
                support@pixelorid.biz.id
              </a>{" "}
              to exercise any of these rights.
            </p>
          </Section>

          <Section num="11" title="Children's Privacy">
            <p>
              Pixelorid services are intended for adult business operators. We do not knowingly
              collect data from individuals under 18. Contact us if you believe this has occurred
              and we will delete it promptly.
            </p>
          </Section>

          <Section num="12" title="Changes to This Policy">
            <p>
              We may update this policy at any time. Significant changes will be communicated via
              the &quot;Last updated&quot; date above and, where appropriate, by email.
            </p>
          </Section>

          <Section num="13" title="Contact">
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

      <LegalFooter current="privacy" />
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
