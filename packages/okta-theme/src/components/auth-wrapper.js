import React from 'react'
import OktaSignIn from '@okta/okta-signin-widget'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import AuthContext from './auth-context'

class AuthWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: false,
			checkingSession: false,
		}
	}

	componentDidMount() {
		this.widget = new OktaSignIn({
			baseUrl: `${process.env.OTKA_BASE_URL}`,
			logo: `${process.env.OTKA_LOGO}`,
			redirectUri: window.location.origin,
			authParams: {
				issuer: 'default',
				responseType: ['id_token', 'token'],
				display: 'page',
			},
			features: {
				registration: false, // Enable self-service registration flow
				rememberMe: true, // Setting to false will remove the checkbox to save username
				selfServiceUnlock: false,
			},
			clientId: `${process.env.OTKA_CLIENT_ID}`,
			// Return an access token from the authorization server
			getAccessToken: true,
			// Return an ID token from the authorization server
			getIdToken: true,
		})

		this.validateUser();

		if (this.widget.hasTokensInUrl()) {
			// Store the ID and Access Token
			this.widget.authClient.token.parseFromUrl().then(
				res => {
					this.widget.authClient.tokenManager.add('id_token', res[0])
					this.widget.authClient.tokenManager.add('access_token', res[1])
				},
				err => {
					console.log(err)
				}
			)
		}
	}


	validateUser = () => {
		if (typeof this.widget === 'undefined') return;
		this.widget.authClient.session.exists().then(
			res => {
				if (res === false) {
					this.showSignIn()
				} else {
					this.widget.authClient.session
						.get()
						.then(res => {
							console.log(res);
							// logged in
							this.setState({
								user: typeof res.login !== 'undefined' ? res.login : false,
							})
							if (typeof res.login === 'undefined') {
								this.showSignIn()
							}
							return null
						})
						.catch(err => {
							// not logged in
							console.log(err)
						})
				}
			},
			() => {
				this.showSignIn()
			}
		);
	}

	showSignIn = () => {
		if (typeof this.widget === 'undefined') return;
	//	console.log('show SignIn');
		this.widget.remove();
		this.widget.renderEl(
			{
				el: '#okta',
			}
			/*       function success(res) {
        if (res.status === 'SUCCESS') {
          console.log('Do something with this sessionToken', res);
          //  window.location.reload();
        } else {
          // The user can be in another authentication state that requires further action.
          // For more information about these states, see:
          //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
        }
      },
      function error(err) {
        // This function is invoked with errors the widget cannot recover from:
        // Known errors: CONFIG_ERROR, UNSUPPORTED_BROWSER_ERROR
        console.log(err);
      } */
		);
	//	this.widget.show()
	}

	logoutUser = () => {
		this.widget.authClient
			.signOut()
			.then(() => {
				console.log('successfully logged out')
				this.widget.show()
				this.setState({ user: false })
				window.location.reload()
			})
			.fail(err => {
				console.error(err)
			})
	}

	render() {
		const { user } = this.state
		const { children } = this.props
		return (
			<AuthContext.Provider
				value={{
					user,
					logoutUser: this.logoutUser,
					validateUser: this.validateUser,
				}}
			>
				<React.Fragment>{children}</React.Fragment>
			</AuthContext.Provider>
		)
	}
}

export default AuthWrapper
