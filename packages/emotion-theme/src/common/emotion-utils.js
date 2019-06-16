// Getters
// there is no need to do
// `${props => getTypography(props))}`
//
// any *function* emotion comes across will be called
// The fun is that if the function is called within a **styled** components **context**[the js kind ]
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// we will supply the props as an argument.
// styled('a')`${getTypography}` => works because the function will be called in the styled components context
// css`${getTypography}` => will NOT work because it was called in the global context
// The real question is what happens if you do this?
// const type = css`${getTypography}`
// styled('a')`${type}`
// It will not work because getTypography has already been called and stringified
// styled('a')`${'css-12345'}`
export function getTypography(props) {
	return {
		fontSize: 18,
		color: props.color || 'PeachPuff'
	};
}

// In order to efficiently mix object and string based styles use arrays.
// Think of each item in the array as a chunk that is completely evaluated on its own before being merged.
export function getBorderFromProps(props) {
	if (props.border) {
		return [
			{
				display: 'block',
				color: props.color,
				border: '1px solid',
				borderColor: 'currentColor'
			},
			padding(8)
		];
	}
}

export function composeStyles(...getters) {
	return function(props) {
		return getters.reduce(function(style, fn) {
			return style.concat(fn(props));
		}, []);
	};
}

function expandUniformShorthandValues(prop, unit, ...values) {
	return `${prop}: ${values.join(`${unit} `)}${unit};`;
}

export const padding = expandUniformShorthandValues.bind(null, 'padding', 'px');

export const margin = expandUniformShorthandValues.bind(null, 'margin', 'px');

// This is not really readable but useful when building dynamic apis.
// For example
const utils = ['padding', 'margin'].reduce(
	(a, n) => ((a[n] = expandUniformShorthandValues.bind(null, n, 'px')), a),
	{}
);

console.log(
	'\nutils.padding\n',
	utils.padding(4, 5, 6, 7),
	'\nutils.margin\n',
	utils.margin(4, 5, 6, 7)
);
