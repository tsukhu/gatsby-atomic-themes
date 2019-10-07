const path = require('path')

module.exports = (themeOptions) => {
	return {
		plugins: [
			{
				resolve: `gatsby-plugin-compile-es6-packages`,
				options: {
					modules: ['@gatsby-themes/tailwind']
				}
			},
			`gatsby-plugin-postcss`,
			// Add after these plugins if used
			{
				resolve: `gatsby-plugin-purgecss`,
				options: {
					printRejected: true, // Print removed selectors and processed file names
					develop: true, // Enable while using `gatsby develop`
					tailwind: true, // Enable tailwindcss support
					purgeOnly: [path.join(__dirname, `src`, `styles`, `tailwind.css`)]
					// whitelist: ['whitelist'], // Don't remove this selector
					// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
					// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
				}
			}
		]
	};
};
