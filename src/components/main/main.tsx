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
// 첫 페이지 로드시 사용자가 입력되어있는지 확인: firebase 에 저장되어 있는 user 정보 확인해야함
// user 정보를 전역관리할 수 있는 class 만들어서 mobx 로 관리
// login 시 user 정보 저장, user 를 확인하는 