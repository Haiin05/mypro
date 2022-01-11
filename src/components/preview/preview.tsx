import Card from '../card/card'
import { I_card } from '../main/mainPresenter'
import styles from './preview.module.css'

interface I_preview {
	cards: any
}

const Preview = ({ cards }: I_preview) => {

	return (
		<section className={styles.preview}>
			<ul className={styles.cards}>
				{Object.keys(cards).map((key) => <Card key={key} card={cards[key]} />
				)}
			</ul>
		</section>
	)
}

export default Preview