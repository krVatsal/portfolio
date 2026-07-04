"use client";

import { motion, Variants } from "framer-motion";
import { achievements } from "@/lib/achievements";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Achievements() {
  return (
    <section className="container-px pb-24 sm:pb-32">
      <div className="max-w-content mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-wrap gap-3"
        >
          {achievements.map((a) => (
            <motion.span
              key={a.label}
              variants={fadeUp}
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 font-sans text-sm text-muted hover:border-accent/40 hover:text-foreground transition-colors duration-300"
            >
              <span aria-hidden="true">{a.emoji}</span>
              {a.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
