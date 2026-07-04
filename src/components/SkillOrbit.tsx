"use client";

import { motion } from "framer-motion";

const inner = ["Next.js", "TypeScript", "LangGraph", "Python", "FastAPI", "React"];
const outer = [
  "Pydantic AI",
  "RAG",
  "Docker",
  "MongoDB",
  "PostgreSQL",
  "Kubernetes",
  "Rust",
  "MCP",
  "Redis",
  "PyTorch",
];

function Ring({
  items,
  radius,
  duration,
  reverse,
}: {
  items: string[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((item, i) => {
        const angle = (360 / items.length) * i;
        return (
          <div
            key={item}
            className="absolute left-1/2 top-1/2"
            style={{
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="-translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-border bg-surface/80 px-3 py-1.5 font-sans text-xs text-muted backdrop-blur-sm"
            >
              {item}
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default function SkillOrbit() {
  return (
    <div className="relative mx-auto h-[420px] w-[420px] max-w-full">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-accent/10 blur-2xl" />
      </div>
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_4px_rgba(124,255,107,0.6)]" />
      <div className="absolute inset-0 rounded-full border border-border/60" style={{ margin: "70px" }} />
      <div className="absolute inset-0 rounded-full border border-border/40" />
      <Ring items={inner} radius={110} duration={38} />
      <Ring items={outer} radius={200} duration={60} reverse />
    </div>
  );
}
