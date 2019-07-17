import React from 'react';
import { Layout, SEO } from '@gatsby-themes/core';
import { CardsTemplate } from '@gatsby-themes/emotion-recipe-theme';
import { navigate } from 'gatsby';
import { HeaderSection } from '@gatsby-themes/emotion-recipe-theme';

const IndexPage = ({ data , theme}) => {
	return (
		<Layout>
			<SEO title="Home" />
			<HeaderSection />
			<CardsTemplate
				data={data.allRecipes.edges}
				cardClickHandler={(link) => navigate(link)}
			/>
		</Layout>
	);
};

export default IndexPage;
