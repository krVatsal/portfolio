export type Experience = {
  company: string;
  role: string;
  dates: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Super.Family",
    role: "SDE Intern",
    dates: "2025 - Present",
    current: true,
    points: [
      "Build LangGraph and Pydantic AI agents running across 8+ microservices in production.",
      "Serve 10K+ daily requests at sub-120ms latency with an 85%+ task success rate.",
    ],
  },
  {
    company: "Nostavia Health",
    role: "Full Stack Intern",
    dates: "2024 - 2025",
    points: [
      "Shipped 25+ APIs on Next.js, Node, and MongoDB for a HIPAA-compliant healthcare product.",
      "Supported 1000+ users at 99.9% uptime.",
    ],
  },
  {
    company: "Avicen AI",
    role: "Web Dev Intern",
    dates: "2023 - 2024",
    points: [
      "Built web features for Cograd, a Shark Tank-featured product.",
    ],
  },
];
