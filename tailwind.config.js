/** @type {import('tailwindcss').Config} */
export default {
	monde: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],

	theme: {
		extend: {},
	},
	plugins: [],
};

