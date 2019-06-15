import React from 'react';

import { Layout, Image, SEO } from '@gatsby-themes/core';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<p>Hi from Drupal</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
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
