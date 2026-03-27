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
        "primary-black": "#0A0A0A",
        "primary-gold": "#CDB87C",
        "accent-gold": "#CFB991",
        "dark-charcoal": "#1B1B1B",
        "warm-white": "#F5F5F0",
        "pure-white": "#FFFFFF",
        "muted-gray": "#6B6B6B",
        "border-gray": "#2D2D2D",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "Oswald", "sans-serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
        mono: ["var(--font-space-mono)", "Space Mono", "monospace"],
      },
      letterSpacing: {
        widest: "0.2em",
        wider: "0.15em",
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "typing": "typing 3.5s steps(40, end) infinite",
        "blink": "blink 0.75s step-end infinite",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "typing": {
          "0%": { width: "0" },
          "40%": { width: "100%" },
          "60%": { width: "100%" },
          "100%": { width: "0" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #CDB87C 0%, #CFB991 50%, #B89A5A 100%)",
        "dark-gradient": "linear-gradient(180deg, #0A0A0A 0%, #1B1B1B 100%)",
      },
      boxShadow: {
        "gold": "0 4px 24px rgba(205, 184, 124, 0.3)",
        "gold-lg": "0 8px 40px rgba(205, 184, 124, 0.4)",
        "dark": "0 4px 24px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
