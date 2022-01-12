import ImageUpload from '../image_upload/image_upload';
import { I_card } from '../main/mainPresenter';
import styles from './card_edit_form.module.css'

interface I_cardEditForm {
	card: I_card
	onUpdate: (card: I_card) => void
	onDelete: (card: I_card) => void
}

const CardEditForm = ({ card, onUpdate, onDelete }: I_cardEditForm) => {

	const { name, company, title, email, theme, message, fileName } = card

	const handelChange = (e: any) => {
		e.preventDefault()
		const updatedCard = { ...card, [e.currentTarget.name]: e.currentTarget.value }
		onUpdate(updatedCard)
	}

	const handleDelete = (e: any) => {
		e.preventDefault()
		onDelete(card)
	}

	const onFileChange = (file: any) => {
		const updated = { ...card, fileName: file.name, fileURL: file.url }
		onUpdate(updated)
	}

	return (
		<form className={styles.cardForm}>
			<input className={styles.input} type="text" placeholder='Name' name='name' value={name} onChange={handelChange} />
			<input className={styles.input} type="text" placeholder='Company' name='company' value={company} onChange={handelChange} />
			<input className={styles.input} type="text" placeholder='Title' name='title' value={title} onChange={handelChange} />
			<input className={styles.input} type="text" placeholder='Email' name='email' value={email} onChange={handelChange} />
			<select className={styles.select} name="theme" value={theme} onChange={handelChange}>
				<option value="light">light</option>
				<option value="dark">dark</option>
				<option value="colorful">colorful</option>
			</select>
			<textarea className={styles.text} name="message" placeholder='Message' value={message} onChange={handelChange}></textarea>
			<div className={styles.image} >
				<ImageUpload onFileChange={onFileChange} fileName={fileName} />
			</div>
			<button className={styles.btn} onClick={handleDelete}>Delete</button>
		</form>
	)
}

export default CardEditForm;