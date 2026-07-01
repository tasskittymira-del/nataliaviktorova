"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function HeroBgText({ words }: { words: string[] }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2800);
    return () => clearInterval(t);
  }, [words.length]);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[55%] w-full items-start justify-center overflow-hidden pt-20 sm:pt-16"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[idx]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="font-display block w-full whitespace-nowrap text-center font-black uppercase leading-none text-white"
          style={{ fontSize: "clamp(56px, 14.5vw, 190px)" }}
        >
          {words[idx]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
