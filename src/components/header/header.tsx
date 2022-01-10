import { I_AuthService } from "../../service/auth_service"
import styles from './header.module.css'


interface I_header {
	authService: I_AuthService
}

const Header = ({ authService }: I_header) => {

	const handleLogout = () => {
		authService.logout()
	}

	return (
		<header className={ styles.header }>
			<div className={ styles.logo_container }>
				<img className={ styles.logo_image } src="/images/logo.png" alt="logo" />
				<span className={ styles.logo_title }>BCMaker</span>
			</div>
			< button className={ styles.logout } onClick={ handleLogout } > Logout</button >
		</header >
	)
}

export default Header