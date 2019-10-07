import React from 'react';

import { storiesOf } from '@storybook/react';
import '../styles/tailwind.css';

import Card from '../components/card';

storiesOf('Tailwind Theme', module)
	.add('Card',() => <Card />);
