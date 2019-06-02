const config = require('./data/siteConfig.js')

module.exports = {
  __experimentalThemes: [
		{
      resolve: 'core-theme',
      options: {
				siteMetadata: {
					title: config.siteTitle,
					description: config.siteDescription,
				},
				pathPrefix: config.pathPrefix
      },
    },'mui-theme']
};
