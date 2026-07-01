"use client";

import { useLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/content";
import { HeroBgText } from "./HeroBgText";

export function Hero() {
  const { locale } = useLocale();
  const t = dictionaries[locale].hero;

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col overflow-hidden bg-bg pt-[36vh] pb-16"
    >
      {/* Big photo placeholder — replace with <Image> when ready */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(180,20,5,0.35) 0%, rgba(12,2,1,0) 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,2,1,1) 0%, rgba(12,2,1,0.55) 40%, rgba(12,2,1,0) 75%)",
          }}
        />
      </div>

      <HeroBgText words={t.heroBgWords} />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10">
        {/* Top label */}
        <p className="label-caps mb-10 text-accent-2">{t.label}</p>

        {/* Editorial heading: first part solid, second faded */}
        <h1 className="font-display uppercase leading-[0.9] tracking-tight">
          <span
            className="block text-[10.5vw] font-black text-fg sm:text-[9vw] lg:text-[7.5vw]"
            style={{ WebkitTextStroke: "0px" }}
          >
            {t.titleLine1}
          </span>
          <span
            className="block text-[10.5vw] font-black sm:text-[9vw] lg:text-[7.5vw]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            {t.titleLine2}
          </span>
        </h1>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-sm leading-relaxed text-fg-muted sm:text-base">
            {t.subhead}
          </p>
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 self-start rounded-full border border-border px-6 py-3 text-xs uppercase tracking-widest text-fg transition-all duration-300 hover:border-accent hover:text-accent sm:self-auto"
          >
            {t.cta}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
