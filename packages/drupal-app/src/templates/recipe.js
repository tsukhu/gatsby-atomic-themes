import { graphql } from 'gatsby';
import React from 'react';
import { Layout} from '@gatsby-themes/core';

const RecipeTemplate = ({ data }) => <Layout> my recipe</Layout>;

export default RecipeTemplate;

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
