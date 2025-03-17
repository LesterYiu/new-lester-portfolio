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
			fontFamily: {
				sans: ["var(--font-inter)"],
				outfit : ["Outfit", "sans-serif"],
				jost : [ "Jost", "sans-serif" ]
			},
			colors: {
				green : '#B1D2A4',
				white : '#F6FDF3',
				'primary-green' : '#5D8D4B'
			}
		}
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [typography],
} satisfies Config;
