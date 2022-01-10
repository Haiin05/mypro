import { useEffect } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import styles from './main.module.css'
import useStore from '../../store'
import { I_AuthService } from '../../service/auth_service'
import { useHistory } from "react-router-dom"

interface I_main {
	authService: I_AuthService
}

const Main = ({ authService }: I_main) => {

	const { userStore } = useStore()

	const history = useHistory()

	useEffect(() => {
		authService.onAuthChanged((user: any) => {
			if (user) {
				userStore.setUserUid(user.uid)
			} else {
				history.push('/login')
			}
		})
	})

	return (
		<section className={ styles.main }>
			<Header authService={ authService } />
			<div className={ styles.container }>
				<Maker />
				<Preview />
			</div>
			<Footer />
		</section>
	)
}


export default Main