// tailwind.config.ts
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
        brand: {
          dark: "#0b2c24", // Dark footer/text color
          primary: "#166534", // Main green button/logo
          light: "#dcfce7", // Light mint backgrounds
          accent: "#fef08a", // Yellow badges
        },
      },
    },
  },
  plugins: [],
};
export default config;