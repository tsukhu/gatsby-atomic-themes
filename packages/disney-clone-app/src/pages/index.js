import React, { useState } from 'react';

import { Layout } from '@gatsby-themes/core';
import Carousel from 'nuka-carousel';
import CarouselWrapper from '../components/carousel-wrapper';
import landingPage from '../../data/landingPage';

const IndexPage = () => {
	const [nukaRef, SetNukaRef] = useState(null);
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
		return (
			<CarouselWrapper
				slidesToShow={5}
				dragging={true}
				cellSpacing={20}
				renderBottomCenterControls={null}
				data={landingPage.recommendations}
				name="recommendations"
			></CarouselWrapper>
		);
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
/* 				renderCenterLeftControls={({ previousSlide }) => (
					<div class="text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
							class="fill-current"
						>
							<path
								class="heroicon-ui"
								d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
							/>
						</svg>
					</div>
				)}
				renderCenterRightControls={({ nextSlide}) => (
					<div class="text-white">
						<button onClick={nextSlide}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24"
								class="fill-current"
							>
								<path
									class="heroicon-ui"
									d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z"
								/>
							</svg>
						</button>
					</div>
				)} */
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
				<div className="categories flex items-center mb-12">
					{categorySection()}
				</div>
				<div className="recommended px-6 mb-12">
					<h2 className="text-gray-500 mb-1">Recommended For You</h2>
					<div className="flex items-center">{recommendationSection()}</div>
				</div>
				<div className="recommended px-6 mb-12">
					<h2 className="text-gray-500 mb-1">Continue Watching</h2>
					<div className="flex items-center">{recommendationSection()}</div>
				</div>
				<div className="recommended px-6 mb-12">
					<h2 className="text-gray-500 mb-1">Disney Originals</h2>
					<div className="flex items-center">{recommendationSection()}</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
