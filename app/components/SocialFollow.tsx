export default function SocialFollow() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center lg:px-8">
        <p className="mb-4 text-sm font-semibold text-slate-600">
          Follow Pixelorid for new template ideas
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://www.pinterest.com/pixelorid/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-bold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#E60023" }}
          >
            Follow on Pinterest
          </a>
          <a
            href="https://www.instagram.com/pixelorid/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl px-6 text-sm font-bold text-white transition hover:opacity-90"
            style={{
              background:
                "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
            }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}