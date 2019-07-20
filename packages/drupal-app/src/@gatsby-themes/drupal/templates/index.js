import React from 'react';
import { withTheme } from 'emotion-theming';
import { Layout, SEO } from '@gatsby-themes/core';
import { navigate } from 'gatsby';
import { CardsTemplate, HeaderSection, SubHeading } from '@gatsby-themes/emotion-recipe-theme';

const IndexPage = ({ data , theme}) => {
	return (
		<Layout>
			<SEO title="Home" />
			<HeaderSection />
			<SubHeading bg="#2F2A2A" fg="#FFF" font={theme.fonts.body}>Our Recipes</SubHeading>
			<CardsTemplate
				data={data.allRecipes.edges}
				cardClickHandler={(link) => navigate(link)}
			/>
		</Layout>
	);
};

export default withTheme(IndexPage);
