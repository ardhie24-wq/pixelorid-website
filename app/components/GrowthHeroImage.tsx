import Image from "next/image";

export default function GrowthHeroImage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
      <div className="relative aspect-[6/5] w-full overflow-hidden rounded-2xl">
        <Image
          src="/hero-pixelorid-growth.png"
          alt="Pixelorid Growth app preview showing revenue, expenses, profit and cash flow"
          fill
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover object-right"
        />
      </div>
    </div>
  );
}