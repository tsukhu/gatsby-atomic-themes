import styled from '@emotion/styled';

export const Heading = styled('h1')`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.fg};
	padding-bottom: 20px;
	border-bottom: 1px solid #ccc;
	text-shadow: 2px 2px black;
	font-size: 3rem;
	animation-delay: 0.8s;
	padding: 10px;
	margin: 5px;

	@media (max-width: 760px) {
		font-size: 2rem;
	}

	@media (max-width: 420px) {
		font-size: 1rem;
	}


`;

export const SubHeading = styled('h2')`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.fg};
	padding-bottom: 20px;
	border-bottom: 1px solid #ccc;
	text-shadow: 2px 2px black;
	font-family:  ${(props) => props.font};
	font-size: 2rem;
	animation-delay: 0.8s;
	padding: 15px;
	margin: 5px;
`;

export const Footer = styled('footer')`
	border-top: 1px solid #ccc;
	margin-top: 50px !important;
	text-align: center;
	font-weight: bold;
	padding-top: 20px;
	background-color: ${(props) => props.bg};
	color: ${(props) => props.fg};
	padding-bottom: 20px;
	border-bottom: 1px solid #ccc;
	text-shadow: 2px 2px black;
	font-family:  ${(props) => props.font? props.font: 'sans-serif'};
	font-size: 1.5rem;
	animation-delay: 0.8s;
	padding: 15px;
	margin: 5px;
`;

export const Container = styled.div((props) => ({
	display: 'flex',
	flexDirection: props.column && 'column',
	margin: props.margin || 10,
	padding: props.padding || 0
}));

export const Link = styled.a((props) => ({
	minWidth: '12rem',
	margin: '0 auto 20px',
	padding: props.primary ? 18 : 16,
	borderRadius: 5,
	textDecoration: 'none',
	border: props.primary ? 'none' : '3px solid currentColor',
	background: props.primary && 'linear-gradient(15deg,#ffef95,#fad240, #ffd300)',
	color: props.primary ? '#302f28' : '#ffd300',
	'&:hover': {
		opacity: '0.95',
		color: 'black',
		animationDelay: '1.5s'
	},
	'@media (min-width: 768px)': {
		margin: '0 20px 0 0',
		'&:last-child': {
			margin: 0
		}
	}
}));

export const Card = styled('div')`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	margin: 0 auto;
	padding: 50px;
	/* border-radius */
	-webkit-border-radius: 20px;
	-moz-border-radius: 20px;
	border-radius: 20px;
	/* box-shadow */
	-webkit-box-shadow: rgba(0, 0, 0, 0.8) 0px 0 5px;
	-moz-box-shadow: rgba(0, 0, 0, 0.8) 0 0 5px;
	box-shadow: rgba(0, 0, 0, 0.8) 0 0 5px;
`;

export const Avatar = styled.img`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 96px;
	width: 96px;
	height: 96px;
	margin: 0;
`;
