import React from 'react';
import { withTheme } from 'emotion-theming';
import { GlobalHeaderStyles,headerTitle,animatePopIn,headerButton,headerSubtitle,rockyDashed } from './header-styles';

const HeaderSection = () => {
	return (
		<React.Fragment>
			<GlobalHeaderStyles />
			<header>
				<section>
					<img
						css={[rockyDashed,animatePopIn]}
						src="https://cssanimation.rocks/levelup/public/images/rocky-dashed.svg"
					/>
					<h1 css={[headerTitle,animatePopIn]}>Your awesome landing page</h1>
					<h3 css={{headerSubtitle,animatePopIn}}>
						A useful start for your projects
					</h3>
					<p css={[headerButton,animatePopIn]}>
						<a
							href="http://courses.cssanimation.rocks/p/level-up"
							className="button"
						>
							Get started today
						</a>
					</p>
				</section>
			</header>
		</React.Fragment>
	);
};

export default withTheme(HeaderSection);
