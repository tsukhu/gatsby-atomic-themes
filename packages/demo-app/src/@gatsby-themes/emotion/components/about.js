import React from 'react';
import styled from '@emotion/styled';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { palette, spacing, typography } from '@material-ui/system';
import { useTheme } from '@material-ui/styles';
import { css } from '@emotion/core';

const useStyles = makeStyles({
	root: {
		margin: '3rem auto',
		maxWidth: 600,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const UserWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-top: 0;
	margin-right: auto;
	margin-bottom: 12px;
	margin-left: auto;
	&:last-child {
		margin-bottom: 0;
	}
`;

const Avatar = styled.img`
	flex-grow: 0;
	flex-shrink: 0;
	flex-basis: 96px;
	border-radius: 50%;
	width: 96px;
	height: 96px;
	margin: 0;
`;

const Description = styled.div`
	flex: 1;
	margin-left: 18px;
	padding: 12px;
`;

const Username = styled.h2`
	${palette};
	${typography};
	${spacing};
	margin: 0 0 12px 0;
	border-radius: 10px;
`;

const Excerpt = styled.p`
	${palette};
	${typography};
	${spacing};
	margin: 0;
`;
// Using css prop provides a concise and flexible API to style the components. //
const underline = (color) => css`
	text-decoration: underline;
	color: ${color};
`;

const User = (props) => {
	const theme = useTheme();
	return (
		<UserWrapper>
			<Avatar src={props.avatar} alt="" />
			<Description>
				<Username color="white" bgcolor={theme.palette.primary.main} fontSize="10" p={1}>
					{props.username}
				</Username>
				<Excerpt p={1}>{props.excerpt}</Excerpt>
			</Description>
		</UserWrapper>
	);
};

const About = ({ siteTitle }) => {
	const classes = useStyles();
	const theme = useTheme();
	return (
		<Container className={classes.root}>
			<h1 css={underline(theme.palette.primary.main)} >
				About Emotion (Shadow Component)
			</h1>
			<p>Emotion is uber cool</p>
			<User
				username="Jane Doe"
				avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
				excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>
			<User
				username="Bob Smith"
				avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
				excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
			/>
		</Container>
	);
};

export default About;
