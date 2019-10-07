# Gatsby Drupal Theme

The drupal theme sets up the configuration for drupal

- This is also based on the Gatsby DEMO Drupal CMS site for recipes
- It takes care of not only the drupal gatsby plugin configuration but also sets up all the queries that are needed for the building the recipe app.
- Currently there are two template page queries available
	1) [Landing Page Query](https://github.com/ERS-HCL/gatsby-atomic-themes/blob/master/packages/drupal-theme/src/templates/index.js) - List of all the recipes
	2) [Recipe Template Page Query](https://github.com/ERS-HCL/gatsby-atomic-themes/blob/master/packages/drupal-theme/src/templates/recipe.js) - Specific Recipe details based on the id
- As part of this we also have proptype definitions that can be imported into the template that wants to use the query. In the above mentioned GraphQL queries the prop type definition files
	1) [Landing Page Query PropTypes](https://github.com/ERS-HCL/gatsby-atomic-themes/blob/master/packages/drupal-theme/src/metadata/all-recipes.js)
	2) [Recipe Template Page Query PropTypes](https://github.com/ERS-HCL/gatsby-atomic-themes/blob/master/packages/drupal-theme/src/metadata/recipe.js)
	You can then use the proptypes directly in the template implementation by importing them

	```javascript
	import { AllRecipesPropTypes } from '@gatsby-themes/drupal';
	IndexPage.propTypes = {
		data: AllRecipesPropTypes, // Query prop types
		theme: PropTypes.object.isRequired
	};
	```

## How to use

- Add the dependency `@gatsby-themes/drupal`
- The drupal theme will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.
- The depenendies include
	- "gatsby": "^2.15.29",
	- "gatsby-source-drupal": "^3.1.11"


```bash
yarn add `@gatsby-themes/drupal`
````

- Configure the theme in the `gatsby-config.js` file.

```javascript
const drupalConfig = require('./data/drupalConfig.js');

module.exports = {
	plugins: [
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

- Create implement the two template pages as shadow components (Index , Recipe as mentioned above).
	- The data queries (GraphQL queries) will be provided by theme
	- Only implement the Page rendering logic in the application (The data object from the shadows templates will be avaiable to use)
		- See the example templates in the [drupal-app](https://github.com/ERS-HCL/gatsby-atomic-themes/tree/master/packages/drupal-app) for more details.
