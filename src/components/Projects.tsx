"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { featuredProjects, openSourceProjects } from "@/lib/projects";
import { projectVisuals } from "@/components/ProjectVisual";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
  return (
    <section id="work" className="section-py container-px">
      <div className="max-w-content mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mb-20 sm:mb-28"
        >
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-accent mb-6">
            Selected Work
          </p>
          <h2 className="font-display text-4xl sm:text-6xl leading-tight text-balance max-w-3xl">
            Things I&apos;ve built and{" "}
            <span className="italic text-gradient">shipped.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-28 sm:gap-36">
          {featuredProjects.map((project, i) => {
            const Visual = projectVisuals[project.id];
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={project.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <div
                  className={`relative aspect-[4/3] rounded-2xl overflow-hidden border border-border transition-all duration-500 ease-confident group-hover:border-accent/40 group-hover:shadow-[0_0_50px_-12px_rgba(124,255,107,0.35)] ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 transition-transform duration-700 ease-confident group-hover:scale-[1.06]">
                    {Visual && <Visual />}
                  </div>
                </div>

                <div className={reversed ? "lg:order-1" : ""}>
                  <p className="font-sans text-xs uppercase tracking-[0.3em] text-muted mb-3">
                    {String(i + 1).padStart(2, "0")} / {featuredProjects.length.toString().padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl mb-2">{project.name}</h3>
                  <p className="font-sans text-accent text-sm mb-5">{project.tagline}</p>
                  <p className="font-sans text-muted leading-relaxed mb-6 max-w-lg">
                    {project.description}
                  </p>

                  {project.stat && (
                    <p className="font-sans text-sm text-foreground mb-6">
                      <span className="text-accent">→</span> {project.stat}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 font-sans text-xs text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-5">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="inline-flex items-center gap-1.5 font-sans text-sm text-foreground hover:text-accent transition-colors"
                      >
                        Live site <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="inline-flex items-center gap-1.5 font-sans text-sm text-foreground hover:text-accent transition-colors"
                      >
                        <GithubIcon size={15} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-32 sm:mt-40"
        >
          <p className="font-sans text-sm uppercase tracking-[0.35em] text-accent mb-6">
            Open Source
          </p>
          <h3 className="font-display text-2xl sm:text-3xl mb-10 max-w-2xl">
            Contributions to tools other people rely on.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {openSourceProjects.map((project) => (
              <a
                key={project.id}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group rounded-2xl border border-border p-8 transition-all duration-500 ease-confident hover:border-accent/40 hover:shadow-[0_0_40px_-14px_rgba(124,255,107,0.3)]"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-2xl">{project.name}</h4>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
                <p className="font-sans text-muted leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-sans text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
