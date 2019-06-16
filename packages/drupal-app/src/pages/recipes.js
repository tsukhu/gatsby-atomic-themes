import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from '@gatsby-themes/core';

const AllRecipes = ({ data }) => (
	<Layout>
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

export default AllRecipes;

export const query = graphql`
	query {
		allRecipes(limit: 1000) {
			edges {
				node {
					title
					fields {
						slug
					}
				}
			}
		}
	}
`;
