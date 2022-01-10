import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Footer = (props: any) => {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props}>
			{'Copyright © '}
			<Link color="inherit" href="https://mui.com/">
				All rights reserved haiin
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

export default Footer