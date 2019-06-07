import React from 'react';
import { makeStyles,createStyles  } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => createStyles({
	root: {
		position: 'absolute',
		bottom: 0,
		backgroundColor: theme.palette.primary.main,
		color: 'white',
		width: '100vw'
	},
	link: {
		color: '#FAFA00'
	}
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="h6" align="center" color="inherit" gutterBottom>
				Shadow Footer
			</Typography>
			<Typography
				variant="subtitle1"
				align="center"
				color="inherit"
				component="p"
			>
				© {new Date().getFullYear()}, Built with
				{` `}
				<Link href="https://www.gatsbyjs.org" className={classes.link} >
        Gatsby
      </Link>
			</Typography>
		</div>
	);
};

export default Footer;
