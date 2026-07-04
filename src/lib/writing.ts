export type Article = {
  title: string;
  description: string;
  tag: string;
  date: string;
};

export const articles: Article[] = [
  {
    title: "I Gave Claude a Paintbrush, And It Started Drawing in Adobe Illustrator",
    description:
      "Building an MCP server that lets Claude generate vector art directly inside Illustrator through Windows COM automation.",
    tag: "Agentic Coding",
    date: "Mar 2026",
  },
  {
    title: "The $10 Trillion Blind Spot: Building an Autonomous AI RedTeam Agent to Think Like a Hacker",
    description:
      "Using LangGraph and LLMs to autonomously run penetration tests and surface vulnerabilities in web applications.",
    tag: "Red Team AI",
    date: "Nov 2025",
  },
  {
    title: "Google's Project Astra Isn't Just Another Chatbot — It's the Future of Personal AI",
    description:
      "What ambient computing looks like when AI continuously processes video and audio to act as a perceptive personal assistant.",
    tag: "Autonomous Agents",
    date: "Oct 2025",
  },
];
