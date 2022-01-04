import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import useStore from './store'
import firebaseApp from './service/firebase'
import AuthService from './service/auth_service'

const authService = new AuthService(firebaseApp)


ReactDOM.render(
	<React.StrictMode>
		<App useStore={useStore} authService={authService} />
	</React.StrictMode>,
	document.getElementById('root')
)
