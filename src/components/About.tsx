"use client";

import { motion, Variants } from "framer-motion";
import SkillOrbit from "./SkillOrbit";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="about" className="section-py container-px relative">
      <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-accent mb-6">
            About
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-8 text-balance">
            A designer who codes
            <span className="italic text-gradient"> at a high level.</span>
          </h2>
          <div className="space-y-5 font-sans text-lg text-muted max-w-xl">
            <p>
              I&apos;m a final-year student at MNNIT Allahabad, currently
              shipping LangGraph and Pydantic AI agents in production at{" "}
              <span className="text-foreground">Super.Family</span>, across
              8+ microservices handling 10K+ daily requests at sub-120ms
              latency.
            </p>
            <p>
              Before that, I built HIPAA-compliant healthcare software at
              Nostavia Health and shipped features for a Shark
              Tank-featured product at Avicen AI. I like the parts of
              engineering most people skip: the interface, the motion, the
              feel of the thing.
            </p>
            <p>
              Outside of work I write about autonomous agents, red-teaming
              AI, and offline LLMs on{" "}
              <a
                href="https://medium.com/@kumarvatsal34"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="text-foreground underline decoration-accent/50 underline-offset-4 hover:text-accent transition-colors"
              >
                Medium
              </a>
              , and design things because I can&apos;t help it.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <SkillOrbit />
        </motion.div>
      </div>
    </section>
  );
}
