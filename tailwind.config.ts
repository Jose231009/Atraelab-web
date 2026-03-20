import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#c8f000",
          bg: "#000000",
          "bg-soft": "#0a0a0a",
          "bg-card": "rgba(255,255,255,0.03)",
          white: "#ffffff",
          muted: "#a1a1aa",
          border: "rgba(255,255,255,0.1)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "count-up": "countUp 1s ease-out forwards",
        "gradient-shift": "gradientShift 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(200,240,0,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(200,240,0,0.5)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "radial-dark":
          "radial-gradient(circle at top right, #111827, #000000)",
        "lime-glow":
          "radial-gradient(circle, rgba(200,240,0,0.15) 0%, transparent 70%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "neon-lime": "0 0 20px rgba(200,240,0,0.3), 0 0 40px rgba(200,240,0,0.1)",
        "neon-lime-strong":
          "0 0 30px rgba(200,240,0,0.5), 0 0 60px rgba(200,240,0,0.2)",
        "card-glass": "0 8px 32px rgba(0,0,0,0.4)",
        "meta-glow": "0 0 20px rgba(168,85,247,0.4)",
        "google-glow": "0 0 20px rgba(34,197,94,0.4)",
        "tiktok-glow": "0 0 20px rgba(236,72,153,0.4)",
      },
    },
  },
  plugins: [],
};
export default config;
