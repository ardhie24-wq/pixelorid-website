const capabilities = [
  {
    title: "Business Workflows",
    description:
      "Organize everyday business workflows in a structured and accessible workspace.",
  },
  {
    title: "Task & Process Organization",
    description:
      "Keep important tasks and business processes organized so work is easier to follow.",
  },
  {
    title: "Business Tracking",
    description:
      "Keep track of important business activities and information from one central workspace.",
  },
  {
    title: "Centralized Information",
    description:
      "Bring relevant business information together instead of managing everything across disconnected tools.",
  },
  {
    title: "Support Communication",
    description:
      "Keep support conversations organized through structured chat threads and file attachments.",
  },
  {
    title: "Web-Based Access",
    description:
      "Access your business workspace through the web without depending on a single device.",
  },
];

export default function PixeloridLoopPage() {
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
              ← All Products
            </a>

            <a
              href="https://loop.pixelorid.biz.id/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-pixel-teal transition hover:text-pixel-dark-teal"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-pixel-light-teal via-white to-pixel-light-green px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-pixel-teal shadow-sm ring-1 ring-pixel-teal/10">
                SaaS · Business Management
              </span>

              <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Pixelorid Loop
              </h1>

              <p className="mt-5 text-2xl font-bold leading-tight text-pixel-dark-teal">
                Simple Technology for More Organized Business Workflows
              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Simple business technology designed to help growing businesses
                manage their workflows more efficiently.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://loop.pixelorid.biz.id/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-pixel-teal px-6 py-3.5 text-sm font-bold text-white transition hover:bg-pixel-dark-teal"
                >
                  Try Pixelorid Loop Free
                </a>

                <a
                  href="https://loop.pixelorid.biz.id/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-pixel-teal bg-white px-6 py-3.5 text-sm font-bold text-pixel-teal transition hover:bg-pixel-light-teal"
                >
                  Login
                </a>
              </div>

              <a
                href="#capabilities"
                className="mt-5 inline-flex text-sm font-bold text-slate-500 underline-offset-4 transition hover:text-pixel-teal hover:underline"
              >
                See what it does ↓
              </a>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="rounded-2xl bg-slate-50 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Business Workspace
                    </p>
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">
                      Pixelorid Loop
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pixel-light-teal text-xl font-extrabold text-pixel-teal">
                    L
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <div className="rounded-xl bg-white p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-800">
                        Business Workflow
                      </span>
                      <span className="text-xs font-bold text-pixel-teal">
                        Active
                      </span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-4/5 rounded-full bg-pixel-teal" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-4">
                      <p className="text-xs font-semibold text-slate-500">
                        Tasks
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        Organized
                      </p>
                    </div>

                    <div className="rounded-xl bg-white p-4">
                      <p className="text-xs font-semibold text-slate-500">
                        Support
                      </p>
                      <p className="mt-1 text-2xl font-extrabold text-pixel-teal">
                        Connected
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      Centralized Information
                    </p>
                    <p className="mt-2 text-sm font-bold text-slate-800">
                      Keep business information in one organized workspace.
                    </p>
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
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-teal">
              Built for growing businesses
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Keep Your Business Work More Organized
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              As a business grows, more tasks, processes, information, and
              conversations need to be managed. Pixelorid Loop is designed to
              bring these workflows into a more organized digital workspace.
            </p>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-pixel-teal">
              Core capabilities
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A More Organized Way to Manage Business Work
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pixelorid Loop focuses on practical workflows and centralized
              business information without unnecessary complexity.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pixel-light-teal text-lg font-extrabold text-pixel-teal">
                  ✓
                </div>

                <h3 className="mt-5 text-lg font-extrabold text-slate-900">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {capability.description}
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
              <p className="text-sm font-bold uppercase tracking-widest text-pixel-teal">
                Stay connected
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Keep Business Communication Organized
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Business support conversations can quickly become difficult to
                follow when they are spread across different channels.
                Pixelorid Loop provides structured chat threads with support
                for file attachments, helping conversations stay connected to
                the business workflow.
              </p>
            </div>

            <div className="rounded-3xl border border-pixel-light-teal bg-pixel-light-teal p-8">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">
                      Support Thread
                    </span>
                    <span className="text-xs font-bold text-pixel-teal">
                      Active
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Keep customer or business support conversations organized
                    in a dedicated thread.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">
                      Attachments
                    </span>
                    <span className="text-xs font-bold text-pixel-teal">
                      Supported
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    Share relevant files directly within the conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-pixel-teal">
            Simple technology
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Organize Your Work. Build Better Workflows.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Pixelorid Loop is designed to help growing businesses bring more
            structure to the way they manage everyday work.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://loop.pixelorid.biz.id/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-pixel-teal px-7 py-4 text-sm font-bold text-white transition hover:bg-pixel-dark-teal"
            >
              Try Pixelorid Loop Free
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

          <p className="text-sm text-slate-500">
            © 2026 Pixelorid. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
