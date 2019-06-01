module.exports = {
	plugins: [
		{
			resolve: `gatsby-plugin-compile-es6-packages`,
			options: {
				modules: ['mui-theme'],
			},
		},
		{
			resolve: 'gatsby-plugin-material-ui',
			// If you want to use styled components you should change the injection order.
			options: {
				// stylesProvider: {
				//   injectFirst: true,
				// },
			},
		},
		// If you want to use styled components you should add the plugin here.
		// 'gatsby-plugin-styled-components',
	],
}
