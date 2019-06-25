import React from 'react';
import PropTypes from 'prop-types';
import { card, cardImage, cartTitle, titleWhite } from './cards';

const ImageCard = ({ slug, title, imageSrc, cardClickHandler }) => {
	return (
		<div css={card} key={slug} onClick={() => cardClickHandler(slug)}>
			<div css={cardImage}>
				<img src={imageSrc} alt={title} />
			</div>
			<div css={[cartTitle, titleWhite]}>
				<p>{title}</p>
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

export default ImageCard;
