import Card from '../card/card'
import { I_Form } from '../main/main'
import styles from './preview.module.css'

interface I_preview {
	cards: Array<I_Form>
}

const Preview = ({ cards }: I_preview) => {

	return (
		<section className={ styles.preview }>
			<ul className={ styles.cards }>
				{ cards.map((card) => <Card key={ card.id } card={ card } />
				) }
			</ul>
		</section>
	)
}

export default Preview