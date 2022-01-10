import { useEffect, useState } from 'react';
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

export interface I_Form {
	id: number,
	name: string,
	company: string,
	title: string,
	theme: string,
	message: string,
	email: string,
	image: string
}

const mockData = [
	{
		id: 1,
		name: 'haiin',
		company: 'haiin company',
		title: 'frontend developer',
		theme: 'light', message: 'lalal',
		email: 'h@gmail.com', image: ''
	},
	{
		id: 2,
		name: 'haiin2',
		company: 'lulu company',
		title: 'frontend developer',
		theme: 'dark', message: 'lalal',
		email: 'h1@gmail.com', image: ''
	},
]


const Main = ({ authService }: I_main) => {

	const { userStore } = useStore()

	const history = useHistory()

	const [cards, setCards] = useState([...mockData])

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
				<Preview cards={ cards } />
			</div>
			<Footer />
		</section>
	)
}


export default Main