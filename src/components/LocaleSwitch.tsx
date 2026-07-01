"use client";

import { useLocale, type Locale } from "@/lib/locale";

const options: { value: Locale; label: string }[] = [
  { value: "uk", label: "UA" },
  { value: "en", label: "EN" },
];

export function LocaleSwitch() {
  const { locale, setLocale } = useLocale();

  return (
    <div role="group" aria-label="Language" className="inline-flex items-center text-xs font-bold tracking-widest">
      <button
        type="button"
        onClick={() => setLocale("uk")}
        aria-pressed={locale === "uk"}
        className="transition-colors duration-200 uppercase"
        style={{
          color: locale === "uk" ? "var(--fg)" : "rgba(255,255,255,0.35)",
          background: "none",
          border: "none",
          padding: "4px 6px",
        }}
      >
        UA
      </button>
      <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className="transition-colors duration-200 uppercase"
        style={{
          color: locale === "en" ? "var(--fg)" : "rgba(255,255,255,0.35)",
          background: "none",
          border: "none",
          padding: "4px 6px",
        }}
      >
        EN
      </button>
    </div>
  );
}
