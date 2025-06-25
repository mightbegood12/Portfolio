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
    },
  },
  plugins: [addVariablesForColors],
};
