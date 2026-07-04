import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        surface: "#0f0f0f",
        foreground: "#ededed",
        muted: "#8a8a8a",
        border: "#1f1f1f",
        accent: {
          DEFAULT: "#7CFF6B",
          dim: "#5fd651",
          soft: "rgba(124, 255, 107, 0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
      transitionTimingFunction: {
        confident: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
