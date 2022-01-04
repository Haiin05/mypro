import Login from './components/login/login'
import {observer} from "mobx-react"
import {I_AuthService} from './service/auth_service'

interface I_app {
	useStore: any
	authService: I_AuthService
}

const App = observer(({useStore, authService}: I_app) => {
	return (
		<div className="App">
			<Login authService={authService} />
		</div>
	)
})

export default App
