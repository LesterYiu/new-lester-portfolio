import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: [
		"./app/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./lib/**/*.{ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily : {
				sans : ["var(--font-inter)"],
				outfit : ["Outfit", "sans-serif"],
				jost : [ "Jost", "sans-serif" ]
			},
			colors : {
				green : '#B1D2A4',
				white : '#FFFFFF',
				red : '#FF2424',
				'primary-green' : '#5D8D4B',
				'secondary-green' : '#F6FDF3',
				'tertiary-green' : '#303c2c',
				'dark-primary' : '#1E1D1D',
				'dark-secondary' : '#28441d',
				'dark-tertiary' : '#335526',
				'dark-quaternary' : '#404040',
				grey : '#fdfdfd',
				'secondary-grey' : '#e5e7eb'
			},
			keyframes : {
				'rotate-gear' : {
					'from': { 
						transform : 'rotate(0deg)',
						'-webkit-transform' : 'rotate(0deg)',
						'-o-transform' : 'rotate(0deg)',
						'-moz-transform' : 'rotate(0deg)',
						'-ms-transform' : 'rotate(0deg)'
					},
					'to': { 
						transform: 'rotate(360deg)',
						'-webkit-transform' : 'rotate(360deg)',
						'-o-transform' : 'rotate(360deg)',
						'-moz-transform' : 'rotate(360deg)',
						'-ms-transform' : 'rotate(360deg)'
					}
				},
				'button-scale' : {
					'from' : {
						scale : 'none'
					},
					'to' : {
						scale : '105% 105%'
					}
				},
				'underline' : {
					'from' : {
						width: '0%'
					},
					'to' : {
						width : '100%'
					}
				},
				'fade-out' : {
					'0%' : { opacity: '100%' },
					'50%' : { opacity : '50%'},
					'100%' : { opacity: '0%' }
				}
			},
			animation : {
				'rotate-gear' : 'rotate-gear 10s linear infinite, button-scale 200ms ease-out forwards',
				'underline-text' : 'underline 200ms ease-out',
				'fade-out': 'fade-out 0.3s ease-out forwards',
			}
		}
	},
	darkMode: ['class', '[data-theme="dark"]'], 
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [typography],
} satisfies Config;
