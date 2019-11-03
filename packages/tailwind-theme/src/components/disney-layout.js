import React from 'react';
import SideBar from './sidebar';

const DisneyLayout = ({ children }) => (
	<div className="flex bg-gray-900 text-white w-screen min-h-screen">
		<SideBar />
		<div className="ml-24">
			<div className="container mx-auto">{children}</div>
		</div>
	</div>
);

export default DisneyLayout;
