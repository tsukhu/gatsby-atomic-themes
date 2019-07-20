// https://codepen.io/donovanh/pen/PpbvZB
import React from 'react';
import { Global, css } from '@emotion/core';

export const animatePopIn = css`
	animation: pop-in 0.6s cubic-bezier(0, 0.9, 0.3, 1.2) forwards;
	opacity: 0;
`;

export const headerButton = css`
	transform: translateZ(0.1px);
	position: relative;
	z-index: 10;

	animation-delay: 1.1s;
`;

export const headerSubtitle = ({ fonts }) => css`
	color: #fff;
	text-transform: uppercase;
	margin-bottom: 5rem;
	animation-delay: 1s;
	font-size: 1.75rem;
	text-shadow: 4px 4px black;
	font-family: ${fonts.body};
`;

export const headerTitle = (theme, color) => css`
	color: ${(color)?color:'#fff'};
	font-family: ${theme.fonts.heading};
	text-shadow: 4px 4px black;
	font-size: 3rem;
	animation-delay: 0.8s;
`;

export const chefCap = css`
	animation-delay: 0.6s;
`;

export const GlobalHeaderStyles = () => (
	<Global
		styles={css`
			header {
				align-items: center;

				display: flex;

				font-size: 18px;

				height: 100vh;

				justify-content: center;

				overflow: hidden;

				position: relative;

				text-align: center;

				transform-style: preserve-3d;

				perspective: 100px;
			}

			header:before {
				animation: fade-slide-down 2s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;

				background: linear-gradient(
						to bottom,
						rgba(0, 0, 0, 0),
						rgba(0, 0, 0, 0.8)
					),
					url(./header.jpg) no-repeat bottom;

				background-size: cover;

				content: '';

				opacity: 0;

				position: absolute;

				top: 0;

				right: 0;

				bottom: 0;

				left: 0;

				z-index: -1;
			}

			header:after {
				animation: rotate-up 0.5s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;

				background: #f9fcff;

				content: '';

				height: 40rem;

				left: -5%;

				position: absolute;

				right: -5%;

				top: 90%;

				transform-origin: 0 0;

				z-index: 0;
			}

			/* Animations */

			@keyframes fade-slide-down {
				0% {
					opacity: 0;

					transform: translateY(-4rem);
				}

				100% {
					opacity: 1;

					transform: none;
				}
			}

			@keyframes pop-in {
				0% {
					opacity: 0;

					transform: translateY(-4rem) scale(0.8);
				}

				100% {
					opacity: 1;

					transform: none;
				}
			}

			@keyframes rotate-up {
				100% {
					transform: rotateZ(-4deg);
				}
			}
		`}
	/>
);
