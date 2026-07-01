"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const sx = useSpring(x, { damping: 28, stiffness: 180, mass: 0.5 });
  const sy = useSpring(y, { damping: 28, stiffness: 180, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  const crossColor = "rgba(140,8,4,0.45)";
  const crossSize = 16;
  const crossThick = 1;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]">
      {/* Crosshair — follows with slight lag */}
      <motion.div
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
        className="absolute"
      >
        {/* Horizontal bar */}
        <div style={{
          position: "absolute",
          left: -crossSize / 2,
          top: -crossThick / 2,
          width: crossSize,
          height: crossThick,
          background: crossColor,
        }} />
        {/* Vertical bar */}
        <div style={{
          position: "absolute",
          top: -crossSize / 2,
          left: -crossThick / 2,
          width: crossThick,
          height: crossSize,
          background: crossColor,
        }} />
        {/* Center dot */}
        <div style={{
          position: "absolute",
          width: 3,
          height: 3,
          top: -1.5,
          left: -1.5,
          background: "rgba(140,8,4,0.6)",
          borderRadius: "50%",
        }} />
      </motion.div>
    </div>
  );
}
