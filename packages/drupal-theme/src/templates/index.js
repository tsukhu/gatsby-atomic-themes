import { graphql } from 'gatsby';


const IndexPage = () => {
	return (
		<>Place holder component</>
	);
};

export default IndexPage;
export const pageQuery = graphql`
	query {
		allRecipes(limit: 1000) {
			edges {
				node {
					title
					fields {
						slug
					}
					relationships {
						image {
							relationships {
								imageFile {
									localFile {
										childImageSharp {
											resize(jpegProgressive: true) {
												src
											}
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
		}
	}
`;
