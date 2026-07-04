"use client";

import { motion, Variants } from "framer-motion";
import { GithubIcon, LinkedinIcon, MediumIcon, XIcon } from "@/components/icons";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const socials = [
  { href: "https://github.com/krVatsal", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/vatsal-kumar-61492627b/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://medium.com/@kumarvatsal34", label: "Medium", icon: MediumIcon },
  { href: "https://x.com/vatsal_mr56220", label: "Twitter / X", icon: XIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="section-py container-px relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative max-w-content mx-auto text-center"
      >
        <p className="font-sans text-sm uppercase tracking-[0.35em] text-accent mb-8">
          Contact
        </p>
        <h2 className="font-display text-5xl sm:text-7xl leading-[1.05] mb-10 text-balance">
          Let&apos;s build{" "}
          <span className="italic text-gradient">something.</span>
        </h2>

        <a
          href="mailto:kumarvatsal34@gmail.com"
          data-cursor-hover
          className="inline-block font-display text-2xl sm:text-4xl italic text-foreground hover:text-accent transition-colors duration-300 border-b border-border hover:border-accent pb-2 mb-6"
        >
          kumarvatsal34@gmail.com
        </a>

        <p className="font-sans text-muted mb-14">or call +91 7004295597</p>

        <div className="flex items-center justify-center gap-6">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label={label}
              className="text-muted hover:text-accent transition-colors duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
