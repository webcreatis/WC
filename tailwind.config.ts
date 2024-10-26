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
        background: "#1B0B35",
        white:"#F9F9F9"
      },
    },
  },
  plugins: [],
};
export default config;
