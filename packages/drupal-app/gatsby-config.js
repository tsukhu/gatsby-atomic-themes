const config = require('./data/siteConfig.js');
const drupalConfig = require('./data/drupalConfig.js');

module.exports = {
	__experimentalThemes: [
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
			resolve: '@gatsby-themes/emotion',
			options: {
				fullMode: true
			}
		},
		{
			resolve: '@gatsby-themes/drupal',
			options: {
				...drupalConfig
			}
		},
	]
};
