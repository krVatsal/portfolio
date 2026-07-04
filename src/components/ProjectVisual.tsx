"use client";

import { motion } from "framer-motion";

const ACCENT = "#7CFF6B";
const BLUE = "#4F8EF7";
const LINE = "#2a2a2a";
const DIM = "#3a3a3a";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 300"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="400" height="300" fill="#0c0c0c" />
      <defs>
        <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#151515" strokeWidth="1" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="400" height="300" fill="url(#grid)" />
      {children}
    </svg>
  );
}

export function LegalAIVisual() {
  return (
    <Frame>
      <g transform="translate(120,40)">
        <rect x="0" y="0" width="160" height="220" rx="8" fill="#111" stroke={LINE} />
        {[20, 40, 60, 80, 108, 128, 148, 168, 188].map((y, i) => (
          <rect
            key={y}
            x="18"
            y={y}
            width={i === 4 ? 124 : 124 - (i % 3) * 20}
            height="8"
            rx="4"
            fill={i === 4 ? ACCENT : DIM}
            opacity={i === 4 ? 0.9 : 0.6}
          />
        ))}
      </g>
      <motion.circle
        cx="300"
        cy="90"
        r="26"
        fill="none"
        stroke={ACCENT}
        strokeWidth="3"
        opacity="0.9"
        animate={{ cx: [300, 292, 300], cy: [90, 100, 90] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.line
        x1="318"
        y1="108"
        x2="336"
        y2="126"
        stroke={ACCENT}
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ x1: [318, 310, 318], y1: [108, 118, 108] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </Frame>
  );
}

export function ChanetVisual() {
  return (
    <Frame>
      <rect x="40" y="120" width="130" height="50" rx="12" fill="#111" stroke={LINE} />
      <text x="55" y="150" fill="#8a8a8a" fontSize="12" fontFamily="monospace">
        &quot;train a resnet…&quot;
      </text>
      <motion.path
        d="M 175 145 L 215 145"
        stroke={ACCENT}
        strokeWidth="2.5"
        markerEnd="url(#arrow)"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={ACCENT} />
        </marker>
      </defs>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(230, ${60 + i * 65})`}>
          <rect width="130" height="48" rx="8" fill="#111" stroke={LINE} />
          <rect x="12" y="12" width="60" height="6" rx="3" fill={i === 1 ? ACCENT : DIM} />
          <rect x="12" y="26" width="90" height="6" rx="3" fill={DIM} />
        </g>
      ))}
    </Frame>
  );
}

export function MeshWorksVisual() {
  const pts = [
    [200, 60], [270, 100], [270, 170], [200, 210], [130, 170], [130, 100],
  ];
  const center = [200, 135];
  return (
    <Frame>
      <motion.g
        style={{ transformOrigin: "200px 135px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        {pts.map((p, i) => (
          <line key={i} x1={center[0]} y1={center[1]} x2={p[0]} y2={p[1]} stroke={DIM} strokeWidth="1" />
        ))}
        {pts.map((p, i) => (
          <line
            key={`e${i}`}
            x1={p[0]}
            y1={p[1]}
            x2={pts[(i + 1) % pts.length][0]}
            y2={pts[(i + 1) % pts.length][1]}
            stroke={BLUE}
            strokeWidth="1.5"
            opacity="0.7"
          />
        ))}
        {pts.map((p, i) => (
          <circle key={`c${i}`} cx={p[0]} cy={p[1]} r="4" fill={ACCENT} />
        ))}
        <circle cx={center[0]} cy={center[1]} r="5" fill={ACCENT} />
      </motion.g>
    </Frame>
  );
}

export function PortBiterVisual() {
  const blips = [
    { x: 240, y: 90, delay: 0 },
    { x: 160, y: 175, delay: 0.6 },
    { x: 260, y: 195, delay: 1.3 },
  ];
  return (
    <Frame>
      <path
        d="M200 55 L255 78 V140 C255 172 230 192 200 202 C170 192 145 172 145 140 V78 Z"
        fill="none"
        stroke={DIM}
        strokeWidth="1.5"
      />
      <circle cx="200" cy="135" r="55" fill="none" stroke={LINE} strokeWidth="1" />
      <circle cx="200" cy="135" r="32" fill="none" stroke={LINE} strokeWidth="1" />
      <motion.g
        style={{ transformOrigin: "200px 135px" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M200 135 L200 80 A55 55 0 0 1 238 100 Z"
          fill={BLUE}
          opacity="0.18"
        />
        <line x1="200" y1="135" x2="200" y2="80" stroke={BLUE} strokeWidth="1.5" />
      </motion.g>
      {blips.map((b, i) => (
        <motion.circle
          key={i}
          cx={b.x}
          cy={b.y}
          r="4"
          fill={ACCENT}
          animate={{ opacity: [0, 1, 0], scale: [0.6, 1.2, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
        />
      ))}
    </Frame>
  );
}

export function MedhaviVisual() {
  return (
    <Frame>
      {[0, 1, 2].map((i) => (
        <rect
          key={i}
          x={90 + i * 14}
          y={70 - i * 10}
          width="180"
          height="120"
          rx="10"
          fill="#111"
          stroke={LINE}
          opacity={1 - i * 0.25}
        />
      ))}
      <rect x="90" y="70" width="180" height="120" rx="10" fill="#111" stroke={ACCENT} strokeOpacity="0.6" />
      <rect x="112" y="92" width="90" height="8" rx="4" fill={ACCENT} opacity="0.8" />
      <rect x="112" y="110" width="130" height="6" rx="3" fill={DIM} />
      <rect x="112" y="124" width="110" height="6" rx="3" fill={DIM} />
      <g transform="translate(112,150)">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.rect
            key={i}
            x={i * 9}
            y="0"
            width="4"
            height="20"
            rx="2"
            fill={BLUE}
            animate={{ height: [8, 22, 8] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
          />
        ))}
      </g>
    </Frame>
  );
}

export function IllustratorMCPVisual() {
  return (
    <Frame>
      <motion.path
        d="M 90 210 C 140 60, 230 260, 310 90"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.5"
        animate={{ pathLength: [0, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <line x1="90" y1="210" x2="140" y2="60" stroke={DIM} strokeWidth="1" strokeDasharray="4 4" />
      <line x1="310" y1="90" x2="230" y2="260" stroke={DIM} strokeWidth="1" strokeDasharray="4 4" />
      {[[90, 210], [140, 60], [230, 260], [310, 90]].map((p, i) => (
        <rect key={i} x={p[0] - 5} y={p[1] - 5} width="10" height="10" fill="#0c0c0c" stroke={ACCENT} strokeWidth="1.5" />
      ))}
    </Frame>
  );
}

export const projectVisuals: Record<string, () => React.JSX.Element> = {
  legalai: LegalAIVisual,
  chanet: ChanetVisual,
  portbiter: PortBiterVisual,
  meshworks: MeshWorksVisual,
  medhavi: MedhaviVisual,
  "illustrator-mcp": IllustratorMCPVisual,
};
