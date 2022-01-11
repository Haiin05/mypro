import { BrowserRouter, Switch, Route } from "react-router-dom"
import { observer } from "mobx-react"
import Main from "./components/main/main"
import Login from './components/login/login'
import styles from './app.module.css'


const App = observer(() => {
	return (
		<div className={styles.app}>
			<BrowserRouter>
				<Switch>
					<Route exact path={['/', 'home']}>
						<Main />
					</Route>
					<Route path='/login'>
						<Login />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
})

export default App
