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
import { css } from '@emotion/core';

import { Link } from 'gatsby';
import { Heading, Footer } from '@gatsby-themes/emotion';

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
					<div
						className={css`
							background: #ddd;
						`}
					>
						<div className={css({ padding: 10 })}>
							<Heading>
								<Link
									to="/"
									style={{
										color: theme.color.primaryAlt,
										textDecoration: `none`
									}}
								>
									{data.site.siteMetadata.title}
								</Link>
							</Heading>
							<main>{children}</main>
							<Footer textColor={theme.color.primaryAlt}>
								{' '}
								© {new Date().getFullYear()}, Built with
								{` `}
								<a href="https://www.gatsbyjs.org">Gatsby</a>
							</Footer>
						</div>
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
