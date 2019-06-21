import { graphql } from 'gatsby';
import React from 'react';
import { Layout, SEO } from '@gatsby-themes/core';
import { RecipeTemplate } from '@gatsby-themes/emotion';

const RecipePage = ({ data }) => {
	const { recipes } = data;
	const {
		relationships,
		title,
		preparationTime,
		totalTime,
		difficulty,
		ingredients,
		instructions
	} = recipes;

	const recipeData = {
		category: relationships.category.name,
		title: title,
		preparationTime: preparationTime,
		totalTime: totalTime,
		difficulty: difficulty,
		ingredients: ingredients,
		instructions: instructions,
		childImageSharp:
			relationships.image.relationships.imageFile.localFile.childImageSharp
	};
	return (
		<Layout>
			<SEO title={data.recipes.title} />
			<RecipeTemplate data={recipeData} />
		</Layout>
	);
};

export default RecipePage;

export const query = graphql`
	query($slug: String!) {
		recipes(fields: { slug: { eq: $slug } }) {
			title
			preparationTime
			difficulty
			totalTime
			ingredients
			instructions
			relationships {
				category {
					name
				}
				image {
					relationships {
						imageFile {
							localFile {
								childImageSharp {
									fluid(maxWidth: 470, maxHeight: 353) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
