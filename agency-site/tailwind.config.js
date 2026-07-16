/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // --- COLOR PALETTE ---
      // Change these to rebrand the whole site. "forest" is the primary
      // brand color, "cream" is the background/neutral, "clay" is the accent.
      colors: {
        forest: {
          50: "#eef4f1",
          100: "#d5e5dd",
          200: "#aecabb",
          300: "#7fab97",
          400: "#548a76",
          500: "#39705d",
          600: "#2a5a4a",
          700: "#22463b",
          800: "#1c3830",
          900: "#132922",
          950: "#0a1712",
        },
        cream: {
          50: "#fefdfb",
          100: "#fbf7f0",
          200: "#f5ecdd",
          300: "#ecdec3",
          400: "#dcc79c",
        },
        clay: {
          400: "#e8925c",
          500: "#dc7940",
          600: "#c15f2c",
        },
      },
      fontFamily: {
        // Headline pairing: a warm display serif for headings and a clean
        // sans for body copy. Swap the family names below and update the
        // <link> in src/app/layout.tsx if you change fonts.
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        "beam-1": "beam 7s infinite linear",
        "beam-2": "beam 9s infinite linear",
        "beam-3": "beam 11s infinite linear",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
      keyframes: {
        beam: {
          "0%": { transform: "translateY(0%) translateX(0%)", opacity: 0 },
          "10%": { opacity: 1 },
          "90%": { opacity: 1 },
          "100%": {
            transform: "translateY(-100%) translateX(0%)",
            opacity: 0,
          },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
