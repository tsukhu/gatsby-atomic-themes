import React from 'react';

import { Layout, Image, SEO } from '@gatsby-themes/core';
import Link from '../components/link';
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
				This site has web sso enabled on the page link below using the @gatsby-themes/okta theme
			</Typography>
			<Typography variant="body1" component="p" gutterBottom>
				Use the demo user name password of <b>demo@email.com/Gatsbythemes123</b>
			</Typography>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<Typography variant="body1" component="p" gutterBottom>
				<Link to="/protected-page/">Go to the protected page</Link>
			</Typography>
		</Layout>
	);
};

export default IndexPage;
