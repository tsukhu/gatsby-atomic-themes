import React from 'react';

import { Layout, Image, SEO } from '@gatsby-themes/core';
import { Card } from '@gatsby-themes/tailwind';
import Link from '../components/link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	heading: {
		fontWeight: 'bold',
		textAlign: 'center'
	},
	para: {
		textAlign: 'center'
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
			<Typography
				variant="body1"
				component="p"
				className={classes.para}
				gutterBottom
			>
				Welcome to your new Gatsby site.
			</Typography>
			<Typography
				variant="body1"
				component="p"
				className={classes.para}
				gutterBottom
			>
				Now go build something great.
			</Typography>
			<div
				style={{
					maxWidth: `300px`,
					marginBottom: `1.45rem`,
					display: 'block',
					marginLeft: 'auto',
					marginRight: 'auto'
				}}
			>
				<Image />
			</div>
			<Typography
				variant="body1"
				component="p"
				className={classes.para}
				gutterBottom
			>
				<Link to="/page-2/">Go to page 2</Link>
			</Typography>
			<Typography
				variant="body1"
				component="p"
				className={classes.para}
				gutterBottom
			>
				<Link to="/page-3/">About Emotion</Link>
			</Typography>
			<Card />
		</Layout>
	);
};

export default IndexPage;
