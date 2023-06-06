/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{ts,tsx}', './src/**/*'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1000px',
				xl: '1000px',
				'2xl': '1000px',
			},
		},
		extend: {},
	},
	plugins: [],
};
