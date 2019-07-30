import React from 'react';

import { SEO, Layout } from '@gatsby-themes/core';
import Link from '../components/link';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold'
	}
});
const SecondPage = () => {
	const classes = useStyles();
	return (
		<Layout requiresAuth>
			<SEO title="Page two" />
			<Typography
				variant="h4"
				gutterBottom
				color="primary"
				className={classes.heading}
			>
				Hi from the protected page
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				Welcome to protected page
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				<Link to="/">Go back to the homepage</Link>
			</Typography>
		</Layout>
	);
};

export default SecondPage;
