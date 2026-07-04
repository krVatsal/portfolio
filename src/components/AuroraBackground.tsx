"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AuroraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 60, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const blob1X = useTransform(smoothX, (v) => v * 0.06);
  const blob1Y = useTransform(smoothY, (v) => v * 0.06);
  const blob2X = useTransform(smoothX, (v) => v * -0.04);
  const blob2Y = useTransform(smoothY, (v) => v * -0.04);
  const blob3X = useTransform(smoothX, (v) => v * 0.03);
  const blob3Y = useTransform(smoothY, (v) => v * -0.05);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="absolute left-1/2 top-1/3 h-[520px] w-[520px] rounded-full"
        style={{
          x: blob1X,
          y: blob1Y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(124,255,107,0.28) 0%, rgba(124,255,107,0) 70%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/4 top-2/3 h-[460px] w-[460px] rounded-full"
        style={{
          x: blob2X,
          y: blob2Y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(79,142,247,0.18) 0%, rgba(79,142,247,0) 70%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute left-3/4 top-1/4 h-[380px] w-[380px] rounded-full"
        style={{
          x: blob3X,
          y: blob3Y,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(124,255,107,0.16) 0%, rgba(124,255,107,0) 70%)",
          filter: "blur(45px)",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080808_75%)]" />
    </div>
  );
}
