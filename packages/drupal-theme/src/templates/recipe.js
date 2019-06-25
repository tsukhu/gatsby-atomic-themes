import { graphql } from 'gatsby';
// place holder receipe
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
									fluid(maxWidth: 470, maxHeight: 353) {
										...GatsbyImageSharpFluid
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
