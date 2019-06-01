import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		marginTop: 10
	},
})

const Footer = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant="body1" color="inherit">
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</Typography>
		</div>
	)
}

export default Footer
