import { graphql } from 'gatsby';
import React from 'react';
import { Layout, SEO } from '@gatsby-themes/core';
import RecipeTemplate from '../components/receipe-template';

const RecipePage = ({ data }) => {
	return (
		<Layout>
			<SEO title={data.recipes.title} />
			<RecipeTemplate data={data} />
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
