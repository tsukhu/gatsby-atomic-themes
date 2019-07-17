const config = require('./data/siteConfig.js');
const drupalConfig = require('./data/drupalConfig.js');

module.exports = {
	plugins: [
		{
			resolve: '@gatsby-themes/core',
			options: {
				siteMetadata: {
					title: config.siteTitle,
					description: config.siteDescription
				},
				pathPrefix: config.pathPrefix
			}
		},
		{
			resolve: '@gatsby-themes/emotion-recipe-theme'
		},
		{
			resolve: '@gatsby-themes/drupal',
			options: {
				...drupalConfig
			}
		},
		`gatsby-plugin-theme-ui`
	]
};
