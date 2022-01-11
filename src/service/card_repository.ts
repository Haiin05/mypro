import { getDatabase, ref, onValue, set, off, remove } from 'firebase/database'
import firebaseApp from './firebase'

class CardRepository {
	db: any

	constructor (firebaseApp: any) {
		this.db = getDatabase(firebaseApp)
	}

	syncCards = (userId: string, onUpdate: any) => {
		const countRef = ref(this.db, `/${userId}/cards`)
		onValue(countRef, (snapshot) => {
			const data = snapshot.val()
			data && onUpdate(data)
		})
		return () => off(countRef)
	}

	saveData = (userId: string, card: any) => {
		set(ref(this.db, `/${userId}/cards/${card.id}`), card)
	}

	removeData = (userId: string, card: any) => {
		remove(ref(this.db, `/${userId}/cards/${card.id}`))
	}

}

export default CardRepository
export const cardRespository = new CardRepository(firebaseApp)