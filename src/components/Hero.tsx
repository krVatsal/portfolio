"use client";

import { motion, Variants } from "framer-motion";
import AuroraBackground from "./AuroraBackground";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <AuroraBackground />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-px max-w-content mx-auto w-full"
      >
        <motion.p
          variants={item}
          className="font-sans text-sm sm:text-base uppercase tracking-[0.35em] text-accent mb-6"
        >
          AI Engineer · Full Stack Developer · Designer by hobby
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-[15vw] leading-[0.9] sm:text-[9rem] sm:leading-[0.88] text-foreground text-balance"
        >
          Vatsal
          <br />
          <span className="italic text-gradient">Kumar</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 font-sans text-xl sm:text-2xl text-muted max-w-xl"
        >
          I build things that actually ship.
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 font-sans text-sm text-muted backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Currently building at Super.Family
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted">
          Scroll
        </span>
        <motion.div
          className="h-10 w-px bg-gradient-to-b from-accent to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
