import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/site/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── Colors ───────────────────────────────────────────────────────────
      colors: {
        bg: {
          base: "#05080f",
          card: "#0a101a",
        },
        brand: {
          green: "#9bf11c",
          blue:  "#2589ff",
        },
        border: {
          default: "#1f2937",
        },
        text: {
          body:  "#9ca3af",
          muted: "#6b7280",
        },
      },

      // ─── Typography ───────────────────────────────────────────────────────
      fontSize: {
        "2xs":  ["0.5rem",  { lineHeight: "1" }],        //  8px – micro labels
        "label":["0.625rem",{ lineHeight: "1" }],        // 10px – stat labels, footer caps
        "cap":  ["0.6875rem",{ lineHeight: "1" }],       // 11px – nav links, button text
        // xs (12px), sm (14px), base (16px) → Tailwind defaults kept
      },

      fontWeight: {
        black: "900",
      },

      letterSpacing: {
        // Tailwind defaults: tighter(-.05em) tight(-.025em) wide(.025em) wider(.05em) widest(.1em)
        // All already present — no additions needed.
      },

      lineHeight: {
        "tight-hero": "1.05", // hero h1
        // tight, relaxed, none → Tailwind defaults kept
      },

      // ─── Spacing ──────────────────────────────────────────────────────────
      maxWidth: {
        container: "1400px",
      },

      spacing: {
        // Tailwind 4/6/8/12/16/20/24 already cover all usages.
        // Custom values only where needed:
        "18": "4.5rem", // 72px – occasional gap
      },

      // ─── Border Radius ────────────────────────────────────────────────────
      borderRadius: {
        // sm(2px) md lg xl 2xl full → Tailwind defaults cover all usages.
        // No additions needed.
      },

      // ─── Box Shadows ──────────────────────────────────────────────────────
      boxShadow: {
        card: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
        glow: "0 0 40px rgba(155, 241, 28, 0.15)",
      },

      dropShadow: {
        glow: "0 0 20px rgba(155, 241, 28, 0.4)",
      },

      // ─── Grid ─────────────────────────────────────────────────────────────
      gridTemplateColumns: {
        "12": "repeat(12, minmax(0, 1fr))",  // explicit; Tailwind includes this by default
        "stats": "repeat(4, 1fr)",           // StatsStrip
        "footer": "2fr 1fr 1fr 1fr",        // Footer mobile (md)
        "footer-lg": "2fr 1fr 1fr 1fr 2fr", // Footer (lg+)
      },

      // ─── Animations ───────────────────────────────────────────────────────
      transitionProperty: {
        "opacity-transform": "opacity, transform",
      },
    },
  },
  plugins: [],
};

export default config;
