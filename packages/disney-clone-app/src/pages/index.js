import React from 'react';

import { Layout } from '@gatsby-themes/core';

const IndexPage = () => {
	return (
		<Layout>
			<div className="my-8">
				<div className="mb-12 flex flex-shrink items-center">
					<img src="slide1.jpg" alt="mandolorian" className="rounded" />
				</div>
				<div className="categories flex items-center mb-12 -mx-4">
					<div className="w-1/5 px-4">
						<a
							href="#"
							className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border-gray-700 shadow-lg shadow-custom"
						>
							<img src="disney_logo.svg" alt="disney" />
						</a>
					</div>
					<div className="w-1/5 px-4">
						<a
							href="#"
							className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border-gray-700 shadow-lg shadow-custom"
						>
							<img src="pixar_logo.svg" alt="disney" />
						</a>
					</div>
					<div className="w-1/5 px-4">
						<a
							href="#"
							className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border-gray-700 shadow-lg shadow-custom"
						>
							<img src="marvel_logo.svg" alt="disney" />
						</a>
					</div>
					<div className="w-1/5 px-4">
						<a
							href="#"
							className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border-gray-700 shadow-lg shadow-custom"
						>
							<img src="star_wars_logo.svg" alt="disney" />
						</a>
					</div>
					<div className="w-1/5 px-4">
						<a
							href="#"
							className="bg-gray-800 h-32 flex justify-center items-center rounded-lg p-4 hover:bg-gray-900 border-gray-700 shadow-lg shadow-custom"
						>
							<img src="national_geographic_logo.svg" alt="disney" />
						</a>
					</div>
				</div>
				<div class="recommended px-6 mb-12">
					<h2 class="text-gray-500 mb-1">Recommended For You</h2>
					<div class="flex items-center">
						<div class="shadow-xl mr-6">
							<a href="#">
								<img src="star_wars_a_new_hope.jpg" alt="Starwars a new hope"
								class=""/>
							</a>
						</div>
						<div class="shadow-xl mr-6">
							<a href="#">
								<img src="star_wars_a_new_hope.jpg" alt="Starwars a new hope"
								class=""/>
							</a>
						</div>
						<div class="shadow-xl mr-6">
							<a href="#">
								<img src="star_wars_a_new_hope.jpg" alt="Starwars a new hope"
								class=""/>
							</a>
						</div>
						<div class="shadow-xl mr-6">
							<a href="#">
								<img src="star_wars_a_new_hope.jpg" alt="Starwars a new hope"
								class=""/>
							</a>
						</div>
						<div class="shadow-xl mr-6">
							<a href="#">
								<img src="star_wars_a_new_hope.jpg" alt="Starwars a new hope"
								class=""/>
							</a>
						</div>
						<div class="shadow-xl mr-6">
							<a href="#">
								<img src="star_wars_a_new_hope.jpg" alt="Starwars a new hope"
								class=""/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage;
