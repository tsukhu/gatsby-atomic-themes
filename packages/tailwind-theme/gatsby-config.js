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
			{
				resolve: `gatsby-plugin-postcss`,
				options: {
					postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
				}
			},
			// Add after these plugins if used
			{
				resolve: `gatsby-plugin-purgecss`,
				options: {
					printRejected: false,
					develop: false,
					tailwind: true,
				},
			}

		]
	};
};
