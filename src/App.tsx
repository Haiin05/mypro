import { BrowserRouter, Switch, Route } from "react-router-dom"
import { observer } from "mobx-react"
import { I_AuthService } from './service/auth_service'
import Main from "./components/main/main"
import Login from './components/login/login'
import styles from './app.module.css'

interface I_app {
	useStore: any
	authService: I_AuthService
}

const App = observer(({ useStore, authService }: I_app) => {
	return (
		<div className={ styles.app }>
			<BrowserRouter>
				<Switch>
					<Route exact path={ ['/', 'home'] }>
						<Main authService={ authService } />
					</Route>
					<Route path='/login'>
						<Login authService={ authService } />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
})

export default App
