/* eslint-disable import/prefer-default-export, react/prop-types */

import React from 'react';
import TopLayout from './src/components/top-layout';

export const wrapRootElement = ({ element },pluginOptions) => {
	console.log(pluginOptions);
	return pluginOptions.fullMode?<TopLayout>{element}</TopLayout>:element;
}

