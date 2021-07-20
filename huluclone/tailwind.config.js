module.exports = {
	mode: "jit", // this is for just-in-time compiling
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		// './layout/**/*.{js,ts,jsx,tsx}',
		// './helpers/**/*.{js,ts,jsx,tsx}',
		// // Add more here
	],
	darkMode: "class", // false, 'media' or 'class'
	theme: {
		extend: {
			screens: {
				"3xl": "2000px",
			},
		},
	},
	variants: {
		extend: {
			// animation: {
			// 	// ["group-hover"],
			// 	bounce: "1s infinite",
			// },
		},
	},
	// added to remove the scrollbar from the browser
	// this enhances our utility classes for tailwind
	plugins: [require("tailwind-scrollbar-hide")],
};
