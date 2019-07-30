# Gatsby Okta Theme

The okta theme sets up the okta integration.

- The idea is to have the SEO, image processing, file source setup , PWA, core branding of the product in one place and versioned
- Sites can simply use the not worry about setting this piece properly and any changes to the core configuration can be done via the theme.
- All organization specific core plugins , icons can be configured here.

## How to use

- Add the dependency `@gatsby-themes/okta`
- Setup Okta for Web SSO and configure the application and users
	- Grant Types : Implicit (Access Token, ID implicit)
	- Login Redirect URI: localhost:8000/
- Configure the environment with the following:
	- OTKA_BASE_URL: Okta Base URL 
	- OTKA_LOGO: Okta company logo 
	- OTKA_CLIENT_ID: Okta Client ID

- The core theme will warn of the peer dependencies which also must be added to the gatsby site leveraging this theme.
- The dependencies include: 
	- "gatsby": "^2.13.21" 
	- "@okta/okta-signin-widget": "^3.0.6"
	- "dotenv": "^8.0.0"

```bash
yarn add `@gatsby-themes/okta`
```

- Configure the theme in the `gatsby-config.js` file.

```javascript
module.exports = {
	plugins: [
		{
			resolve: '@gatsby-themes/okta',
		},
	],
}
```

- This theme uses Context APIs to provide the state of the user authentication
- The steps to use the Context API via the `AuthContext` object - The ideal place to use this in a HOC component like Layout which is wrappers all the pages.
- In the render method setup the `AuthContext` consumer
- The `user` will be set to the `email.id` of the logged in user , otherwise it will be `false`
  `validateUser()`. Call this if the current page requires authentication, so that the session is validated

```javascript
import { AuthContext } from '@gatsby-themes/okta';
...
return (
	<AuthContext.Consumer>
		{({ user, validateUser }) => {
			// call if the current page requires authentication
			if (requiresAuth) {
				validateUser();
			}
			...
			// Define the div where the okta widget can be displayed
			// modify the styles to either show or hide the widget
			<div
				id="okta"
					style={oktaIDStyles(requiresAuth && user === false)}
					/>
		}
```

- In the header component we can then display the logged in user and the option to log out
- Use the logoutUser() context method to log out the user
- The user will be set to the email.id of the logged in user , otherwise it will be false

```javascript
	<AuthContext.Consumer>
			{({ user, logoutUser }) => {
				....
				{
					user &&
				(
					...
					<MenuItem onClick={() => logoutUser()}>Log out</MenuItem>)
			}
			}}
```

[okta-app with sample code](https://github.com/ERS-HCL/gatsby-atomic-themes/blob/master/packages/okta-app)
