"use client";

import { useLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/content";

export function Footer() {
  const { locale } = useLocale();
  const t = dictionaries[locale];

  return (
    <footer className="border-t border-border bg-bg py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-fg-faint sm:flex-row sm:px-10">
        <span>© {new Date().getFullYear()} Nataliia Viktorova</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
}
