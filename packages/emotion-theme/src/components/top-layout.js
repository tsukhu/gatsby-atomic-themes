import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import theme from '../theme'


const globalStyles = css`
	html,
	body {
		font-family: ${theme.fontFamily};
	}
`;
export default function TopLayout(props) {
	return (
		<React.Fragment>
			<Helmet>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
			</Helmet>
			<Global styles={globalStyles} />
			<ThemeProvider theme={theme}>
				{props.children}
			</ThemeProvider>
		</React.Fragment>
	)
}

TopLayout.propTypes = {
	children: PropTypes.node,
}
