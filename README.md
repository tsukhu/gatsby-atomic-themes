# gatsby-atomic-themes

This project is about exploring the new feature from Gatsby called "Themes".

## Objective

The idea is the explore the possibility to break down the gatsby site creating into the smallest maintainable atomic component or components so that there is a clear separation of concerns from the project configuration to the actual application being built.

## Demo

The demo site is available [here](https://gatsby-atomic-themes.netlify.com/)

![Demo Site](./images/theme_one.PNG)

## Structure

1. Yarn workspaces used so that we are able to maintain the Gatsby infrastructure pieces as atomic themes all in one place. This also gives us the ability to see the changes like using the `demo-app` workspace without having to go through the entire process of publishing the npm module and then testing whether it works.
2. A base theme using gatsby cli called `@gatsby-themes/core` - This provides the base gatsby starter related configuration
3. A material-ui theme called `@gatsby-themes/mui` - This uses the latest `material-ui` version v4. This project will build on all the new features and flexibility added in this version. This is covered in detail in [their blog](https://material-ui.com/blog/material-ui-v4-is-out/). The Gatsby Starter components have been converted to material-ui ones and are part of this theme. The other great part of using this theme is , we no longer need to configure material-ui for each project we need it in. This simply use the `@gatsby-themes/mui` and maintain it in one place.
   - Components are enabled with living styleguide using Storybook
   - Using the @gatsby-themes/mui , all the material UI setup, ssr and browser configuration, theming is all configured for you and you can simply start building the application specific pieces.

> With the advent of `Gatsby Themes` we now have the ability to have the core ui framework be seemlessly integrated with the Gatsby eco-system. While this project focusses on `material-ui` , this same concept can be extended to support other ui frameworks like emotion,styled components, aphrodite etc.
4. An emotion theme called `@gatsby-themes/emotion`. We can now easily have a project where we can utilize material-ui and emotion together. See the `demo-app` project for details.

5. A Drupal theme called `@gatsby-themes/drupal`.

6. A demo app which uses these themes and focuses only on customization and the actual business application

7. The demo app does the following
   - Derived from multiple themes - `@gatsby-themes/core` , `@gatsby-themes/mui` , `@gatsby-themes/emotion` - The `@gatsby-themes/core` has been customized using the theme options to provide the app specific site metadata - Overrides the `@gatsby-themes/mui` by setting design tokens for defining the palette. The current application has been derived from the GatsbyJS default starter and it would be appropriate if it used the same palette primary colors. For this all we need to do is override the `@gatsby-themes/mui` file called `custom-theme.js` and override the palette colors appropriately. - Implements `Component Shadowing` - At present the `Footer` component of the `@gatsby-themes/mui` has been shadowed

8. WIP : Drupal App using multiple themes including core,drupal and emotion

## Running the Application

```bash
yarn workspace demo-app develop
```

## External Application Test

While the workspace is fine , but we need to make sure the themes work outside the workspace and can be used as part of an external gatsby site. For this a Gatsby application is created in the folder `site` is created outside the workspace. This depends on the `@gatsby-themes` packages that are published on npm. All we need to do is to add the dependencies for these packages as well as the peer dependencies which they depend on.

In order to run the external Gatsby site

```bash
cd site
yarn
yarn develop
```

## More to come ..

  - More themes
  - Theme composition
