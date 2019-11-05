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
				renderBottomCenterControls={null}
				renderCenterLeftControls={({ previousSlide, currentSlide }) => (
					<div class="text-white">
						{currentSlide !== 0 && (
							<button onClick={previousSlide} class="opacity-50 hover:opacity-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="50"
									height="50"
									class="fill-current"
								>
									<path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/>
								</svg>
							</button>
						)}
					</div>
				)}
				renderCenterRightControls={({
					nextSlide,
					slideCount,
					currentSlide
				}) => (
					<div class="text-white">
						{currentSlide !== slideCount - 1 && (
							<button onClick={nextSlide} class="opacity-50 hover:opacity-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="50"
									height="50"
									class="fill-current"
								>
									<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
								</svg>
							</button>
						)}
					</div>
				)}
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
