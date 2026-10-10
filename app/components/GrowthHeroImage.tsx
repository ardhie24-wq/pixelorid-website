import Image from "next/image";

export default function GrowthHeroImage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
      <Image
        src="/hero-pixelorid-growth.png"
        alt="Pixelorid Growth app preview showing revenue, expenses, profit and cash flow"
        width={1672}
        height={940}
        priority
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-auto w-full rounded-2xl"
      />
    </div>
  );
}