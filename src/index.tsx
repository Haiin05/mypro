import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import useStore from './store'
import firebaseApp from './service/firebase'
import AuthService from './service/auth_service'
import '@fortawesome/fontawesome-free/js/all.js'
import './index.module.css'

const authService = new AuthService(firebaseApp)


ReactDOM.render(
	<React.StrictMode>
		<App useStore={useStore} authService={authService} />
	</React.StrictMode>,
	document.getElementById('root')
)
