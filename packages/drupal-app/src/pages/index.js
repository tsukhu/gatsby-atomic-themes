import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, SEO } from '@gatsby-themes/core';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" />
			<h1>Recipes</h1>
			<ul>
				{data.allRecipes.edges.map(({ node }) => (
					<li key={node.fields.slug}>
						<Link to={node.fields.slug}>{node.title}</Link>
					</li>
				))}
			</ul>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query {
		allRecipes(limit: 1000) {
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
		}
	}
`;
