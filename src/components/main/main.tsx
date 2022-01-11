import { useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { observer } from 'mobx-react'
import { authService } from '../../service/auth_service'
import { cardRespository } from '../../service/card_repository';
import { I_card } from './mainPresenter';
import useStore from '../../store'
import Footer from '../footer/footer';
import Header from '../header/header';
import Maker from '../maker/maker';
import Preview from '../preview/preview';
import styles from './main.module.css'


const Main = observer(() => {

	const { userStore, mainPresenter } = useStore()

	const history = useHistory()

	const updateCard = (card: I_card) => {
		mainPresenter.update(card)
		cardRespository.saveData(userStore.getUserUid(), card)
	}

	const deleteCard = (card: I_card) => {
		mainPresenter.delete(card)
		cardRespository.removeData(userStore.getUserUid(), card)
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

	useEffect(() => {
		const userId = userStore.getUserUid()
		if (!userId) {
			return
		}
		const stopSync = cardRespository.syncCards(userId, (cards: any) => mainPresenter.setCardList(cards))
		return () => stopSync()
	})

	return (
		<section className={styles.main}>
			<Header authService={authService} />
			<div className={styles.container}>
				<Maker cards={mainPresenter.getCardList()} onUpdate={updateCard} onDelete={deleteCard} />
				<Preview cards={mainPresenter.getCardList()} />
			</div>
			<Footer />
		</section>
	)
})


export default Main