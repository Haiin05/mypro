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
	cardList: any

	constructor (obj: any) {
		this.cardList = obj

		makeAutoObservable(this, {
			cardList: observable,
		})
	}

	getCardList(): any {
		return this.cardList
	}


	update = (card: I_card) => {
		const update = { ...this.cardList }
		console.log('update: ', update)
		update[card.id] = card
		console.log('card: ', card)
		return this.cardList = update
	}

	add = (card: I_card) => {
		console.log(card)
		let randomNum = Date.now()
		return this.cardList = { ...this.cardList, randomNum: card }
	}

	delete = (card: I_card) => {
		const update = [...this.cardList]
		delete update[card.id]
		return this.cardList = update
	}
}

export default MainPresenter
export const mainPresenter = new MainPresenter({
	'1': {
		id: 1,
		name: 'haiin',
		company: 'haiin company',
		title: 'frontend developer',
		theme: 'light',
		message: 'lalal',
		email: 'h@gmail.com',
		image: ''
	},
	'2': {
		id: 2,
		name: 'haiin2',
		company: 'lulu company',
		title: 'frontend developer',
		theme: 'dark',
		message: 'lalal',
		email: 'h1@gmail.com',
		image: ''
	},
}
)