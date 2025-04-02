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
				white : '#F6FDF3',
				'primary-green' : '#5D8D4B',
				'secondary-green' : '#F6FDF3',
				'tertiary-green' : '#303c2c',
				grey : '#fdfdfd'
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
				}
			},
			animation : {
				'rotate-gear' : 'rotate-gear 10s linear infinite, button-scale 200ms ease-out forwards',
				'underline-text' : 'underline 200ms ease-out'
			}
		}
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [typography],
} satisfies Config;
