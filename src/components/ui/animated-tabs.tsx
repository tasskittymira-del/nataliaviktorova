"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
}

export function AnimatedTabs({
  tabs,
  activeId,
  onChange,
  label,
  className,
}: {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "glass inline-flex flex-wrap gap-1 rounded-full p-1.5",
        className,
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className="relative rounded-full px-5 py-2.5 text-sm font-medium outline-none transition-colors duration-200"
          >
            {isActive && (
              <motion.div
                layoutId="portfolio-tab-active"
                className="absolute inset-0 rounded-full bg-fg"
                transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              />
            )}
            <span
              className={cn(
                "relative z-10",
                isActive ? "text-bg" : "text-fg-muted hover:text-fg",
              )}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
