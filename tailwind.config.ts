import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		content: {
  			infos: 'Création site internet - Social Network - Formation - Développement sur mesure"'
  		},
  		screens: {
  			xs: '320px',
  			s: '375px',
  			mobile: '414px',
  			smallMobile: '640px',
  			tablet: '768px',
  			laptop: '1024px',
  			l: '1320px',
  			ipadPro: '1366px',
  			lg: '1440px',
  			x: '1720px',
  			xl: '2000px',
  			xxl: '2220px',
  			hdDesktop: '2560px'
  		},
  		fontSize: {
  			cross: 'clamp(0.875rem, 1vw, 2rem)'
  		},
  		animation: {
  			rotateMouseEnter: 'rotateMouseEnter .3s ease-in-out forwards',
  			rotateMouseOut: 'rotateMouseout .3s ease-in-out forwards',
  			fadeIn: 'fadeIn 0.8s ease-out forwards',
  			bgHover: 'background-color ease-out .4s',
  			marquee: 'marquee var(--duration) infinite linear',
  			scalePics: 'scalePics 0.4s ease-in-out forwards',
  			marqueeText: 'marqueeOne 30s linear infinite',
  			'marquee-reverse': 'marqueeTwo 30s linear infinite',
  			barAnimated: 'barAnimated 1.3s infinite',
  			slideDown: 'SlideDown .8s cubic-bezier(0.8, 0, 1, 1) forwards',
  			SlideUp: 'SlideUp .8s cubic-bezier(0.8, 0, 1, 1) forwards',
  			SlideDownDeform: 'SlideDownDeform 0.8s cubic-bezier(0.8, 0, 0.2, 1) forwards',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			scroll: 'scroll 20s linear infinite',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			SlideDownDeform: {
  				'0%': {
  					transform: 'translateY(-250px) scaleY(0.8)',
  					'clip-path': 'polygon(0 0, 100% 0, 100% 0, 0 0)'
  				},
  				'50%': {
  					transform: 'translateY(10px) scaleY(1.05)',
  					'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
  				},
  				'100%': {
  					transform: 'translateY(0) scaleY(1)',
  					'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
  				}
  			},
  			barAnimated: {
  				'0%': {
  					height: '.3rem',
  					opacity: '.5'
  				},
  				'25%': {
  					opacity: '.75'
  				},
  				'50%': {
  					height: '.8rem',
  					opacity: '1'
  				},
  				'75%': {
  					opacity: '.75'
  				},
  				'100%': {
  					height: '.3rem',
  					opacity: '1rem'
  				}
  			},
  			SlideDown: {
  				'0%': {
  					transform: 'translateY(-1000px)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			},
  			SlideUp: {
  				'0%': {
  					transform: 'translateY(0)'
  				},
  				'100%': {
  					transform: 'translateY(-250px)'
  				}
  			},
  			marqueeOne: {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			marqueeTwo: {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(0%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				},
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
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
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			scroll: {
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		},
  		scale: {
  			custom: '1 1.4'
  		},
  		fontFamily: {
  			jaapokki: [
  				'var(--font-jaapokki-sans)'
  			],
  			raleway: [
  				'var(--font-raleway)'
  			]
  		},
  		colors: {
				red: "#E5194E",
				orange: "#E96F32",
				black_ariane: "#000000",
				blue: "#01AEF1",
  			green: '#7BE0AD',
  			greenLight: '#E4F2E7',
  			darkGreen: '#234E42',
  			white: '#F9F9F9',
  			darkWhite: '#F8F8F8',
				bg_card: '#E4E5DE',
  			black: '#18181B',
  			corail: '#ff5757',
  			'bg-brand': 'rgb(29 78 216)',
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
  plugins: [tailwindcssAnimate],
};
export default config;
