import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        muted: "var(--muted)",
        bg: "var(--bg)",
        card: "var(--card)",
        line: "var(--line)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
        success: "var(--success)"
      },
      fontFamily: {
        display: "var(--font-display)",
        body: "var(--font-body)",
        mono: "var(--font-mono)"
      },
      boxShadow: {
        glass: "0 12px 40px rgba(0,0,0,0.18)"
      }
    }
  },
  plugins: []
};

export default config;
