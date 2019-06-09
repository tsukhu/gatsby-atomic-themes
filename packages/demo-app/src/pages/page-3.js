import React from 'react';

import { SEO, Layout } from '@gatsby-themes/core';
import { About } from '@gatsby-themes/emotion';
import Link from '../components/link';
import Typography from '@material-ui/core/Typography';


const EmotionPage = () => {
	return (
		<Layout>
			<SEO title="Page with Emotion" />
			<About />
			<Typography variant="body1" component="p" gutterBottom>
				<Link to="/">Go back to the homepage</Link>
			</Typography>
		</Layout>
	);
};

export default EmotionPage;
