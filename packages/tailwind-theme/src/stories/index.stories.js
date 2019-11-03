import React from 'react';

import { storiesOf } from '@storybook/react';
import '../styles/tailwind.css';

import Card from '../components/card';
import LayoutOne from '../components/layout-one';

storiesOf('Tailwind Theme', module)
	.add('Card',() => <Card />)
	.add('LayoutOne',() => <LayoutOne />);
