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

import { Global, css } from '@emotion/core';
import { Footer } from '@gatsby-themes/emotion-recipe-theme';

const GlobalHeaderStyles = ({ theme }) => {
	return (
		<Global
			styles={css`
				body {
					background: ${theme.colors.background};
				}
			`}
		/>
	);
};

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
					<GlobalHeaderStyles theme={theme} />

					<div>
						<main>{children}</main>
						<Footer bg="#2F2A2A" fg={theme.colors.white} font={theme.fonts.body}>
							{' '}
							© {new Date().getFullYear()}, Built with
							{` `}
							<a href="https://www.gatsbyjs.org" style={{color: '#FFD700' }}>Gatsby Themes</a>
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
