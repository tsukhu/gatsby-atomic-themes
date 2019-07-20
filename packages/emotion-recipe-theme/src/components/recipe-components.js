import { css } from '@emotion/core';

export const receipe = css`
	background-color: #fff;
	padding: 30px;
	position: relative;
	box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
	z-index: 1;
`;

export const receipeAuthor = css`
	font-size: 1.1rem;
	letter-spacing: 0.5px;
	margin: 15px 0 0;
	text-transform: uppercase;
`;

export const receipeBody = css`
	display: block;
	float: left;
	width: 60%;
`;

export const receipeCircle = css`
	border: 1px solid #aaa;
	border-radius: 50%;
	display: inline-block;
	line-height: 22px;
	font-size: 12px;
	height: 25px;
	text-align: center;
	width: 25px;
`;

export const receipeContainer = ({ fonts }) => css`
	margin: 25px auto 0;
	position: relative;
	width: 100%;
	font-family: ${fonts.body};
`;

export const receipeDescription = css`
	display: inline-block;
	font-weight: 300;
	line-height: 22px;
	margin: 10px 0;
`;

export const receipeMedia = css`
	display: block;
	float: right;
	width: 40%;
`;

export const receipeNumber = css`
	margin-top: 15px;
`;

export const receipeRead = css`
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 700;
	letter-spacing: 6px;
	margin: 10px 0px 10px;
	margin-right: 10px;
	position: relative;
	text-align: left;
	text-transform: uppercase;
	padding: 10px;
	color: #fff;
	background-color: #2F2A2A;
`;

export const receipeShadow = css`
	background-color: #fff;
	box-shadow: 0 2px 25px 2px rgba(0, 0, 0, 1), 0 2px 50px 2px rgba(0, 0, 0, 1),
		0 0 100px 3px rgba(0, 0, 0, 0.25);
	height: 1px;
	margin: -1px auto 0;
	width: 80%;
	z-index: -1;
`;

export const receipeTag = css`
	float: right;
	margin: 5px 0 0;
`;

export const receipeTitle = css`
	font-size: 50px;
	font-weight: 300;
	line-height: 60px;
	margin: 10px 0;
`;

export const receipeSubtle = css`
	color: #262626;
`;

export const recipeCategory = css`
	color: #004080;
`;

export const receipeUclearfix = css`
	&:before,
	&:after {
		content: ' ';
		display: table;
	}

	&:after {
		clear: both;
	}
`;
