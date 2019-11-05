import React from 'react';
import SideBar from './sidebar';

const DisneyLayout = ({ children }) => (
	<div className="flex flex-wrap bg-gray-900 text-white min-h-screen">
		<div className="w-20 fixed min-h-screen flex justify-center items-center ">
			<SideBar />
		</div>
		<div className="w-full bg-gray-900 ml-16">
			<div className="container mx-auto">{children}</div>
		</div>
	</div>
);

export default DisneyLayout;
