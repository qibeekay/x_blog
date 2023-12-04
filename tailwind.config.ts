import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{html,js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				dark: '#0C0C0C',
			},
		},
	},
	plugins: [],
};
export default config;
