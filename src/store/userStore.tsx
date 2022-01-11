import { observable, makeAutoObservable } from 'mobx'

class UserStore {

	user_uid: string = ''

	constructor () {
		makeAutoObservable(this, {
			user_uid: observable,
		})
	}

	getUserUid = () => {
		return this.user_uid
	}

	setUserUid = (userUid: string) => {
		this.user_uid = userUid
	}


}

export default UserStore
export const userStore = new UserStore()

