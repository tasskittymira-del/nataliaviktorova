"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX, Play } from "lucide-react";
import type { CaseStudy, GalleryItem } from "@/lib/content";

function isVideo(file: string) {
  return /\.(mp4|mov|webm)$/i.test(file);
}

const noContextMenu = (e: React.MouseEvent) => e.preventDefault();

function getTextEntryIndex(gallery: GalleryItem[], mediaIndex: number): number {
  let result = -1;
  for (let i = 0; i <= mediaIndex && i < gallery.length; i++) {
    if (gallery[i].subsectionTitle || gallery[i].caption) result = i;
  }
  return result;
}

function isLandscapeTile(item: GalleryItem) {
  return item.ratio > 1.2;
}

/* ─── GalleryVideo ──────────────────────────────────────────────────────────── */

function GalleryVideo({ src, active }: { src: string; active: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (active) el.play().catch(() => {});
    else { el.pause(); el.currentTime = 0; }
  }, [active]);

  return (
    <div className="group/vid relative h-full w-full">
      <video
        ref={ref}
        src={src}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        controlsList="nodownload"
        onContextMenu={noContextMenu}
        className="h-full w-full object-cover"
      />
      {!active && (
        <div className="pointer-events-none absolute bottom-2 left-2">
          <Play size={10} color="#fff" fill="#fff" strokeWidth={0} style={{ opacity: 0.8 }} />
        </div>
      )}
      <button
        onClick={(e) => { e.stopPropagation(); setMuted(m => !m); }}
        className={`absolute bottom-2 right-2 transition-opacity ${active ? "opacity-100" : "opacity-0 group-hover/vid:opacity-100"}`}
        style={{ color: "#fff", filter: "drop-shadow(0 1px 3px rgba(0,0,0,.5))" }}
        aria-label={muted ? "Sound on" : "Sound off"}
      >
        {muted ? <VolumeX size={13} strokeWidth={1.75} /> : <Volume2 size={13} strokeWidth={1.75} />}
      </button>
    </div>
  );
}

/* ─── Tile ──────────────────────────────────────────────────────────────────── */

