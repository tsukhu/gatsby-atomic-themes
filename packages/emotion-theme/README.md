# Gatsby Emotion Theme

The emotion theme sets up the configuration based on the best practices recommended by the [Gatsby team](https://www.gatsbyjs.org/docs/emotion/)

- This takes care of all the setup and configuration requirements for theming, layouts and setup.

## How to use

- Add the dependency `@gatsby-themes/emotion`
- The emotion theme will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.

```bash
yarn add `@gatsby-themes/emotion`
```
- Configure the theme in the `gatsby-config.js` file.

```javascript
module.exports = {
	__experimentalThemes: [
		{
			resolve: '@gatsby-themes/emotion',
		},
	],
}
```
