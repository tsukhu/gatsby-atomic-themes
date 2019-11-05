import React, { useState } from 'react';

import { Layout } from '@gatsby-themes/core';
import Carousel from 'nuka-carousel';
import landingPage from '../../data/landingPage';

const IndexPage = () => {
	const [nukaRef,SetNukaRef] = useState(null)
	const onImageLoad = () => {
    nukaRef.onResize();
	};

	const categorySection = () => {
		const categories = [];
		for (let i = 0; i < landingPage.categories.length; i += 1) {
			categories.push(
				<div className="w-1/5 px-4" key={`category-${i}`}>
					<a
						href="#"
						className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border-gray-700 shadow-lg shadow-custom"
					>
						<img
							src={landingPage.categories[i].image}
							alt={landingPage.categories[i].imageAlt}
						/>
					</a>
				</div>
			);
		}
		return categories;
	};

	const recommendationSection = () => {
		const recommendations = [];
		for (let i = 0; i < landingPage.recommendations.length; i += 1) {
			recommendations.push(
				<div className="shadow-xl mr-6" key={`recommendation-${i}`}>
					<a href="#">
						<img
							src={landingPage.recommendations[i].image}
							alt={landingPage.recommendations[i].imageAlt}
							className=""
						/>
					</a>
				</div>
			);
		}
		return recommendations;
	};

	const heroCarousel = () => {
		const slides = [];
		for (let i = 0; i < landingPage.heroCarousel.length; i += 1) {
			slides.push(
				<img
					src={landingPage.heroCarousel[i].image}
					alt={landingPage.heroCarousel[i].imageAlt}
					className="flex rounded"
					key={`slides-${i}`}
					onLoad={onImageLoad}
				/>
			);
		}
		return (
			<Carousel
				slidesToShow={1}
				dragging={true}
				cellAlign="center"
				ref={(ref) => {
					SetNukaRef(ref);
				}}
			>
				{slides}
			</Carousel>
		);
	};

	return (
		<Layout>
			<div className="my-8">
				<div className="mb-12 flex items-center">
					{heroCarousel()}

					{/* 					<img
						src={landingPage.hero.image}
						alt={landingPage.hero.imageAlt}
						className="rounded"
					/> */}
				</div>
				<div className="categories flex items-center mb-12 -mx-4">
					{categorySection()}
				</div>
				<div className="recommended px-6 mb-12">
					<h2 className="text-gray-500 mb-1">Recommended For You</h2>
					<div className="flex items-center">{recommendationSection()}</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
