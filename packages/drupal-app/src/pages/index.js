import React from 'react';
import { graphql } from 'gatsby'
import { Layout, SEO } from '@gatsby-themes/core';

const IndexPage = ({data}) => {
	const topRecipe = data.topRecipe.edges[0].node;
	const nextTwoPromotedRecipes = data.nextTwoPromotedRecipes.edges.map(
		(edge) => edge.node
	);
	const nextFourPromotedRecipes = data.nextFourPromotedRecipes.edges.map(
		(edge) => edge.node
	);
	return (
		<Layout>
			<SEO title="Home" />
			<p>Hi from Drupal</p>
	{/* 		<p>{topRecipe}</p>
			<p>{nextTwoPromotedRecipes}</p>
			<p>{nextFourPromotedRecipes}</p> */}
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		topRecipe: allRecipes(sort: { fields: [createdAt] }, limit: 1) {
			edges {
				node {
					title
					fields {
						slug
					}
					relationships {
						image {
							relationships {
								imageFile {
									localFile {
										childImageSharp {
											fluid(maxWidth: 740, maxHeight: 555) {
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
		}
		nextTwoPromotedRecipes: allRecipes(
			sort: { fields: [createdAt] }
			limit: 2
			skip: 1
		) {
			edges {
				node {
					title
					fields {
						slug
					}
					relationships {
						category {
							name
						}
						image {
							relationships {
								imageFile {
									localFile {
										childImageSharp {
											fluid(maxWidth: 240, maxHeight: 240) {
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
		}
		nextFourPromotedRecipes: allRecipes(
			sort: { fields: [createdAt] }
			limit: 4
			skip: 3
		) {
			edges {
				node {
					title
					fields {
						slug
					}
					relationships {
						category {
							name
						}
						image {
							relationships {
								imageFile {
									localFile {
										childImageSharp {
											fluid(maxWidth: 475, maxHeight: 475) {
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
		}
	}
`;
