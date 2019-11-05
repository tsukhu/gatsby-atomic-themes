import React, { useState } from 'react';
import Carousel from 'nuka-carousel';

const CarouselWrapper = ({ name, data, ...props }) => {
	const [nukaRef, SetNukaRef] = useState(null);

	const onImageLoad = () => {
		nukaRef.onResize();
	};

	const items = [];
	for (let i = 0; i < data.length; i += 1) {
		items.push(
			<div className="shadow-xl mr-6" key={`${name}-${i}`}>
				<a href="#">
					<img
						src={data[i].image}
						alt={data[i].imageAlt}
						className=""
						onLoad={onImageLoad}
					/>
				</a>
			</div>
		);
	}
	return (
		<Carousel
			{...props}
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
								<path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
							</svg>
						</button>
					)}
				</div>
			)}
			renderCenterRightControls={({ nextSlide, slideCount, currentSlide }) => (
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
								<path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
							</svg>
						</button>
					)}
				</div>
			)}
			ref={(ref) => {
				SetNukaRef(ref);
			}}
		>
			{items}
		</Carousel>
	);
};

export default CarouselWrapper;
