"use client";

import { useEffect, useState } from "react";

type HeroSlide = {
  image: string;
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaHref: string;
};

// Ganti nilai "image" di bawah ini sesuai nama file gambar
// yang sudah kamu taruh di folder /public
const slides: HeroSlide[] = [
  {
    image: "/hero-pixelorid-pos.png",
    title: "Point-of-Sale Built for",
    highlight: "Food Businesses",
    description:
      "Pixelorid POS helps food trucks and mobile food businesses manage orders, sales, and operations in one simple system.",
    ctaText: "Explore Pixelorid POS",
    ctaHref: "/products/pixelorid-pos",
  },
  {
    image: "/hero-pixelorid-loop.png",
    title: "Never Miss a",
    highlight: "Client Follow-Up",
    description:
      "Pixelorid Loop is a web-based follow-up app built for small service businesses — track every client, log every conversation, and know exactly who to reach out to next.",
    ctaText: "Explore Pixelorid Loop",
    ctaHref: "/products/pixelorid-loop",
  },
  {
    image: "/hero-digital-products.png",
    title: "Digital Resources for",
    highlight: "Every Business Owner",
    description:
      "Business templates, calculators, trackers, and guides available on Etsy, Gumroad, and Payhip.",
    ctaText: "Explore Digital Products",
    ctaHref: "/digital-products",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[560px] w-full bg-slate-900 sm:h-[620px] lg:h-[680px]">
        {/* Background images (crossfade) */}
        {slides.map((s, index) => (
          <img
            key={s.image}
            src={s.image}
            alt={s.highlight}
            onError={(e) => {
              // Sembunyikan ikon "broken image" kalau file gambar belum ada
              e.currentTarget.style.opacity = "0";
            }}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/10 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-8 lg:pb-24">
          <div key={slide.image} className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}{" "}
              <span className="text-pixel-green">{slide.highlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={slide.ctaHref}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-pixel-green px-6 font-bold text-white transition hover:bg-pixel-green-hover"
              >
                {slide.ctaText}
              </a>

              <a
                href="/products"
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-white bg-transparent px-6 font-bold text-white transition hover:bg-white hover:text-slate-900"
              >
                View All Products
              </a>
            </div>
          </div>

          {/* Dot navigation */}
          <div className="mt-10 flex items-center gap-3">
            {slides.map((s, index) => (
              <button
                key={s.image}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show ${s.highlight} slide`}
                className={`h-2.5 rounded-full transition-all ${
                  index === active
                    ? "w-8 bg-pixel-green"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
