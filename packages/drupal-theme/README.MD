# Gatsby Drupal Theme

The drupal theme sets up the configuration for drupal

## How to use

- Add the dependency `@gatsby-themes/drupal`
- The drupal theme will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.

```bash
yarn add `@gatsby-themes/drupal`
```

- Configure the theme in the `gatsby-config.js` file.

```javascript

const drupalConfig = require('./data/drupalConfig.js');

module.exports = {
	__experimentalThemes: [
		{
			resolve: '@gatsby-themes/drupal',
			options: {
				...drupalConfig
			}
		}
	]
};
```
- Add the site configuration file in the project `data/drupalConfig.js`

```javascript
module.exports = {
	baseUrl: '<add drupal json api server url>',
	apiBase: '<api or json>'
};

```
