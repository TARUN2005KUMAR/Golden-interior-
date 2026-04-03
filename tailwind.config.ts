import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        golden: {
          brown: "#2C241B", // Deep espresso
          charcoal: "#1A1A1A", // Elegant dark
          gold: "#D4AF37", // Champagne gold
          sand: "#F9F8F6", // Ultra-subtle warm white
          cream: "#FAF6F0", // Keeping for compatibility
          green: "#263022", // Muted elegant green
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "wood-texture": "url('https://www.transparenttextures.com/patterns/wood-pattern.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
