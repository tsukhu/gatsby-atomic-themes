import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
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
	receipeMedia,
	recipeCategory
} from './recipe-components';

import { withTheme } from 'emotion-theming';
import { Container } from './core-components';

const recipeSection = ({ title, items }) => (
	<>
		<div css={receipeRead}>{title}</div>
		<span css={receipeDescription}>
			<ul>{items && items.map((i,index) => <li key={index}>{i}</li>)}</ul>
		</span>
	</>
);

const RecipeTemplate = ({ data, theme }) => {
	const {
		category,
		title,
		preparationTime,
		totalTime,
		difficulty,
		ingredients,
		instructions,
		childImageSharp
	} = data;
	return (
		<Container column margin={theme.space[1]}>
			<div css={receipeContainer(theme)}>
				<div css={[receipe, receipeUclearfix]}>
					<div css={receipeBody}>
						<span css={[receipeAuthor, recipeCategory]}>{category}</span>
						<h2 css={receipeTitle}>{title}</h2>
						<span >
							<div>
								<strong>Preparation time:</strong>
							</div>
							<div css={receipeSubtle}>{preparationTime} minutes</div>
							<div>
								<strong>Cooking time:</strong>
							</div>
							<div css={receipeSubtle}>{totalTime} minutes</div>
							<div>
								<strong>Difficulty:</strong>
							</div>
							<div css={receipeSubtle}>{difficulty}</div>
						</span>
						{recipeSection({title: 'Ingredients', items: ingredients})}
						{recipeSection({title: 'Method', items: instructions.split(`,`)})}
					</div>
					<div css={receipeMedia}>
						<Img fluid={childImageSharp.fluid} />
					</div>
				</div>
				<div css={receipeShadow} />
			</div>
		</Container>
	);
};

RecipeTemplate.propTypes = {
	data: PropTypes.object.isRequired
};

export default withTheme(RecipeTemplate);
