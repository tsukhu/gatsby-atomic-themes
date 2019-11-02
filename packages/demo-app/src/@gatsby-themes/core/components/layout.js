/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Header, Footer } from '@gatsby-themes/tailwind';

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'column',
		margin: `0 auto`,
		maxWidth: 960,
		padding: `0px 1.0875rem 1.45rem`,
		paddingTop: 10,
	},
})

const Layout = ({ children }) => {
	const classes = useStyles()
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
			render={data => (

				<div class="min-h-screen flex flex-col font-sans">
					<Header siteTitle={data.site.siteMetadata.title} />
					<div class="flex-grow p-8 text-2xl">
						
						<Container maxWidth="md" className={classes.root}>
							<main>{children}</main>
						</Container>
						
					</div>
					<Footer />
					
				</div>

			)}
		/>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
