import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { cardsList } from '../components/cards';
import { Global, css } from '@emotion/core';
import ImageCard from '../components/image-card';
import RecipeTemplate from '../components/recipe-template';
import recipeContent from './recipeContent';
import cardListContent from './cardListContent';
import { sub, HeroImage } from '../components/lemon-sparkling';

storiesOf('Emotion Receipe UI Theme', module)
	.add('Image Card', () => (
		<div css={cardsList}>
			<ImageCard
				slug="my slug"
				title="Sample Card"
				imageSrc="http://placeimg.com/640/360/any"
				cardClickHandler={action('clicked')}
			/>
		</div>
	))
	.add('Image Card Grid', () => (
		<div css={cardsList}>
			{cardListContent.map(({ title, slug, imageSrc }) => (
				<ImageCard
					key={title}
					slug={slug}
					title={title}
					imageSrc={imageSrc}
					cardClickHandler={action('clicked')}
				/>
			))}
		</div>
	))
	.add('Receipe Card', () => <RecipeTemplate data={recipeContent} />);
