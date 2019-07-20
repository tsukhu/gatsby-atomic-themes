import React from 'react';
import { Layout, SEO } from '@gatsby-themes/core';
import { Link } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { Heading } from '@gatsby-themes/emotion-recipe-theme';
import { RecipeTemplate } from '@gatsby-themes/emotion-recipe-theme';

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
			<Heading>
				<Link
					to="/"
					style={{
						color: theme.colors.primary,
						textDecoration: `none`,
						fontFamily: theme.fonts.heading,
						margin: theme.pageMargin,
						textShadow: '3px 3px 3px #fff'
					}}
				>
					Home
				</Link>
			</Heading>
			<RecipeTemplate data={recipeData} />
		</Layout>
	);
};

export default withTheme(RecipePage);
