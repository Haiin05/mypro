import { I_Form } from '../main/main';
import styles from './card.module.css'

const Card = ({ card }: any) => {

	return (
		<li className={ styles.card }>
			<img src="/images/logo.png" alt="default logo" className={ styles.img } />
			<div className={ styles.info }>
				<h1 className={ styles.name }>{ card.name }</h1>
				<p className={ styles.company }>{ card.company }</p>
				<p className={ styles.title }>{ card.title }</p>
				<p className={ styles.email }>{ card.email }</p>
				<p className={ styles.message }>{ card.message }</p>
			</div>
		</li>
	)
}

export default Card;