import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"

export interface I_AuthService {
	auth: any
	login: (providerName: string) => any
}


class AuthService implements I_AuthService {

	auth: any = null

	constructor (firebaseApp: any) {
		this.auth = getAuth(firebaseApp)
	}

	login(providerName: string) {
		return signInWithPopup(this.auth, this.getProvider(providerName)!)
	}

	google() {
		return new GoogleAuthProvider()

	}

	github() {
		return new GithubAuthProvider()
	}

	getProvider(providerName: string) {
		switch (providerName) {
			case 'Google':
				return this.google()
			case 'Github':
				return this.github()
			default:
				throw new Error(`not supported provider: ${providerName} `)
		}
	}
}

export default AuthService