import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO } from '@gatsby-themes/core';
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
			<h1>Recipes</h1>
			<div css={cardsList}>
				{data.allRecipes.edges.map(({ node }) => (
					<div css={card} key={node.fields.slug}  onClick={() => navigate(node.fields.slug)}>
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
			{/* 			<CardsList>
				<Card>
					<img src="https://i.redd.it/b3esnz5ra34y.jpg" />
					<TitleWhite>
						<p>Card Title</p>
					</TitleWhite>
				</Card>
			</CardsList> */}

			{/* 			<ul>
				{data.allRecipes.edges.map(({ node }) => (
					<li key={node.fields.slug}>
						<Link to={node.fields.slug}>{node.title}</Link>
					</li>
				))}
			</ul> */}
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
