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
import {
	Heading,
	HeaderSection,
	Footer
} from '@gatsby-themes/emotion-recipe-theme';

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
					<GlobalHeaderStyles theme={theme} />

					<div>
						<main>{children}</main>
						<Footer textColor={theme.colors.primary} font={theme.fonts.body}>
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
