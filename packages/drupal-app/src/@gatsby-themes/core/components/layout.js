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
									color: theme.color.primary,
									textDecoration: `none`,
									fontFamily: 'Pacifico, cursive',
									margin: theme.pageMargin,
									textShadow: '3px 3px 3px #fff'
								}}
							>
								{data.site.siteMetadata.title}
							</Link>
						</Heading>
						<main>{children}</main>
						<Footer textColor={theme.color.primary}>
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
