import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '../../components/link';

const useStyles = makeStyles({
	root: {
		flexGrow: 1,
	},
})

const Header = ({ siteTitle }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static" color="primary">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						<Link
							to="/"
							style={{
								color: `white`,
								textDecoration: `none`,
							}}
						>
							{siteTitle}
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
