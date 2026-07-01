"use client";

import { useLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/content";
import { CaseCard } from "./CaseCard";

const SECTION_LABELS: Record<string, string> = {
  "graff-ai": "AI",
  "graff-smm": "SMM",
};

export function Portfolio() {
  const { locale } = useLocale();
  const t = dictionaries[locale].portfolio;

  return (
    <section id="portfolio" className="py-24 sm:py-32" style={{ background: "var(--bg-light)" }}>
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">

        <div className="mb-16">
          <h2
            className="font-display text-[11vw] font-black uppercase leading-none tracking-tight sm:text-[5.5vw]"
            style={{ color: "var(--fg-light)" }}
          >
            {t.heading}
          </h2>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10">
          {t.cases.map((caseStudy) => (
            <div key={caseStudy.id}>
              {SECTION_LABELS[caseStudy.id] && (
                <div className="mb-8 flex items-center gap-4">
                  <span
                    className="text-[0.6rem] font-black uppercase tracking-[0.25em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {SECTION_LABELS[caseStudy.id]}
                  </span>
                  <div className="h-px flex-1" style={{ background: "rgba(140,8,4,0.15)" }} />
                </div>
              )}
              <CaseCard
                caseStudy={caseStudy}
                roleLabel={t.roleLabel}
                viewWorksLabel={t.viewWorksLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
