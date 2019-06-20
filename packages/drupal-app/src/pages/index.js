import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO } from '@gatsby-themes/core';
import { Container } from '@gatsby-themes/emotion';
import {
	card,
	cardImage,
	cardsList,
	cartTitle,
	titleWhite
} from '../components/cards';
import { navigate } from 'gatsby';

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" />
			<Container column margin={20}>
				<div css={cardsList}>
					{data.allRecipes.edges.map(({ node }) => (
						<div
							css={card}
							key={node.fields.slug}
							onClick={() => navigate(node.fields.slug)}
						>
							<div css={cardImage}>
								<img
									src={
										node.relationships.image.relationships.imageFile.localFile
											.childImageSharp.resize.src
									}
									alt={node.title}
								/>
							</div>
							<div css={[cartTitle, titleWhite]}>
								<p>{node.title}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
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
