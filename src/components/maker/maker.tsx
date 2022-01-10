import CardEditForm from '../card_edit_form/card_edit_form'
import styles from './maker.module.css'

const Maker = () => (
	<section className={ styles.maker }>
		<ul className={ styles.forms }>
			<CardEditForm />
		</ul>
	</section>
)

export default Maker