"use client";

import Image from "next/image";
import { useLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/content";

export function About() {
  const { locale } = useLocale();
  const t = dictionaries[locale].about;
  const [lead, ...rest] = t.intro;

  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">

        {/* Heading */}
        <div className="mb-8 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <h2
            className="font-display text-[10vw] font-black uppercase leading-none tracking-tight sm:text-[5vw]"
            style={{ color: "var(--fg-light)" }}
          >
            {t.heading}
          </h2>
          <p
            className="max-w-[220px] self-start text-xs uppercase tracking-widest sm:self-end sm:text-right"
            style={{ color: "var(--fg-light-faint)" }}
          >
            {lead.split(". ").map((line, i, arr) => (
              <span key={i} className="block">
                {line}{i < arr.length - 1 ? "." : ""}
              </span>
            ))}
          </p>
        </div>

        {/* Photo 3:4 + text */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-16 sm:pt-10">

          {/* Photo — 3:4, ~38% width */}
          <div
            className="relative w-full shrink-0 overflow-hidden rounded-xl sm:w-[38%]"
            style={{ aspectRatio: "3/4", background: "var(--bg-light-alt)" }}
          >
            <Image
              src="/works/about-photo.png"
              alt={t.photoCaption}
              fill
              sizes="(max-width: 640px) 100vw, 38vw"
              className="object-cover"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              priority
            />
          </div>

          {/* Text column */}
          <div className="flex flex-1 flex-col justify-start sm:w-[62%]">
            {/* Name caption */}
            <p
              className="mb-6 text-[0.625rem] font-semibold uppercase tracking-widest"
              style={{ color: "var(--fg-light-faint)" }}
            >
              {t.photoCaption}
            </p>

            {/* Bio paragraphs */}
            <div className="text-sm leading-relaxed" style={{ color: "var(--fg-light-muted)" }}>
              {rest.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 ? "mb-5 text-base font-semibold" : "mb-4"}
                  style={i === 0 ? { color: "var(--fg-light)" } : {}}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise + Education */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-5 text-[0.625rem] font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              {t.expertiseLabel}
            </p>
            {t.expertise.map((group) => (
              <div key={group.group} className="mb-4">
                <p className="mb-1.5 text-[0.65rem] font-semibold uppercase tracking-wide" style={{ color: "var(--fg-light-faint)" }}>
                  {group.group}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-light-muted)" }}>
                  {group.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-5 text-[0.625rem] font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              {t.educationLabel}
            </p>
            <ul className="space-y-3">
              {t.education.map((e, i) => (
                <li key={i} className="text-sm leading-relaxed" style={{ color: "var(--fg-light-muted)" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Principles */}
        <div className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-16">
          <div className="shrink-0 sm:w-48">
            <p className="font-display text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
              {dictionaries[locale].principlesLabel}
            </p>
          </div>
          <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
            {dictionaries[locale].principles.map((principle, i) => (
              <div key={principle} className="flex items-start gap-4">
                <span
                  className="shrink-0 font-display text-sm font-black tabular-nums"
                  style={{ color: "var(--fg-light)", opacity: 0.2 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-sm font-bold leading-snug tracking-tight" style={{ color: "var(--fg-light)" }}>
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
