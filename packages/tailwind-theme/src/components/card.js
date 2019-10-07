import React from 'react';
import logo from '../images/gatsby-icon.png';

const Card = () => (
	<div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
		<div className="flex-shrink-0">
			<img src={logo} alt="logo" className="h-12 w-12" />
		</div>
		<div className="ml-6 pt-1">
			<h4 className="text-xl text-gray-900">Test Tailwind Card</h4>
			<p className="text-base text-red-600">You have a new message!</p>
		</div>
	</div>
);

export default Card;
