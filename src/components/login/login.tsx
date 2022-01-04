import React from 'react'
import {I_AuthService} from '../../service/auth_service'

interface I_login {
	authService: I_AuthService
}

const login = ({authService}: I_login) => {

	const login = (e: any) => {
		e.preventDefault()
		console.log(e.currentTarget.textContent)
		authService.login(e.currentTarget.textContent)
			.then((res: any) => console.log(res.user.uid))


	}

	return (
		<section>
			<h1>Login</h1>
			<ul>
				<li onClick={login}>Google</li>
				<li onClick={login}>Github</li>
			</ul>
		</section>
	)
}

export default login