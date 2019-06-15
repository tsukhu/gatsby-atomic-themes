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
		'@gatsby-themes/emotion',
		{
			resolve: '@gatsby-themes/drupal',
			options: {
				...drupalConfig
			}
		},
	]
};
