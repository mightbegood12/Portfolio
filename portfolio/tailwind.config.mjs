import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette.js";

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-anton)"],
        mono: ["var(--font-inter)"],
        geistL: ["var(--font-geistL)"],
        geistB: ["var(--font-geistB)"],
      },
      animation: {
        shine: "shine 2s ease-in-out infinite", // Adjust duration and timing function as needed
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-800%) skewX(-12deg)" }, // Starting position
          "100%": { transform: "translateX(500%) skewX(-12deg)" }, // Ending position (adjust as needed)
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
