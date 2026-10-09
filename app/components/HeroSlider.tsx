"use client";

import { useEffect, useState } from "react";

type HeroSlide = {
  image?: string;
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  secondaryExternal?: boolean;
  chips?: { label: string; href: string }[];
};

// Slide pertama = brand (tanpa gambar). Slide lain = sorotan produk.
const slides: HeroSlide[] = [
  {
    image: "/hero-simple-technology.png",
    title: "Simple Technology for",
    highlight: "Growing Businesses",
    description:
      "Pixelorid builds practical software and digital resources for small businesses: POS, Resto, Loop, Growth, and ready-to-use templates.",
    ctaText: "Explore Products",
    ctaHref: "/products",
    secondaryCtaText: "Digital Products",
    secondaryCtaHref: "/digital-products",
    chips: [
      { label: "Pixelorid POS", href: "/products/pixelorid-pos" },
      { label: "Pixelorid Resto", href: "/products/pixelorid-resto" },
      { label: "Pixelorid Loop", href: "/products/pixelorid-loop" },
      { label: "Pixelorid Growth", href: "https://growth.pixelorid.biz.id" },
      { label: "Digital Resources", href: "/digital-products" },
    ],
  },
  {
    image: "/hero-pixelorid-pos.png",
    title: "Point-of-Sale Built for",
    highlight: "Food Businesses",
    description:
      "Pixelorid POS helps food trucks and mobile food businesses manage orders, sales, and operations in one simple system.",
    ctaText: "Explore Pixelorid POS",
    ctaHref: "/products/pixelorid-pos",
    secondaryCtaText: "View All Products",
    secondaryCtaHref: "/products",
  },
  {
    image: "/hero-pixelorid-resto.png",
    title: "Simple Restaurant Software for",
    highlight: "Growing Businesses",
    description:
      "Pixelorid Resto brings orders, tables, reservations, staff and reports into one practical system, for one branch or many.",
    ctaText: "Explore Pixelorid Resto",
    ctaHref: "/products/pixelorid-resto",
    secondaryCtaText: "Visit Pixelorid Resto",
    secondaryCtaHref: "https://resto.pixelorid.biz.id",
    secondaryExternal: true,
  },
  {
    image: "/hero-pixelorid-loop.png",
    title: "Never Miss a",
    highlight: "Client Follow-Up",
    description:
      "Pixelorid Loop is a web-based follow-up app built for small service businesses \u2014 track every client, log every conversation, and know exactly who to reach out to next.",
    ctaText: "Explore Pixelorid Loop",
    ctaHref: "/products/pixelorid-loop",
    secondaryCtaText: "Try Pixelorid Loop Free",
    secondaryCtaHref: "https://loop.pixelorid.biz.id",
    secondaryExternal: true,
  },
  {
    image: "/hero-pixelorid-growth.png",
    title: "Simple Finance for",
    highlight: "Small Businesses",
    description:
      "Pixelorid Growth helps small businesses record revenue and expenses, see profit at a glance, and export clear reports to Excel.",
    ctaText: "Try Pixelorid Growth Free",
    ctaHref: "https://growth.pixelorid.biz.id",
    ctaExternal: true,
    secondaryCtaText: "View All Products",
    secondaryCtaHref: "/products",
  },
  {
    image: "/hero-digital-products.png",
    title: "Digital Resources for",
    highlight: "Every Business Owner",
    description:
      "Business templates, calculators, trackers, and guides available on Etsy, Gumroad, and Payhip.",
    ctaText: "Explore Digital Products",
    ctaHref: "/digital-products",
    secondaryCtaText: "View All Products",
    secondaryCtaHref: "/products",
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
  // Slide brand = H1 halaman; slide produk memakai H2
  const Heading = active === 0 ? "h1" : "h2";

  return (
    <section
      className="relative isolate overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[560px] w-full bg-slate-900 sm:h-[620px] lg:h-[680px]">
        {/* Background (crossfade) */}
        {slides.map((s, index) =>
          s.image ? (
            <img
              key={s.image}
              src={s.image}
              alt={s.highlight}
              onError={(e) => {
                e.currentTarget.style.opacity = "0";
              }}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : (
            <div
              key={`bg-${index}`}
              className={`absolute inset-0 bg-gradient-to-br from-green-900 via-slate-900 to-slate-950 transition-opacity duration-1000 ease-in-out ${
                index === active ? "opacity-100" : "opacity-0"
              }`}
            />
          )
        )}

        {/* Readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/10 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 lg:px-8 lg:pb-24">
          <div key={active} className="max-w-2xl">
            <Heading className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}{" "}
              <span className="text-pixel-green">{slide.highlight}</span>
            </Heading>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              {slide.description}
            </p>

            {slide.chips && (
              <div className="mt-6 hidden flex-wrap gap-2 sm:flex">
                {slide.chips.map((chip) => (
                  <a
                    key={chip.href}
                    href={chip.href}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
                  >
                    {chip.label}
                  </a>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={slide.ctaHref}
                {...(slide.ctaExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-pixel-green px-6 font-bold text-white transition hover:bg-pixel-green-hover"
              >
                {slide.ctaText}
              </a>

              <a
                href={slide.secondaryCtaHref}
                {...(slide.secondaryExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-white bg-transparent px-6 font-bold text-white transition hover:bg-white hover:text-slate-900"
              >
                {slide.secondaryCtaText}
              </a>
            </div>
          </div>

          {/* Dot navigation */}
          <div className="mt-10 flex items-center gap-3">
            {slides.map((s, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show slide ${index + 1}: ${s.highlight}`}
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
