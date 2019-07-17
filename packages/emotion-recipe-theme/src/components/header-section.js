import React from 'react';
import { withTheme } from 'emotion-theming';
import {Link} from './core-components';
import {
	GlobalHeaderStyles,
	headerTitle,
	animatePopIn,
	headerButton,
	headerSubtitle,
	rockyDashed
} from './header-styles';


const HeaderSection = ({theme}) => {
	return (
		<React.Fragment>
			<GlobalHeaderStyles />
			<header>
				<section>
					<img css={[rockyDashed, animatePopIn]} src="./chef.svg" />
					<h1 css={[headerTitle(theme), animatePopIn]}>Your awesome landing page</h1>
					<h3 css={[headerSubtitle(theme), animatePopIn]}>
						A useful start for your projects
					</h3>
					<p css={[headerButton, animatePopIn]}>
						<Link
							href="http://courses.cssanimation.rocks/p/level-up"
							primary
						>
							Get started today
						</Link>
					</p>
				</section>
			</header>
		</React.Fragment>
	);
};

export default withTheme(HeaderSection);
