# Gatsby Material-UI Theme

The mui theme sets up the configuration based on the best practices recommended by the material-ui team.

- This takes care of all the setup and configuration requirements for theming, layouts, material-ui setup for SSR and client side rendering.
- An HOC sets up the material-ui theming both for SSR and Browser modes, so the user just needs to configure the material-ui theme configuration to customize it to the websites requirements.

## How to use

- Add the dependency `@gatsby-themes/mui`
- The mui theme will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.
- The dependencies include
	- "@material-ui/core": "^4.5.2",
	- "@material-ui/styles": "^4.5.2",
	- "gatsby-plugin-material-ui": "^2.1.4",


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

- Customize / Setup your Material-UI theme

      	- Create a file under the src directory called `@gatsby-themes\mui\custom-theme.js`
      	- See an example material-ui theme customization [in the demo-app workspace](https://github.com/ERS-HCL/gatsby-atomic-themes/blob/master/packages/demo-app/src/%40gatsby-themes/mui/custom-theme.js)
