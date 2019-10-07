# Gatsby Tailwind Theme

The tailwind theme sets up the configuration based on the best practices recommended by the [Gatsby team](https://www.gatsbyjs.org/docs/tailwind-css/)


```javascript
import {Card} from @gatsby-themes/tailwind;
```

## How to use

- Add the dependency `@gatsby-themes/tailwind`
- The emotion theme will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.

```bash
yarn add `@gatsby-themes/tailwind`
```

- Configure the theme in the `gatsby-config.js` file.

```javascript
module.exports = {
	plugins: [
		{
			resolve: '@gatsby-themes/tailwind',
		}
	]
};
```
