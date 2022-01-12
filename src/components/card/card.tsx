import styles from './card.module.css'

const DEFAULT_IMAGE = '/images/logo.png'

const getStyles = (theme: string) => {
	switch (theme) {
		case 'dark':
			return styles.dark
		case 'light':
			return styles.light
		case 'colorful':
			return styles.colorful
		default:
			throw new Error(`Unknown theme: ${theme}`)
	}
}

const Card = ({ card }: any) => {

	const url = card.fileURL || DEFAULT_IMAGE
	console.log(card.theme)
	return (
		<li className={`${styles.card} ${getStyles(card.theme)}`}>
			<img src={url} alt="logo" className={styles.img} />
			<div className={styles.info}>
				<h1 className={styles.name}>{card.name}</h1>
				<p className={styles.company}>{card.company}</p>
				<p className={styles.title}>{card.title}</p>
				<p className={styles.email}>{card.email}</p>
				<p className={styles.message}>{card.message}</p>
			</div>
		</li>
	)
}

export default Card;