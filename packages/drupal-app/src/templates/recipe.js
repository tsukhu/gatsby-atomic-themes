import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Layout } from '@gatsby-themes/core';
import { Container } from '@gatsby-themes/emotion';
import {
	receipe,
	receipeAuthor,
	receipeBody,
	receipeContainer,
	receipeDescription,
	receipeRead,
	receipeShadow,
	receipeSubtle,
	receipeTitle,
	receipeUclearfix,
	receipeMedia
} from '../components/receipe-components';
const RecipeTemplate = ({ data }) => {
	return (
		<Layout>
			<Container column margin={20}>
				<div css={receipeContainer}>
					<div css={[receipe, receipeUclearfix]}>
						<div css={receipeBody}>
							<span css={[receipeAuthor, receipeSubtle]}>
								{data.recipes.relationships.category.name}
							</span>
							<h2 css={receipeTitle}>{data.recipes.title}</h2>
							<span css={[receipeDescription, receipeSubtle]}>
								<div>
									<strong>Preparation time:</strong>
								</div>
								<div>{data.recipes.preparationTime} minutes</div>
								<div>
									<strong>Cooking time:</strong>
								</div>
								<div>{data.recipes.totalTime} minutes</div>
								<div>
									<strong>Difficulty:</strong>
								</div>
								<div>{data.recipes.difficulty}</div>
							</span>
							<div css={receipeRead}>Ingredients</div>
							<span css={[receipeDescription]}>
								<ul>
									{data.recipes.ingredients &&
										data.recipes.ingredients.map((ing, index) => (
											<li key={index}>{ing}</li>
										))}
								</ul>
							</span>
							<div css={receipeRead}>Method</div>
							<span css={[receipeDescription]}>
								<ul>
									{data.recipes.instructions &&
										data.recipes.instructions
											.split(`,`)
											.map((i) => <li key={i}>{i}</li>)}
								</ul>
							</span>
						</div>
						<div css={receipeMedia}>
							<Img
								fluid={
									data.recipes.relationships.image.relationships.imageFile
										.localFile.childImageSharp.fluid
								}
							/>
						</div>
					</div>
					<div css={receipeShadow} />
				</div>
			</Container>
		</Layout>
	);
};

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
									fluid(maxWidth: 470,maxHeight: 353) {
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
