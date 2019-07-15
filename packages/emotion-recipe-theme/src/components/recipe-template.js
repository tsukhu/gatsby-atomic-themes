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
} from './recipe-components';

import {Container} from './core-components';

const RecipeTemplate = ({ data }) => {
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
		<Container column margin={20}>
			<div css={receipeContainer}>
				<div css={[receipe, receipeUclearfix]}>
					<div css={receipeBody}>
						<span css={[receipeAuthor, receipeSubtle]}>{category}</span>
						<h2 css={receipeTitle}>{title}</h2>
						<span css={[receipeDescription, receipeSubtle]}>
							<div>
								<strong>Preparation time:</strong>
							</div>
							<div>{preparationTime} minutes</div>
							<div>
								<strong>Cooking time:</strong>
							</div>
							<div>{totalTime} minutes</div>
							<div>
								<strong>Difficulty:</strong>
							</div>
							<div>{difficulty}</div>
						</span>
						<div css={receipeRead}>Ingredients</div>
						<span css={[receipeDescription]}>
							<ul>
								{ingredients &&
									ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
							</ul>
						</span>
						<div css={receipeRead}>Method</div>
						<span css={[receipeDescription]}>
							<ul>
								{instructions &&
									instructions.split(`,`).map((i) => <li key={i}>{i}</li>)}
							</ul>
						</span>
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

export default RecipeTemplate;
