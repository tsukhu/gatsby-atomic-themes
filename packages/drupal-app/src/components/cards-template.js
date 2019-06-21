import React from 'react';
import PropTypes from 'prop-types';
import {
	card,
	cardImage,
	cardsList,
	cartTitle,
	titleWhite,
	Container
} from '@gatsby-themes/emotion';

const CardsTemplate = ({ data, cardClickHandler }) => {
	return (
		<Container column margin={20}>
			<div css={cardsList}>
				{data.map(({ node }) => (
					<div
						css={card}
						key={node.fields.slug}
						onClick={() => cardClickHandler(node.fields.slug)}
					>
						<div css={cardImage}>
							<img
								src={
									node.relationships.image.relationships.imageFile.localFile
										.childImageSharp.resize.src
								}
								alt={node.title}
							/>
						</div>
						<div css={[cartTitle, titleWhite]}>
							<p>{node.title}</p>
						</div>
					</div>
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
