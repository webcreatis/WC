import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontSize: {
  			cross: 'clamp(0.875rem, 1vw, 2rem)'
  		},
  		animation: {
  			rotateMouseEnter: 'rotateMouseEnter .3s ease-in-out forwards',
  			rotateMouseOut: 'rotateMouseout .3s ease-in-out forwards',
  			fadeIn: 'fadeIn 0.8s ease-out forwards',
  			bgHover: 'background-color ease-out .4s',
  			marquee: 'marquee 4s linear infinite',
  			scalePics: 'scalePics 0.4s ease-in-out forwards',
				marqueeText: 'marqueeOne 30s linear infinite',
        'marquee-reverse': 'marqueeTwo 30s linear infinite',
  		},
  		keyframes: {
				marqueeOne: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeTwo: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			rotateMouseEnter: {
  				from: {
  					transform: 'rotate(0deg)'
  				},
  				to: {
  					transform: 'rotate(90deg)'
  				}
  			},
  			rotateMouseout: {
  				from: {
  					transform: 'rotate(90deg)'
  				},
  				to: {
  					transform: 'rotate(0deg)'
  				}
  			},
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			scalePics: {
  				'100%': {
  					transform: 'scale(1)'
  				}
  			}
  		},
  		scale: {
  			custom: '1 1.4'
  		},
  		fontFamily: {
  			jaapokki: ['var(--font-jaapokki-sans)'],
  			raleway: ['var(--font-raleway)']
  		},
  		colors: {
  			green: '#7BE0AD',
				darkGreen: "#234E42",
  			white: '#F9F9F9',
  			darkWhite: '#e4e6ef',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
