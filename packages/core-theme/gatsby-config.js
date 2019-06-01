const path = require('path')
const config = require('./data/siteConfig.js')

module.exports = {
	siteMetadata: {
		title: config.siteTitle,
		description: config.siteDescription,
		author: config.authorName,
		...config,
	},
	pathPrefix: config.pathPrefix,
	plugins: [
		{
			resolve: `gatsby-plugin-compile-es6-packages`,
			options: {
				modules: ['core-theme'],
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`),
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: config.siteTitle,
				short_name: config.siteTitle,
				start_url: config.pathPrefix,
				background_color: config.background_color,
				theme_color: config.theme_color,
				display: config.display,
				icon: path.join(__dirname, `src`, `images`,`gatsby-icon.png`),
			},
		},

		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
