import { graphql } from 'gatsby';
// place holder receipe

const RecipePage = () => {
	return (
		<>Place holder component</>
	);
};


export default RecipePage;

export const query = graphql`
	query($slug: String!) {
		recipes(fields: { slug: { eq: $slug } }) {
			title
			preparationTime
			difficulty
			totalTime
			ingredients
			instructions
			relationships {
				category {
					name
				}
				image {
					relationships {
						imageFile {
							localFile {
								childImageSharp {
									fluid(maxWidth: 300) {
										...GatsbyImageSharpFluid
									}
									fixed(width: 300, height: 300) {
										...GatsbyImageSharpFixed
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;
