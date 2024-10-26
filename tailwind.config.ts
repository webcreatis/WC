import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        'custom': '1 1.4',
      },
      fontFamily: {
        jaapokki: ['var(--font-jaapokki-sans)'],
        raleway: ['var(--font-raleway)'],
      },
      colors: {
        green:"#7BE0AD",
        white:"#F9F9F9",
        darkWhite:"#e4e6ef"
      },
    },
  },
  plugins: [],
};
export default config;
