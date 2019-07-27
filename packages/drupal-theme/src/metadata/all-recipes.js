import PropTypes from 'prop-types';
const { arrayOf, number, shape, string } = PropTypes;

// Added proptypes
const AllRecipesPropTypes = shape({
	allRecipes: shape({
		edges: arrayOf(
			shape({
				node: shape({
					fields: shape({
						slug: string.isRequired
					}).isRequired,
					relationships: shape({
						image: shape({
							relationships: shape({
								imageFile: shape({
									localFile: shape({
										childImageSharp: shape({
											fluid: shape({
												aspectRatio: number.isRequired,
												base64: string.isRequired,
												sizes: string.isRequired,
												src: string.isRequired,
												srcSet: string.isRequired
											}).isRequired,
											resize: shape({
												src: string.isRequired
											}).isRequired
										}).isRequired
									}).isRequired
								}).isRequired
							}).isRequired
						}).isRequired
					}).isRequired,
					title: string.isRequired
				}).isRequired
			}).isRequired
		).isRequired
	})
}).isRequired;

export default AllRecipesPropTypes;
