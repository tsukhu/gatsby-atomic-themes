import React from 'react';

import { Layout, Image, SEO } from '@gatsby-themes/core';

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<p>Hi from Drupal</p>
			<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
		</Layout>
	);
};

export default IndexPage;
