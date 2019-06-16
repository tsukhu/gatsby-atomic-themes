module.exports = (pluginOptions) => {
	return {
		plugins: [
			{
				resolve: `gatsby-plugin-compile-es6-packages`,
				options: {
					modules: ['@gatsby-themes/emotion']
				}
			},
			`gatsby-plugin-emotion`
		]
	};
};
