"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/loop-hero/03-dashboard.png", alt: "Pixelorid Loop dashboard with follow-up queue" },
  { src: "/loop-hero/05-follow-up-modal.png", alt: "Follow-up message template ready to send via WhatsApp" },
  { src: "/loop-hero/04-follow-ups.png", alt: "Follow-ups list showing overdue clients" },
  { src: "/loop-hero/01-clients.png", alt: "Client list with service and last visit" },
  { src: "/loop-hero/02-client-detail.png", alt: "Client detail with rebooking information" },
];

const AUTOPLAY_MS = 4500;

export default function LoopHeroSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[1764/914] overflow-hidden rounded-2xl bg-slate-50">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1024px) 560px, 100vw"
            priority={i === 0}
            className={`object-cover object-top transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all ${
              i === active ? "w-8 bg-pixel-teal" : "w-2 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}