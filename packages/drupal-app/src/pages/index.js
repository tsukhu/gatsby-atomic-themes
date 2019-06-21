import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from '@gatsby-themes/core';
import CardsTemplate from '../components/cards-template';
import { navigate } from 'gatsby';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" />
				<CardsTemplate
					data={data.allRecipes.edges}
					cardClickHandler={(link) => navigate(link)}
				/>
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
											resize(jpegProgressive: true) {
												src
											}
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
