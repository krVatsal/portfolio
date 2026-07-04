"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, [data-cursor-hover]"
      );
      setIsPointer(Boolean(interactive));
    };

    const down = () => setIsDown(true);
    const up = () => setIsDown(false);
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (!enabled) return null;

  const size = isPointer ? 56 : isDown ? 14 : 24;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-accent mix-blend-difference"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: isPointer ? "rgba(124,255,107,0.15)" : "rgba(124,255,107,0)",
      }}
      transition={{ type: "spring", damping: 22, stiffness: 300 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isPointer
            ? "0 0 24px 4px rgba(124,255,107,0.55)"
            : "0 0 10px 1px rgba(124,255,107,0.35)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}
