import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'cross': 'clamp(0.875rem, 1vw, 2rem)',
      },
      animation: {
        rotateMouseEnter: 'rotateMouseEnter .3s ease-in-out forwards',
        rotateMouseOut: 'rotateMouseout .3s ease-in-out forwards',
      },
      keyframes: {
        rotateMouseEnter: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(90deg)' },
        },
        rotateMouseout: {
          'from': { transform: 'rotate(90deg)' },
          'to': { transform: 'rotate(0deg)' },
        }
      },
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
