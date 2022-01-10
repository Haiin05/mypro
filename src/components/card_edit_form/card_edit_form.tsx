import styles from './card_edit_form.module.css'

const CardEditForm = () => {
	return (
		<form className={ styles.cardForm }>
			<input className={ styles.input } type="text" placeholder='Name' />
			<input className={ styles.input } type="text" placeholder='Company' />
			<input className={ styles.input } type="text" placeholder='Title' />
			<input className={ styles.input } type="text" placeholder='Email' />
			<select className={ styles.select } name="theme" >
				<option value="light">light</option>
				<option value="dark">dark</option>
				<option value="colorful">colorful</option>
			</select>
			<textarea className={ styles.text } name="message" placeholder='Message'></textarea>
			<div className={ styles.image } >fileInput</div>
			<button className={ styles.btn } >Delete</button>
		</form>
	)
}

export default CardEditForm;