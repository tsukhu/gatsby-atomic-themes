import React from 'react';

import { Layout } from '@gatsby-themes/core';

const IndexPage = () => {
	return (
		<Layout>
			<div className="my-8">
				<div className="mb-12">
					<img src="slide1.jpg" alt="mandolorian" className="rounded" />
				</div>
				<div className="categories flex items-center mb-12 -mx-4">
					<div className="w-1/5 px-4">
						<a href="#" className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border-gray-700 shadow-lg shadow-custom">

							<img src="disney_logo.svg" alt="disney"/>
						</a>
					</div>
				</div>
				<p className="mb-32">This is the main text area</p>
			</div>
		</Layout>
	);
};

export default IndexPage;
