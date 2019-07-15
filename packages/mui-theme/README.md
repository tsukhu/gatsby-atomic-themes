# Gatsby Material-UI Theme

The mui theme sets up the configuration based on the best practices recommended by the material-ui team.

- This takes care of all the setup and configuration requirements for theming, layouts, material-ui setup for SSR and client side rendering.

## How to use

- Add the dependency `@gatsby-themes/mui`
- The mui theme will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.

```bash
yarn add `@gatsby-themes/mui`
```

- Configure the theme in the `gatsby-config.js` file.

```javascript
module.exports = {
	plugins: [
		{
			resolve: '@gatsby-themes/mui',
		},
	],
}
```
