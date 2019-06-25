const path = require(`path`);

// Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;
	if (node.internal.type === `recipes`) {
		const slug = `/${node.internalId}/`;
		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;

	const recipeTemplate = 	path.join(__dirname, `src`, `templates`, `recipe.js`);
	const landingPageTemplate = 	path.join(__dirname, `src`, `templates`, `index.js`);

	createPage({
		path: '/',
		component: landingPageTemplate
	});

	// Query for recipe nodes to use in creating pages.
	return graphql(
		`
			{
				allRecipes {
					edges {
						node {
							internalId
							fields {
								slug
							}
						}
					}
				}
			}
		`
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}

		// Create pages for each recipe.
		result.data.allRecipes.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: recipeTemplate,
				context: {
					slug: node.fields.slug
				}
			});
		});
	});
};
