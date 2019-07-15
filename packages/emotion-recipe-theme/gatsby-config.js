module.exports = (pluginOptions) => {
	return {
		plugins: [
			{
				resolve: `gatsby-plugin-compile-es6-packages`,
				options: {
					modules: ['@gatsby-themes/emotion-recipe-theme']
				}
			},
			{
				resolve: '@gatsby-themes/emotion',
				options: {
					fullMode: true
				}
			},
		]
	};
};
