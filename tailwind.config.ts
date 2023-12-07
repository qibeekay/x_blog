import { url } from 'inspector';
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
				light: '#F8F7F4',
			},
		},
		screens: {
			xs: '350px',
			sm: '480px',
			ms: '641px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		backgroundImage: {
			hero: "url('/bg.jpg')",
		},
	},
	plugins: [],
};
export default config;
