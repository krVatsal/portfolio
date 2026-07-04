"use client";

import { motion, Variants } from "framer-motion";
import { experience } from "@/lib/experience";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-py container-px">
      <div className="max-w-content mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-20"
        >
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-accent mb-6">
            Experience
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight max-w-2xl text-balance">
            Where I&apos;ve put this to work.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" />
          <div className="flex flex-col gap-16 sm:gap-20">
            {experience.map((job) => (
              <motion.div
                key={job.company}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                className="relative pl-10 sm:pl-12"
              >
                <span
                  className={`absolute left-0 top-2 h-[15px] w-[15px] sm:h-[19px] sm:w-[19px] rounded-full border-2 ${
                    job.current
                      ? "border-accent bg-accent/20"
                      : "border-border bg-background"
                  }`}
                >
                  {job.current && (
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40" />
                  )}
                </span>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                  <h3 className="font-display text-3xl sm:text-4xl">{job.company}</h3>
                  <p className="font-sans text-sm text-muted whitespace-nowrap">
                    {job.role} · {job.dates}
                  </p>
                </div>

                <ul className="space-y-2 max-w-2xl">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="font-sans text-muted leading-relaxed flex gap-3"
                    >
                      <span className="text-accent mt-2 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
