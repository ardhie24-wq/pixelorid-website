import Link from "next/link"

export default function MinimalHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/">
          <img src="/pixelorid-logo-cropped.png" alt="Pixelorid" className="h-8 w-auto" />
        </Link>
        <Link href="/" className="text-sm font-semibold text-slate-600 transition hover:text-pixel-green">
          &larr; Back to Home
        </Link>
      </div>
    </header>
  )
}