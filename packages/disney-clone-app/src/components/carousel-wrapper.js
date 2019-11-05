import React, { useState } from 'react';
import Carousel from 'nuka-carousel';

const CarouselWrapper = ({ name,data, ...props }) => {
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
			ref={(ref) => {
				SetNukaRef(ref);
			}}
		>
			{items}
		</Carousel>
	);
};

export default CarouselWrapper;
