import React from 'react';

import { SEO } from 'core-theme';
import { Layout } from 'mui-theme';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold'
	}
});
const NotFoundPage = () => {
	const classes = useStyles();
	return (
		<Layout>
			<SEO title="404: Not found" />
			<Typography
				variant="h4"
				gutterBottom
				color="primary"
				className={classes.heading}
			>
				NOT FOUND
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				You just hit a route that doesn&#39;t exist... the sadness.
			</Typography>
		</Layout>
	);
};

export default NotFoundPage;
