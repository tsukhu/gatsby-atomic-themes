# gatsby-atomic-themes

This project is about exploring the new feature from Gatsby called "Themes".

## Objective

The idea is the explore the possibility to break down the gatsby site creating into the smallest maintainable atomic component or components so that there is a clear separation of concerns from the project configuration to the actual application being built.

## Demo

The demo site is available [here](https://gatsby-atomic-themes.netlify.com/)

## Structure

1. Yarn workspaces used so that we are able to maintain the Gatsby infrastructure pieces as atomic themes all in one place. This also gives us the ability to see the changes like using the `demo-app` workspace without having to go through the entire process of publishing the npm module and then testing whether it works.
2. A base theme using gatsby cli called `core-theme` - This provides the base gatsby starter related configuration
3. A material-ui theme called `mui-theme` - This uses the latest `material-ui` version v4. This project will build on all the new features and flexibility added in this version. This is covered in detail in [their blog](https://material-ui.com/blog/material-ui-v4-is-out/). The Gatsby Starter components have been converted to material-ui ones and are part of this theme.

> With the advent of `Gatsby Themes` we now have the ability to have the core ui framework be seemlessly integrated with the Gatsby eco-system. While this project focusses on `material-ui` , this same concept can be extended to support other ui frameworks like emotion,styled components, aphrodite etc.

4. A demo app which uses these themes and focuses only on customization and the actual business application

5. The demo app does the following
   - Derived from two themes - `core-theme` and `mui-theme`
	 - The `core-theme` has been customized using the theme options to provide the app specific site metadata
	 - Overrides the `mui-theme` by setting design tokens for defining the palette. The current application has been derived from the GatsbyJS default starter and it would be appropriate if it used the same palette primary colors. For this all we need to do is override the `mui-theme` file called `custom-theme.js` and override the palette colors appropriately.

## Running the Application

```bash
yarn workspace demo-app develop
```

## More to come ..

	- More themes
	- Theme composition
	- Component Shadowing samples


