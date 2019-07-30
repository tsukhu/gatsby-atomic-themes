/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { AuthContext } from '@gatsby-themes/okta';
import { Header, Footer } from '@gatsby-themes/mui';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		margin: `0 auto`,
		maxWidth: 960,
		padding: `0px 1.0875rem 1.45rem`,
		paddingTop: 10
	},
	children: {
		minHeight: 460
	}
});

const Layout = ({ children, requiresAuth }) => {
	const classes = useStyles();
	// Styles for the Okta widget
	// Display only if show is true
	// Else hide the widget
	const oktaIDStyles = (show) => {
		return show
			? {
					width: '100%',
					minHeight: '100vh',
					maxHeight: '100%',
					position: 'absolute',
					background: 'white',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					margin: '0 auto',
					zIndex: 10000
			  }
			: {
					display: 'none'
			  };
	};
	return (
		<AuthContext.Consumer>
			{({ user, validateUser }) => {
				if (requiresAuth) {
					validateUser();
				}
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
						render={(data) => (
							<>
								<Header siteTitle={data.site.siteMetadata.title} user={user} />
								<div
									id="okta"
									style={oktaIDStyles(requiresAuth && user === false)}
								/>
								<Container maxWidth="md" className={classes.root}>
									<main className={classes.children}>{children}</main>
								</Container>
								<footer>
									<Footer />
								</footer>
							</>
						)}
					/>
				);
			}}
		</AuthContext.Consumer>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
