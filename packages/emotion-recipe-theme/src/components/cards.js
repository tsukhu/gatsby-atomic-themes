import { css } from '@emotion/core';

export const card = css`
	margin: 30px auto;
	width: 300px;
	height: 300px;
	border-radius: 20px;
	box-shadow: 0 10px 10px -5px;
	//	box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.25);
	//,
	//	-5px -5px 30px 7px rgba(0, 0, 0, 0.22);
	cursor: pointer;
	transition: 0.4s;

	&:hover {
		transform: scale(0.9, 0.9);
		box-shadow: 0 20px 20px -5px;
		//	box-shadow: 5px 5px 0px 15px rgba(0, 0, 0, 0.25);//,
		//	-5px -5px 5px 5px rgba(0, 0, 0, 0.22);
	}
`;

export const cardImage = css`
	width: inherit;
	height: inherit;
	border-radius: 40px;
	zindex: 0;
	&:before {
		content: '';
		position: absolute;
		margin: 30px auto;
		margin-top: 0px;
		width: inherit;
		height: inherit;
		//		background-image: linear-gradient(120deg, #eaee44, #33d0ff);
		background-color: rgba(0, 0, 0, 0.4); // #333;
		border-radius: 20px;
		object-fit: cover;
		opacity: 0.7;
		zindex: 1;
	}

	& img {
		width: inherit;
		height: inherit;
		border-radius: 20px;
		object-fit: cover;
		z-index: 0;
	}
`;

export const cartTitle = css`
	 {
		text-align: center;
		border-radius: 0px 0px 40px 40px;
		font-weight: normal;
		text-shadow: 4px 4px 4px #000000;
		font-size: 20px;
		margin-top: -85px;
		margin-left: 5px;
		margin-right: 5px;
		position: relative;
		z-index: 2;
	}
`;

export const cardList = css`
	@media all and (max-width: 500px) {
		& {
			/* On small screens, we are no longer using row direction but column */
			flex-direction: column;
		}
	}
`;

export const titleBlack = css`
	color: black;
	z-index: 12;
`;

export const titleWhite = ({fonts}) => css`
	color: white;
	z-index: 12;
	font-family: ${fonts.body};
`;

export const cardsList = css`
	z-index: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;
