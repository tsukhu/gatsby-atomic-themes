import 'typeface-pacifico';
import 'typeface-oswald';
import { bulma } from '@theme-ui/presets';
export default {
	...bulma,
	colors: {
		...bulma.colors,
		white: '#fff',
		background: '#f9fcff',
		primary: 'black'
	},
	fonts: {
    body: 'Oswald, system-ui, sans-serif',
    heading: 'Pacifico, system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
  },
};
