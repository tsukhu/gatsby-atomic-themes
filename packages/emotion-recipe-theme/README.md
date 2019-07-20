# Gatsby Recipe Emotion Theme

The receipe theme is theme that extends the `@gatsby-themes/emotion` theme and provides a UI component library for building recipe pages.
The components are based on the atomic design priciples and can be used to build applications which require the recipe theme.

## How to use

- Add the dependency `@gatsby-themes/emotion-recipe-theme`
- The theme installation will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.
- The dependencies include
	- "@emotion/core": "^10.0.14",
	- "@emotion/styled": "^10.0.14",
	- "@theme-ui/presets": "^0.2.10",
	- "emotion-theming": "^10.0.14",
	- "@mdx-js/react": "^1.0.27",
	- "@gatsby-themes/emotion": "latest"

```bash
yarn add `@gatsby-themes/emotion-recipe-theme`
```

```javascript
module.exports = {
	plugins: [
		{
			resolve: '@gatsby-themes/emotion-recipe-theme'
		}
	]
};
```
