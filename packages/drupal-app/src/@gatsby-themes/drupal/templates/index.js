import React from 'react';
import { Layout, SEO } from '@gatsby-themes/core';
import CardsTemplate from '../../../components/cards-template';
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
