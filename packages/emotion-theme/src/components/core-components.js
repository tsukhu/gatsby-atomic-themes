import styled from '@emotion/styled';

export const Heading = styled('h1')`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.fg};
	padding-bottom: 20px;
	border-bottom: 1px solid #ccc;
`;

export const Footer = styled('footer')`
	border-top: 1px solid #ccc;
	color: ${(props) => props.textColor};
	margin-top: 50px !important;
	text-align: center;
	font-weight: bold;
	padding-top: 20px;
`;

export const Container = styled.div((props) => ({
	display: 'flex',
	flexDirection: props.column && 'column',
	margin: props.margin || 100,
	padding: props.padding || 0
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