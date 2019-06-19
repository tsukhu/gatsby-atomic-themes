import { css } from '@emotion/core';

export const card = css`
	margin: 30px auto;
	width: 300px;
	height: 300px;
	border-radius: 40px;
	box-shadow: 5px 5px 30px 7px rgba(0, 0, 0, 0.25),
		-5px -5px 30px 7px rgba(0, 0, 0, 0.22);
	cursor: pointer;
	transition: 0.4s;

	&:hover {
		transform: scale(0.9, 0.9);
		box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
			-5px -5px 30px 15px rgba(0, 0, 0, 0.22);
	}
`;

export const cardImage = css`
	width: inherit;
	height: inherit;
	border-radius: 40px;

	& img {
		width: inherit;
		height: inherit;
		border-radius: 40px;
		object-fit: cover;
	}
`;

export const cartTitle = css`
	 {

			text-align: center;
			border-radius: 0px 0px 40px 40px;
			font-family: sans-serif;
			font-weight: bold;
			font-size: 20px;
			margin-top: -80px;
			height: 40px;
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
`;

export const titleWhite = css`
	color: white;
`;

export const cardsList = css`
	z-index: 0;
	width: 100%;
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;
