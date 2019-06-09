const config = require('./data/siteConfig.js');

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
		'@gatsby-themes/mui',
		'@gatsby-themes/emotion'
	]
};
