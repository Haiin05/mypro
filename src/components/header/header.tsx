import { I_AuthService } from "../../service/auth_service"


interface I_header {
	authService: I_AuthService
}

const Header = ({ authService }: I_header) => {

	const handleLogout = () => {
		authService.logout()
	}

	return (
		<section> header
			< button onClick={ handleLogout } > Logout</button >
		</section >
	)
}

export default Header