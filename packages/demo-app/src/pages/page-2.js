import React from 'react';

import { SEO, Layout } from 'core-theme';
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
		<Layout>
			<SEO title="Page two" />
			<Typography
				variant="h4"
				gutterBottom
				color="primary"
				className={classes.heading}
			>
				Hi from the second page
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				Welcome to page 2
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				<Link to="/">Go back to the homepage</Link>
			</Typography>
		</Layout>
	);
};

export default SecondPage;
