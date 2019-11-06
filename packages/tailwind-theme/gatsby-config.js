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
			`gatsby-plugin-postcss`,
/* 			{
				resolve: `gatsby-plugin-purgecss`,
				options: {
					tailwind: true,
					purgeOnly: [path.join(__dirname, `src`,`css`,`style.css`)]
				}
			} */
		]
	};
};
