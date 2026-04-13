/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Montserrat"', "system-ui", "sans-serif"],
        body: ['"Open Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          DEFAULT: "#161A36",
          50: "#f0f1f8",
          100: "#d8daf0",
          200: "#b1b5e1",
          300: "#8a8fd2",
          400: "#636bc3",
          500: "#4C59A8",
          600: "#3b4486",
          700: "#2a3064",
          800: "#1e2349",
          900: "#161A36",
        },
        accent: {
          indigo: "#4C59A8",
          blue: "#1863DC",
          gold: "#E0AC00",
          green: "#28C840",
          red: "#FF5F57",
          yellow: "#FEBC2E",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F4F4F4",
          200: "#EEEEEE",
          300: "#E0E0E0",
        },
      },
      keyframes: {
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        "marquee": "marquee 30s linear infinite",
        "fade-up": "fade-up 0.7s ease-out",
        "float": "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
