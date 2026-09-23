import Link from "next/link";

const principles = [
  {
    title: "Simple",
    description:
      "Technology should be easy to understand and practical to use, without unnecessary complexity.",
  },
  {
    title: "Practical",
    description:
      "We focus on real business needs and everyday workflows that help owners get things done.",
  },
  {
    title: "Accessible",
    description:
      "Useful technology should be approachable for businesses at different stages of growth.",
  },
  {
    title: "Built to Grow",
    description:
      "Our products are designed around the changing needs of businesses as they grow and evolve.",
  },
];

const stages = [
  "Start",
  "Grow",
  "Build",
  "Establish",
];

export default function AboutPage() {
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
            About Pixelorid
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Technology That Grows With Your Business
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Pixelorid creates simple, practical technology and digital
            resources for businesses that want to work better and grow with
            confidence.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              Our Story
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Starting Small Shouldn&apos;t Mean Thinking Small
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Small businesses often have to do more with limited time,
              resources, and technology. Pixelorid was created around the idea
              that useful technology should not be complicated or reserved for
              large companies.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We build practical SaaS products and digital resources that help
              business owners organize their work, manage everyday operations,
              and make progress toward their next stage of growth.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 lg:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pixel-light-green text-2xl font-extrabold text-pixel-green">
              P
            </div>

            <h3 className="mt-7 text-2xl font-extrabold text-slate-900">
              Our Mission
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              To create approachable technology that helps growing businesses
              operate more simply, stay organized, and move forward.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Technology Without the Complexity
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We believe technology should solve problems, not create more of
              them.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pixel-light-green font-extrabold text-pixel-green">
                  {principle.title.charAt(0)}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {principle.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-green">
            Built for Growth
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Every Business Has a Next Stage
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Pixelorid is designed to support businesses as their needs change,
            from getting started to building a more established operation.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, index) => (
            <div
              key={stage}
              className="relative rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pixel-light-green font-extrabold text-pixel-green">
                {index + 1}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {stage}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {index === 0 && "Turn an idea into a working business."}
                {index === 1 && "Build better systems for everyday work."}
                {index === 2 && "Organize operations as your business expands."}
                {index === 3 && "Create a stronger foundation for the future."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Start Small. Build Better. Grow Further.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Your business doesn&apos;t have to be big to deserve better
            technology.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex rounded-xl bg-pixel-green px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-green-hover"
          >
            Explore Pixelorid Products →
          </Link>
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
