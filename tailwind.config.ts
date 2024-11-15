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
        fadeIn: "fadeIn 0.8s ease-out forwards",
        bgHover:"background-color ease-out .4s",
        marquee:"marquee 4s linear infinite"

      },
      keyframes: {
        marquee: {
          "0%": {transform: 'translateX(0%)'},
          "100%": {transform: 'translateX(-100%)'}
        },
        rotateMouseEnter: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(90deg)' },
        },
        rotateMouseout: {
          'from': { transform: 'rotate(90deg)' },
          'to': { transform: 'rotate(0deg)' },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
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
