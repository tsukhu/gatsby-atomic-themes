import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { AuthContext } from '@gatsby-themes/okta';
import Link from '../../../components/link';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export default function Header({ siteTitle }) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	function handleMenu(event) {
		setAnchorEl(event.currentTarget);
	}

	function handleClose() {
		setAnchorEl(null);
	}

	return (
		<AuthContext.Consumer>
			{({ user, logoutUser }) => {
				return (
					<div className={classes.root}>
						<AppBar position="static" color="primary">
							<Toolbar>
								<Typography variant="h6" className={classes.title}>
									<Link
										to="/"
										className={classes.title}
										style={{
											color: `white`,
											textDecoration: `none`
										}}
									>
										{siteTitle}
									</Link>
								</Typography>
								{user && (
									<div>
										<Typography
											style={{
												color: `white`
											}}
										>
											{user}
											<IconButton
												aria-label="account of current user"
												aria-controls="menu-appbar"
												aria-haspopup="true"
												onClick={handleMenu}
												color="inherit"
											>
												<AccountCircle />
											</IconButton>
										</Typography>
										<Menu
											id="menu-appbar"
											anchorEl={anchorEl}
											anchorOrigin={{
												vertical: 'top',
												horizontal: 'right'
											}}
											keepMounted
											transformOrigin={{
												vertical: 'top',
												horizontal: 'right'
											}}
											open={open}
											onClose={handleClose}
										>
											<MenuItem onClick={() => logoutUser()}>Log out</MenuItem>
										</Menu>
									</div>
								)}
							</Toolbar>
						</AppBar>
					</div>
				);
			}}
		</AuthContext.Consumer>
	);
}
