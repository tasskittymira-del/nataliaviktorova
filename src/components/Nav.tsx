"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/content";
import { LocaleSwitch } from "./LocaleSwitch";

const sectionIds = ["hero", "about", "portfolio", "contact"] as const;

export function Nav() {
  const { locale } = useLocale();
  const t = dictionaries[locale].nav;
  const [active, setActive] = useState<string>("hero");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setScrollProgress(Math.min(window.scrollY / 120, 1));
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  const links = [
    { id: "about", label: t.about },
    { id: "portfolio", label: t.portfolio },
    { id: "contact", label: t.contact },
  ];

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: `rgba(12,2,1,${0.55 * scrollProgress})`,
        backdropFilter: `blur(${10 * scrollProgress}px)`,
        WebkitBackdropFilter: `blur(${10 * scrollProgress}px)`,
      }}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#hero"
          className="font-display text-xs font-semibold tracking-widest text-fg uppercase"
        >
          Н. Вікторова
        </a>

        <div className="hidden items-center gap-10 sm:flex">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs tracking-widest uppercase transition-colors duration-200 ${
                  isActive ? "font-semibold text-fg" : "text-fg-faint hover:text-fg-muted"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <LocaleSwitch />
      </nav>
    </header>
  );
}
