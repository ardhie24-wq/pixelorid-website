import Image from "next/image";

export default function PosHeroImage() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
      <Image
        src="/pos-hero/pos-dashboard.png"
        alt="Pixelorid POS business dashboard showing daily sales, gross profit and payment methods"
        width={1580}
        height={846}
        priority
        sizes="(min-width: 1024px) 560px, 100vw"
        className="h-auto w-full rounded-2xl"
      />
    </div>
  );
}