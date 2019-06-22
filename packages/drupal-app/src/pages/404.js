import React from 'react';

import { SEO, Layout } from '@gatsby-themes/core';
import styled from '@emotion/styled';
const H4 = styled.h4(
	{
		fontSize: 24
	},
	(props) => ({ color: props.color })
);

const Para = styled.p(
	{
		fontSize: 20
	},
	(props) => ({ color: props.color })
);

const NotFoundPage = () => {
	return (
		<Layout>
			<SEO title="404: Not found" />
			<H4>NOT FOUND</H4>
			<Para>You just hit a route that doesn&#39;t exist... the sadness.</Para>
		</Layout>
	);
};

export default NotFoundPage;
