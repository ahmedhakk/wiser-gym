/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-roboto)", "system-ui", "sans-serif"], // Uses the variable from layout.tsx with fallbacks
      },
      colors: {
        primary: {
          50: "#FEE2E5",
          100: "#FCC5CB",
          200: "#F98B97",
          300: "#F65163",
          400: "#F3172F",
          500: "#CA061A", // Brand Red
          600: "#B00017",
          700: "#8A0012",
          800: "#64000D",
          900: "#3E0008",
          DEFAULT: "#CA061A",
          hover: "#B00017",
        },
        accent: "#E60017", // The brighter red used for specific text/highlights
        background: {
          DEFAULT: "#0a0a0a",
          secondary: "#121212",
        },
        surface: "#121212", // Surface Colors (Lighter than background, used for cards, boxes, sections)
        // Main Text Colors
        foreground: {
          DEFAULT: "#ffffff",
          muted: "#a1a1a1",
        },
      },
    },
  },
  plugins: [],
};
