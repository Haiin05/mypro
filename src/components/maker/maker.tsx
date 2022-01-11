import CardAddForm from '../card_add_form/card_add_form'
import CardEditForm from '../card_edit_form/card_edit_form'
import { I_card } from '../main/mainPresenter'
import styles from './maker.module.css'

interface I_maker {
	cards: any
	onUpdate: (card: I_card) => void
	onAdd: (card: I_card) => void
	onDelete: (card: I_card) => void
}

const Maker = ({ cards, onUpdate, onDelete, onAdd }: I_maker) => (
	<section className={styles.maker}>
		<ul className={styles.forms}>
			{Object.keys(cards).map((key) => <CardEditForm key={key} card={cards[key]} onUpdate={onUpdate} onDelete={onDelete} />)}
			<CardAddForm onAdd={onAdd} />
		</ul>
	</section>
)

export default Maker