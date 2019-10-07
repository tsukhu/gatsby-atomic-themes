const config = require('./data/siteConfig.js');

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
		'@gatsby-themes/mui',
		'@gatsby-themes/emotion',
		'@gatsby-themes/tailwind'
	]
};
