/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { SEO } from '@gatsby-themes/core';
import { DisneyLayout } from '@gatsby-themes/tailwind';

const Layout = ({ children }) => {
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={({site}) => {
				return (
					<DisneyLayout>
						<SEO title={site.siteMetadata.title} />
						{children}
					</DisneyLayout>
				);
			}}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
