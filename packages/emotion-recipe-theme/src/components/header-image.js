import React from "react"
import {
	animatePopIn,
	chefCap
} from './header-styles';

const HeaderImage = () => (
  <img css={[chefCap, animatePopIn]} src="./chef.svg" alt="chefs hat"/>
)
export default HeaderImage
