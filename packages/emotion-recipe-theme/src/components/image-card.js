import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { card, cardImage, cartTitle, titleWhite } from './cards';

const ImageCard = ({ slug, title, imageSrc, cardClickHandler, theme }) => {

	return (
		<div css={card} key={slug} onClick={() => cardClickHandler(slug)}>
			<div css={cardImage}>
				<img src={imageSrc} alt={title} />
			</div>
			<div css={cartTitle}>
				<p css={titleWhite(theme)}>{title}</p>
			</div>
		</div>
	);
};

ImageCard.propTypes = {
	slug: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	imageSrc: PropTypes.string.isRequired,
	cardClickHandler: PropTypes.func.isRequired
};

export default withTheme(ImageCard);
