"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/lib/writing";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Writing() {
  return (
    <section id="writing" className="section-py container-px">
      <div className="max-w-content mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="font-sans text-sm uppercase tracking-[0.35em] text-accent mb-6">
              Writing
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight text-balance max-w-xl">
              Notes on agents, <span className="italic text-gradient">out loud.</span>
            </h2>
          </div>
          <a
            href="https://medium.com/@kumarvatsal34"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 font-sans text-sm text-foreground hover:text-accent transition-colors whitespace-nowrap"
          >
            All articles <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <motion.a
              key={article.title}
              href="https://medium.com/@kumarvatsal34"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between rounded-2xl border border-border p-7 hover:border-accent/40 hover:shadow-[0_0_40px_-16px_rgba(124,255,107,0.35)] transition-colors duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="rounded-full border border-border px-3 py-1 font-sans text-xs text-accent">
                    {article.tag}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <h3 className="font-display text-xl leading-snug mb-4">
                  {article.title}
                </h3>
                <p className="font-sans text-sm text-muted leading-relaxed">
                  {article.description}
                </p>
              </div>
              <p className="font-sans text-xs text-muted mt-6">{article.date}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
