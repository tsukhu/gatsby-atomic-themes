import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { css } from '@emotion/core';
import {
	headerTitle,
	animatePopIn,
	headerSubtitle,
	HeaderImage
} from '@gatsby-themes/emotion-recipe-theme';
import chervonImage from '../../../images/chevron-arrow.png';

export const headerDownArrow = css`
	animation: pulse 2s 3s ease-out forwards;
	position: absolute;
	bottom: 4vh;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 10;

	& img {
		animation: fade-slide-up 1s 1s ease-out forwards;
		opacity: 0;
	}
`;

export const headerStyle = (image, background) => css`
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

	& :before {
		animation: fade-slide-down 2s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)),
			url(${image}) no-repeat bottom;

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

	&:after {
		animation: rotate-up 0.5s 0.5s cubic-bezier(0, 0.5, 0, 1) forwards;

		background: ${background};

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

	@keyframes fade-slide-up {
		0% {
			opacity: 0;
			transform: translateY(4rem);
		}
		100% {
			opacity: 1;
			transform: translateY(none);
		}
	}

	@keyframes pulse {
		0% {
			opacity: 1;
			transform: none;
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
`;

const HeaderSection = ({ theme }) => {
	return (
		<StaticQuery
			query={graphql`
				query {
					placeholderImage: file(relativePath: { eq: "header.jpg" }) {
						childImageSharp {
							fluid(jpegProgressive: true) {
								src
							}
						}
					}
				}
			`}
			render={(data) => (
				<React.Fragment>
					<header
						css={headerStyle(
							data.placeholderImage.childImageSharp.fluid.src,
							theme.colors.background
						)}
					>
						<section>
							<HeaderImage />
							<h1 css={[headerTitle(theme), animatePopIn]}>
								GATSBY<span style={{ color: '#FFD700' }}> RECIPEZE</span>
							</h1>
							<h3 css={[headerSubtitle(theme), animatePopIn]}>
								Let's talk gatsby recipes
							</h3>
						</section>
						<section css={headerDownArrow}>
							<img src={chervonImage} width="50" alt="chevron image"/>
						</section>
					</header>
				</React.Fragment>
			)}
		/>
	);
};

export default withTheme(HeaderSection);
