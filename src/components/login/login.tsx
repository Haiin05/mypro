import { I_AuthService } from '../../service/auth_service'
import { useHistory } from "react-router-dom"
import styles from './login.module.css'
import useStore from '../../store'
import { useEffect } from 'react'

interface I_login {
	authService: I_AuthService
}

const Login = ({ authService }: I_login) => {

	const { userStore } = useStore()

	const history = useHistory()

	const login = (e: any) => {
		e.preventDefault()
		console.log(e.currentTarget.textContent)
		authService.login(e.currentTarget.textContent)
			.then((res: any) => {
				console.log(res.user.uid)
				userStore.setUserUid(res.user.uid)
				history.push('/')
			})
	}

	useEffect(() => {
		authService.onAuthChanged((user: any) => {
			if (user) {
				history.push('/')
			} else {

			}
		})
	})

	return (
		<section className={ styles.login }>
			<h1 className={ styles.title }>Login</h1>
			<ul className={ styles.ul }>
				<li className={ styles.li } onClick={ login }>
					<button className={ styles.btn }>
						<div className={ styles.icon }>
							<i className="fab fa-google"></i>
						</div>
						<div>Google</div>
					</button>
				</li>
				<li className={ styles.li } onClick={ login }>
					<button className={ styles.btn }>
						<div className={ styles.icon }>
							<i className="fab fa-github"></i>
						</div>
						<div>
							Github
						</div>
					</button>
				</li>
			</ul>
		</section>
	)
}

export default Login