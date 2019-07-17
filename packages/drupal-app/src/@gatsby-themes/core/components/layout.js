/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { Link } from 'gatsby';
import { Heading, Footer } from '@gatsby-themes/emotion-recipe-theme';

const Layout = ({ children, theme }) => {
	console.log(theme);
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQueryDrupal {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data) => (
				<>
					<div>
						<Heading>
							<Link
								to="/"
								style={{
									color: theme.colors.primary,
									textDecoration: `none`,
									fontFamily: theme.fonts.heading,
									margin: theme.space[2],
									textShadow: '3px 3px 3px #fff'
								}}
							>
								{data.site.siteMetadata.title}
							</Link>
						</Heading>
						<main>{children}</main>
						<Footer textColor={theme.colors.primary}>
							{' '}
							© {new Date().getFullYear()}, Built with
							{` `}
							<a href="https://www.gatsbyjs.org">Gatsby</a>
						</Footer>
					</div>
				</>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.object.isRequired
};

export default withTheme(Layout);
