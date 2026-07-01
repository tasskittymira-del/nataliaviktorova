"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/lib/content";
import { CaseOverlay } from "./CaseOverlay";

function preloadGallery(caseStudy: CaseStudy) {
  const gallery = caseStudy.gallery ?? [];
  gallery.forEach((item) => {
    if (/\.(mp4|mov|webm)$/i.test(item.file)) return;
    const img = new window.Image();
    img.src = `/works/${item.file}`;
  });
}

export function CaseCard({
  caseStudy,
  roleLabel,
  viewWorksLabel,
}: {
  caseStudy: CaseStudy;
  roleLabel: string;
  viewWorksLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const preloaded = useRef(false);

  const handleMouseEnter = useCallback(() => {
    if (preloaded.current) return;
    preloaded.current = true;
    preloadGallery(caseStudy);
  }, [caseStudy]);

  return (
    <>
      <article
        className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl transition-colors duration-300"
        style={{ background: "var(--bg-light)", border: "1px solid rgba(255,255,255,0.08)" }}
        onMouseEnter={handleMouseEnter}
        onTouchStart={handleMouseEnter}
        onClick={() => setOpen(true)}
      >
        {/* Cover */}
        {/* Cover images are 2440×800 px (≈ 3:1) */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: "2440/800" }}>
          {caseStudy.cover ? (
            <Image
              src={`/works/${caseStudy.cover}`}
              alt={caseStudy.brand}
              fill
              sizes="(max-width: 640px) 100vw, 80vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center"
              style={{
                background: "linear-gradient(135deg, rgba(140,8,4,0.12) 0%, rgba(26,7,6,0.05) 50%, rgba(200,190,188,0.25) 100%)",
              }}
            >
              <p className="font-display text-[0.55rem] font-bold uppercase tracking-[0.2em]"
                style={{ color: "rgba(26,7,6,0.2)" }}>
                {caseStudy.brand}
              </p>
            </div>
          )}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: "rgba(140,8,4,0.04)" }}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col p-5 sm:p-7">
          {/* Brand + period */}
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <h3
              className="font-display text-base font-black uppercase leading-tight tracking-tight"
              style={{ color: "var(--fg-light)" }}
            >
              {caseStudy.brand}
            </h3>
            <span
              className="shrink-0 text-[0.58rem] font-semibold uppercase tracking-widest"
              style={{ color: "var(--fg-light-faint)" }}
            >
              {caseStudy.period}
            </span>
          </div>

          {/* Role */}
          <p className="mb-3 text-xs leading-relaxed">
            <span className="font-semibold" style={{ color: "var(--accent)" }}>
              {roleLabel}:
            </span>{" "}
            <span style={{ color: "var(--fg-light-muted)" }}>{caseStudy.role}</span>
          </p>

          {/* Description */}
          <p className="mb-3 text-sm leading-relaxed" style={{ color: "var(--fg-light-faint)" }}>
            {caseStudy.paragraph}
          </p>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-2.5 py-0.5 text-[0.58rem] font-medium uppercase tracking-wider"
                style={{
                  color: "var(--fg-light-muted)",
                  border: "1px solid rgba(26,7,6,0.1)",
                  background: "rgba(26,7,6,0.02)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity duration-200 group-hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            {viewWorksLabel}
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </article>

      <CaseOverlay isOpen={open} onClose={() => setOpen(false)} caseStudy={caseStudy} roleLabel={roleLabel} />
    </>
  );
}
