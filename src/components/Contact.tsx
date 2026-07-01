"use client";

import { useLocale } from "@/lib/locale";
import { dictionaries } from "@/lib/content";
import { TelegramIcon, LinkedInIcon } from "./icons";

export function Contact() {
  const { locale } = useLocale();
  const t = dictionaries[locale].contact;

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--bg)" }}>
      {/* Atmospheric smoke blobs — same treatment as Hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-[10%] top-[10%] h-[70%] w-[55%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(247,70,3,0.2) 0%, rgba(247,70,3,0) 65%)",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute -right-[5%] bottom-[5%] h-[55%] w-[45%] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(221,2,0,0.16) 0%, rgba(221,2,0,0) 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-10">

        {/* Editorial heading */}
        <div className="mb-8 sm:mb-16">
          <h2 className="font-display font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}>
            <span className="block" style={{ color: "var(--fg)" }}>
              {t.headingLine1}
            </span>
            <span className="block" style={{ color: "rgba(255,255,255,0.75)" }}>
              {t.headingLine2}
            </span>
          </h2>
        </div>

        <div className="grid gap-0 sm:grid-cols-2" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          {/* Email — border-bottom on mobile, border-right on sm+ */}
          <div className="border-b border-white/10 p-8 sm:border-b-0 sm:border-r sm:p-14">
            <p className="mb-3 text-[0.625rem] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              {t.emailLabel}
            </p>
            <a
              href={`mailto:${t.email}`}
              className="block font-display text-lg font-bold transition-colors sm:text-xl"
              style={{ color: "var(--fg)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--fg)")}
            >
              {t.email}
            </a>
            <p className="mt-8 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{t.subhead}</p>
          </div>

          {/* Messengers */}
          <div className="p-8 sm:p-14">
            <p className="mb-6 text-[0.625rem] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>
              {t.secondaryLabel}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://t.me/yyakaaamozz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 py-2 text-sm transition-all"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                <TelegramIcon className="h-4 w-4 shrink-0" />
                <span>@yyakaaamozz</span>
                <span className="ml-auto text-xs opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "var(--accent)" }}>→</span>
              </a>
              <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />
              <a
                href="https://www.linkedin.com/in/nataliaaviktorova/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 py-2 text-sm transition-all"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" />
                <span>LinkedIn</span>
                <span className="ml-auto text-xs opacity-0 transition-opacity group-hover:opacity-100" style={{ color: "var(--accent)" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
