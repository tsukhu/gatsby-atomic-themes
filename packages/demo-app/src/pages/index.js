import React from 'react';

import { Image, SEO } from 'core-theme';
import { Link, Layout } from 'mui-theme';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold'
	}
});
const IndexPage = () => {
	const classes = useStyles();
	return (
		<Layout>
			<SEO title="Home" />
			<Typography
				variant="h4"
				gutterBottom
				color="primary"
				className={classes.heading}
			>
				Hi people
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				Welcome to your new Gatsby site.
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				Now go build something great.
			</Typography>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<Typography variant="body1" component="p" gutterBottom>
				<Link to="/page-2/">Go to page 2</Link>
			</Typography>
		</Layout>
	);
};

export default IndexPage;
