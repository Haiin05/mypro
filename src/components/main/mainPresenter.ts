import { observable, makeAutoObservable } from 'mobx'

export interface I_card {
	id: number,
	name: string,
	company: string,
	title: string,
	theme: string,
	message: string,
	email: string,
	image: string
}


class MainPresenter {
	cardList: any = {}

	constructor () {
		makeAutoObservable(this, {
			cardList: observable,
		})
	}

	getCardList(): any {
		return this.cardList
	}

	setCardList(cards: any) {
		return this.cardList = cards
	}

	update = (card: I_card) => {
		const update = { ...this.cardList }
		update[card.id] = card
		this.cardList = update
	}

	delete = (card: I_card) => {
		const update = [...this.cardList]
		delete update[card.id]
		this.cardList = update
	}
}

export default MainPresenter
export const mainPresenter = new MainPresenter()