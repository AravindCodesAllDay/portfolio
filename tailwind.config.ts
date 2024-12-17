import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#d9d9d9",
        dark: "#00224D",
      },
      backgroundImage: {
        backgroungimg: "url('/bg.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
