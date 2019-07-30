const activeEnv = process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});


module.exports = (themeOptions) => {
	return {
		plugins: [
			{
				resolve: `gatsby-plugin-compile-es6-packages`,
				options: {
					modules: ['@gatsby-themes/okta'],
				},
			},
		],
	}
}
