const path = require('path');
const tailwindcss = require(`tailwindcss`);

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
					postCssPlugins: [
						tailwindcss(path.join(__dirname, `tailwind.config.js`)),
						require('tailwindcss'),
						require('autoprefixer')
					]
				}
			},
			// Add after these plugins if used
			{
				resolve: `gatsby-plugin-purgecss`,
				options: {
					printRejected: false,
					develop: false,
					tailwind: true
				}
			}
		]
	};
};
