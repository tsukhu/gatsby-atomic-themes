module.exports = (themeOptions) => {
	return {
		plugins: [
			{
				resolve: `gatsby-plugin-compile-es6-packages`,
				options: {
					modules: ['@gatsby-themes/drupal']
				}
			},
			{
				resolve: `gatsby-source-drupal`,
				options: {
					...themeOptions
				}
			}
		]
	};
};
