import PropTypes from 'prop-types';
const { arrayOf, number, shape, string } = PropTypes;

// Added proptypes
const RecipePropTypes = shape({
	recipes: shape({
		difficulty: string.isRequired,
		ingredients: arrayOf(string.isRequired).isRequired,
		instructions: string.isRequired,
		preparationTime: number.isRequired,
		relationships: shape({
			category: shape({
				name: string.isRequired
			}).isRequired,
			image: shape({
				relationships: shape({
					imageFile: shape({
						localFile: shape({
							childImageSharp: shape({
								fixed: shape({
									base64: string.isRequired,
									height: number.isRequired,
									src: string.isRequired,
									srcSet: string.isRequired,
									width: number.isRequired
								}).isRequired,
								fluid: shape({
									aspectRatio: number.isRequired,
									base64: string.isRequired,
									sizes: string.isRequired,
									src: string.isRequired,
									srcSet: string.isRequired
								}).isRequired
							}).isRequired
						}).isRequired
					}).isRequired
				}).isRequired
			}).isRequired
		}).isRequired,
		title: string.isRequired,
		totalTime: number.isRequired
	}).isRequired
}).isRequired;

export default RecipePropTypes;
