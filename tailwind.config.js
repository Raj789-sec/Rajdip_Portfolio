/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        base: {
          DEFAULT: "#050510",
          50: "#080818",
          100: "#0a0a1f",
          200: "#0f0f2a",
          300: "#151535",
          400: "#1a1a40",
        },
        neon: {
          cyan: "#00f0ff",
          green: "#39ff14",
          violet: "#a855f7",
          pink: "#ff2eaa",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