function Tile({
  item, index, hoveredIndex, onHover, clipRef, isTouch,
}: {
  item: GalleryItem;
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number | null) => void;
  clipRef: React.RefObject<HTMLDivElement | null>;
  isTouch: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [origin, setOrigin] = useState("center center");

  const isHovered    = hoveredIndex === index;
  const isAnyHovered = hoveredIndex !== null;

  // On touch devices scale stays 1 (no zoom on tap — no clipping boundary available).
  // On desktop: landscape tiles zoom less than portrait/square tiles.
  const SCALE = isTouch ? 1 : (isLandscapeTile(item) ? 1.04 : 1.15);

  const handleEnter = useCallback(() => {
    if (!isTouch && ref.current && clipRef.current) {
      const rect  = ref.current.getBoundingClientRect();
      const col   = clipRef.current.getBoundingClientRect();
      const growW = (rect.width  * SCALE - rect.width)  / 2;
      const growH = (rect.height * SCALE - rect.height) / 2;

      const ox = rect.left - col.left    < growW ? "left"
               : col.right - rect.right  < growW ? "right" : "center";
      const oy = rect.top  - col.top     < growH ? "top"
               : col.bottom - rect.bottom < growH ? "bottom" : "center";
      setOrigin(`${ox} ${oy}`);
    }
    onHover(index);
  }, [index, onHover, clipRef, SCALE, isTouch]);

  const handleTap = useCallback(() => {
    // Toggle: tap active tile to deselect, tap new tile to select
    if (hoveredIndex === index) onHover(null);
    else handleEnter();
  }, [hoveredIndex, index, onHover, handleEnter]);

  return (
    <motion.div
      ref={ref}
      animate={{
        scale:  isHovered ? SCALE : 1,
        filter: isAnyHovered && !isHovered ? "brightness(0.35)" : "brightness(1)",
      }}
      transition={{ duration: isTouch ? 0.2 : 0.45, ease: [0.16, 1, 0.3, 1] }}
      // Desktop: hover to activate / leave to deactivate
      onMouseEnter={isTouch ? undefined : handleEnter}
      onMouseLeave={isTouch ? undefined : () => onHover(null)}
      // Mobile: tap to toggle
      onClick={isTouch ? handleTap : undefined}
      style={{
        width: "100%",
        height: "auto",
        aspectRatio: item.ratio,
        transformOrigin: origin,
        position: "relative",
        zIndex: isHovered ? 20 : 1,
        overflow: "hidden",
        borderRadius: 8,
        border: "1px solid rgba(26,7,6,0.07)",
        cursor: "pointer",
        background: "transparent",
        display: "block",
      }}
    >
      {isVideo(item.file)
        ? <GalleryVideo src={`/works/${item.file}`} active={isHovered} />
        : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/works/${item.file}`}
            alt=""
            loading="eager"
            draggable={false}
            onContextMenu={noContextMenu}
            className="h-full w-full object-cover"
          />
        )
      }
    </motion.div>
  );
}

/* ─── TextFlow ──────────────────────────────────────────────────────────────── */

function TextFlow({
  caseStudy, hoveredIndex, textEntryRefs,
}: {
  caseStudy: CaseStudy;
  hoveredIndex: number | null;
  textEntryRefs: React.MutableRefObject<Map<number, HTMLDivElement>>;
}) {
  const gallery = caseStudy.gallery ?? [];
  const entries = gallery
    .map((item, i) => ({ item, i }))
    .filter(({ item }) => item.subsectionTitle || item.caption);

  const activeTextIdx    = hoveredIndex !== null ? getTextEntryIndex(gallery, hoveredIndex) : -1;
  const somethingHovered = hoveredIndex !== null;

  return (
    <div className="flex flex-col gap-4 text-[14px] leading-[1.65]"
      style={{ color: "var(--fg-light-muted)" }}>

      {/* Long description — hidden on mobile to save space */}
      {caseStudy.lightboxDescription && (
        <motion.p
          className="hidden sm:block"
          animate={{ opacity: somethingHovered && entries.length > 0 ? 0.22 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {caseStudy.lightboxDescription}
        </motion.p>
      )}

      {entries.map(({ item, i }) => {
        const isActive = i === activeTextIdx;
        return (
          <motion.div
            key={i}
            ref={el => {
              if (el) textEntryRefs.current.set(i, el as HTMLDivElement);
              else    textEntryRefs.current.delete(i);
            }}
            animate={{ opacity: !somethingHovered ? 1 : isActive ? 1 : 0.2, scale: isActive ? 1.02 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
          >
            {item.subsectionTitle && (
              <p className="mb-1 text-[0.58rem] font-bold uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}>
                {item.subsectionTitle}
              </p>
            )}
            {item.caption && (
              <p style={{ color: "var(--fg-light-muted)" }}>{item.caption}</p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─── AtmosphericBg ─────────────────────────────────────────────────────────── */

function AtmosphericBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-[10%] top-[5%] h-[60%] w-[50%] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(140,8,4,.07) 0%,rgba(140,8,4,0) 65%)", filter: "blur(90px)" }} />
      <div className="absolute -right-[8%] bottom-[10%] h-[50%] w-[42%] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(140,8,4,.05) 0%,rgba(140,8,4,0) 65%)", filter: "blur(90px)" }} />
    </div>
  );
}

/* ─── CaseOverlay ───────────────────────────────────────────────────────────── */

export function CaseOverlay({ isOpen, onClose, caseStudy, roleLabel }: {
  isOpen: boolean;
  onClose: () => void;
  caseStudy: CaseStudy;
  roleLabel: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch]           = useState(false);
  const gallery = caseStudy.gallery ?? [];

  // clipRef: on desktop clips zoom overflow; on mobile acts as layout ref only.
  const clipRef       = useRef<HTMLDivElement>(null);
  const sidebarRef    = useRef<HTMLDivElement>(null);
  const textEntryRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Detect touch device once on mount
  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => { if (isOpen) setHoveredIndex(null); }, [isOpen, caseStudy]);
  useEffect(() => { textEntryRefs.current.clear(); }, [caseStudy]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Desktop only: when tile is hovered, scroll sidebar to linked caption.
  // Check touch inline (not via state) to avoid stale-closure issues.
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
    if (hoveredIndex === null) return;
    const ti = getTextEntryIndex(gallery, hoveredIndex);
    if (ti < 0) return;
    textEntryRefs.current.get(ti)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [hoveredIndex, gallery]);

  const handleHover = useCallback((i: number | null) => setHoveredIndex(i), []);

  return (
    <>
      <style>{`.ol-left::-webkit-scrollbar{display:none}.ol-wrap::-webkit-scrollbar{display:none}`}</style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            /* ── Mobile: single vertical scroll container.
               ── Desktop: two-column layout, each column scrolls independently.  */
            className="ol-wrap fixed inset-0 z-[100] flex flex-col overflow-y-auto sm:flex-row sm:overflow-hidden"
            style={{ background: "var(--bg-light)" }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {/* ── Close button — always visible at top-right on all devices ── */}
            <button
              onClick={onClose}
              className="fixed right-4 top-4 z-[110] flex h-10 w-10 items-center justify-center rounded-full transition-colors sm:absolute sm:right-10 sm:top-14"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
                color: "var(--fg-light-faint)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* ── Sidebar — LEFT on desktop, BELOW gallery on mobile ── */}
            {/* DOM-first so it appears left on desktop flex-row.               */}
            {/* On mobile it's pushed below gallery via order-last.             */}
            <div
              ref={sidebarRef}
              className="ol-left order-last sm:order-none relative flex shrink-0 flex-col gap-4 px-5 py-8 sm:h-screen sm:w-[32%] sm:gap-6 sm:overflow-y-auto sm:px-10 sm:py-14"
              style={{
                borderTop: "1px solid rgba(26,7,6,.07)",
                scrollbarWidth: "none",
              }}
            >
              {/* Right border on desktop */}
              <div
                className="pointer-events-none absolute inset-y-0 right-0 hidden sm:block"
                style={{ borderRight: "1px solid rgba(26,7,6,.07)", width: 1 }}
              />

              <div>
                <h2 className="font-display pr-12 text-xl font-black uppercase leading-[1.05] tracking-tight sm:text-3xl"
                  style={{ color: "var(--fg-light)" }}>
                  {caseStudy.brand}
                </h2>
                <span className="mt-1 block text-[0.65rem] uppercase tracking-widest"
                  style={{ color: "var(--fg-light-faint)" }}>
                  {caseStudy.period}
                </span>
              </div>

              <div className="text-sm leading-relaxed">
                <span className="block text-[0.6rem] font-bold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}>
                  {roleLabel}
                </span>
                <span className="mt-1 block" style={{ color: "var(--fg-light-muted)" }}>
                  {caseStudy.role}
                </span>
              </div>

              <TextFlow caseStudy={caseStudy} hoveredIndex={hoveredIndex} textEntryRefs={textEntryRefs} />

              <div className="flex flex-wrap gap-1.5">
                {caseStudy.tags.map(tag => (
                  <span key={tag}
                    className="rounded-full px-2.5 py-0.5 text-[0.58rem] font-medium uppercase tracking-wider"
                    style={{ color: "var(--fg-light-muted)", border: "1px solid rgba(26,7,6,.1)", background: "rgba(26,7,6,.02)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Gallery — RIGHT on desktop, FIRST on mobile ── */}
            <div
              ref={clipRef}
              className="order-first sm:order-none relative flex-1 sm:h-screen sm:overflow-hidden"
              onMouseLeave={() => !isTouch && setHoveredIndex(null)}
            >
              <AtmosphericBg />

              <div className="px-4 py-4 sm:h-full sm:overflow-y-auto sm:px-10 sm:py-12">
                <div
                  className="relative z-10 columns-2 sm:columns-3"
                  style={{ columnGap: 8 }}
                >
                  {gallery.map((item, index) => (
                    <div
                      key={item.file}
                      style={{
                        breakInside: "avoid",
                        marginBottom: 8,
                        columnSpan: isLandscapeTile(item) ? "all" : undefined,
                      }}
                    >
                      <Tile
                        item={item}
                        index={index}
                        hoveredIndex={hoveredIndex}
                        onHover={handleHover}
                        clipRef={clipRef}
                        isTouch={isTouch}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Mobile: pill appears on any tile tap, scrolls to project info below ── */}
              <AnimatePresence>
                {isTouch && hoveredIndex !== null && (
                  <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    onClick={() => {
                      sidebarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="fixed bottom-6 left-1/2 z-[120] flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-widest sm:hidden"
                    style={{
                      background: "rgba(255,255,255,0.88)",
                      backdropFilter: "blur(12px)",
                      color: "var(--fg-light-muted)",
                      boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
                      border: "1px solid rgba(26,7,6,0.09)",
                    }}
                  >
                    <span>↓</span>
                    <span>про проєкт</span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
