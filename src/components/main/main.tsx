import { useEffect, useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import styles from './main.module.css'
import useStore from '../../store'
import { I_AuthService } from '../../service/auth_service'
import { useHistory } from "react-router-dom"
import { observer } from 'mobx-react'
import { I_card } from './mainPresenter';

interface I_main {
	authService: I_AuthService
}

const Main = observer(({ authService }: I_main) => {

	const { userStore, mainPresenter } = useStore()

	const history = useHistory()

	const updateCard = (card: I_card) => {
		mainPresenter.update(card)
	}

	const addCard = (card: I_card) => {
		mainPresenter.add(card)
	}

	const deleteCard = (card: I_card) => {
		mainPresenter.delete(card)
	}

	useEffect(() => {
		authService.onAuthChanged((user: any) => {
			if (user) {
				userStore.setUserUid(user.uid)
			} else {
				history.push('/login')
			}
		})
	})
	console.log('main', JSON.stringify(mainPresenter.getCardList()))

	return (
		<section className={styles.main}>
			<Header authService={authService} />
			<div className={styles.container}>
				<Maker cards={mainPresenter.getCardList()} onUpdate={updateCard} onAdd={addCard} onDelete={deleteCard} />
				<Preview cards={mainPresenter.getCardList()} />
			</div>
			<Footer />
		</section>
	)
})


export default Main