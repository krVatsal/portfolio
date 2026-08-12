export type FeaturedProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  demo?: string;
  stat?: string;
};

export type OpenSourceProject = {
  id: string;
  name: string;
  description: string;
  github: string;
  tags: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "legalai",
    name: "LegalAI",
    tagline: "RAG-powered legal document review",
    description:
      "Clause extraction, risk flagging, and semantic Q&A over contracts, with one-click contract web search via MCP. Built to make dense legal documents readable in minutes, not hours.",
    tags: ["Next.js", "Node.js", "MongoDB", "Docker", "Tesseract.js", "LangChain", "ChromaDB", "Cloudinary"],
    live: "https://legal-ai-zeta-five.vercel.app",
    stat: "92% chatbot accuracy",
  },
  {
    id: "chanet",
    name: "Chanet",
    tagline: "Plain English in, trained notebook out",
    description:
      "An AI SaaS that turns a plain-English description of an ML/DL task into optimized, ready-to-train Jupyter notebooks, complete with Kaggle dataset recommendations.",
    tags: ["Next.js", "Node.js", "Kaggle API", "OpenAI"],
    live: "https://chanet.vercel.app",
    stat: "96 perf / 100 a11y / 100 SEO",
  },
  {
    id: "portbiter",
    name: "PortBiter",
    tagline: "Autonomous AI security scanner",
    description:
      "A web vulnerability scanner orchestrated by Gemini instead of a fixed rule set. A LangGraph workflow plans each next test from a strict tool registry, executes it, analyzes the findings, and loops until it can report severity-ranked, remediation-ready results.",
    tags: ["FastAPI", "LangGraph", "Gemini", "SQLite", "Python"],
    github: "https://github.com/abhigit-saha/portbiter",
    stat: "Plan, execute, analyze, repeat",
  },
  {
    id: "meshworks",
    name: "MeshWorks",
    tagline: "Prompt or image → full 3D mesh",
    description:
      "An end-to-end 3D generation pipeline running on a GPU-enabled Azure VM, with automated GLB export straight into Blender-ready assets.",
    tags: ["FastAPI", "PyTorch", "TripoSR", "Azure", "Blender", "MCP", "CLIP", "DinoV2", "K-Means"],
    github: "https://github.com/krVatsal/MeshWorks",
    demo: "https://drive.google.com/file/d/1r6hkBwANye73VCUGwIQxivr3zGQ3nmCM/view?usp=sharing",
    stat: "80% faster processing",
  },
  {
    id: "medhavi",
    name: "Medhavi",
    tagline: "AI presentation generator, built for India",
    description:
      "Native support for 11+ Indian languages with voice narration via Bhashini, regional context intelligence (Delhi Metro, Mumbai Dabbawalas), and Manim-powered animated educational videos across multiple LLM providers.",
    tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker", "Manim", "Bhashini API"],
    github: "https://github.com/krVatsal/medhavii",
    stat: "11+ languages",
  },
  {
    id: "illustrator-mcp",
    name: "Illustrator MCP",
    tagline: "Control Adobe Illustrator with natural language",
    description:
      "An MCP server that lets AI agents drive Adobe Illustrator directly, using COM automation on Windows and AppleScript on macOS. Works with Claude Desktop, Claude Code, Cursor, VS Code Copilot, and JetBrains.",
    tags: ["Python", "MCP", "ExtendScript", "COM Automation", "AppleScript"],
    github: "https://github.com/krVatsal/illustrator-mcp",
    stat: "100+ GitHub stars",
  },
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: "omi",
    name: "Omi",
    description:
      "A from-scratch Rust rebuild of Omi's screen and conversation capture for Windows: same second-brain concept the original app is trusted for by 300,000+ professionals, rebuilt natively instead of ported.",
    github: "https://github.com/krVatsal/omi/tree/omi-windows",
    tags: ["Rust", "Windows", "Real-time"],
  },
  {
    id: "graphite",
    name: "Graphite",
    description:
      "Contributed to Graphite, a node-based procedural vector graphics editor: the kind of tool that lives at the exact intersection of design and engineering I like working in.",
    github: "https://github.com/GraphiteEditor/Graphite/pulls/krVatsal",
    tags: ["Rust", "Node Graph", "Vector Graphics"],
  },
];
