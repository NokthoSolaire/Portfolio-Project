/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			transitionDuration: {
				'2000': '2000ms',
				'3000': '3000ms',
				'4000': '4000ms',
				'5000': '5000ms',
				'6000': '6000ms',
				'7000': '7000ms',
				'8000': '8000ms',
				'9000': '9000ms',
				'10000': '10000ms',
			  }
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
