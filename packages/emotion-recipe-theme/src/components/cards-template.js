import React from 'react';
import PropTypes from 'prop-types';
import { cardsList } from './cards';
import { Container } from './core-components';
import ImageCard from './image-card';

const CardsTemplate = ({ data, cardClickHandler }) => {
	return (
		<Container column margin={20}>
			<div css={cardsList}>
				{data.map(({ node }) => (
					<ImageCard
						key={node.title}
						slug={node.fields.slug}
						title={node.title}
						imageSrc={
							node.relationships.image.relationships.imageFile.localFile
								.childImageSharp.resize.src
						}
						cardClickHandler={cardClickHandler}
					/>
				))}
			</div>
		</Container>
	);
};

CardsTemplate.propTypes = {
	data: PropTypes.array.isRequired,
	cardClickHandler: PropTypes.func.isRequired
};

export default CardsTemplate;
