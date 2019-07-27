import React from 'react';
import PropTypes from 'prop-types';
import { Layout, SEO } from '@gatsby-themes/core';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { Heading } from '@gatsby-themes/emotion-recipe-theme';
import { RecipeTemplate } from '@gatsby-themes/emotion-recipe-theme';
import { RecipePropTypes } from '@gatsby-themes/drupal';

const RecipePage = ({ data,theme }) => {
	const { recipes } = data;
	const {
		relationships,
		title,
		preparationTime,
		totalTime,
		difficulty,
		ingredients,
		instructions
	} = recipes;

	const recipeData = {
		category: relationships.category.name,
		title: title,
		preparationTime: preparationTime,
		totalTime: totalTime,
		difficulty: difficulty,
		ingredients: ingredients,
		instructions: instructions,
		childImageSharp:
			relationships.image.relationships.imageFile.localFile.childImageSharp
	};

	return (
		<Layout>
			<SEO title={data.recipes.title} />
			<Heading bg="#2F2A2A" fg="#FFF">
				<Link
					to="/"
					style={{
						color: "#fff",
						textDecoration: `none`,
						fontFamily: theme.fonts.heading,
						margin: theme.pageMargin,
					}}
				>
					GATSBY<span style={{ color: '#FFD700' }}> RECIPEZE</span>
				</Link>
			</Heading>
			<RecipeTemplate data={recipeData} />
		</Layout>
	);
};

RecipePage.propTypes = {
	data: RecipePropTypes,
	theme: PropTypes.object.isRequired
};


export default withTheme(RecipePage);
