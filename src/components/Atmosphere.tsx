"use client";

import { motion } from "framer-motion";

export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        className="absolute -left-[15%] top-[5%] h-[60%] w-[50%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(247,70,3,0.22) 0%, rgba(247,70,3,0) 65%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -15, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[10%] top-[20%] h-[55%] w-[45%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(221,2,0,0.18) 0%, rgba(221,2,0,0) 65%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, -30, 20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[30%] h-[45%] w-[40%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(180,10,5,0.14) 0%, rgba(180,10,5,0) 65%)",
          filter: "blur(80px)",
        }}
        animate={{ x: [0, 25, -25, 0], y: [0, -25, 10, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
