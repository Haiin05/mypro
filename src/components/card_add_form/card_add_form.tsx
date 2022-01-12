import { useRef, useState } from 'react';
import ImageUpload from '../image_upload/image_upload';
import { I_card } from '../main/mainPresenter';
import styles from './card_add_form.module.css'

interface I_cardAddForm {
	onAdd: (card: I_card) => void
}

export interface I_file {
	name: string | null
	url: string | null
}

const CardAddForm = ({ onAdd }: I_cardAddForm) => {

	const [file, setFile] = useState<I_file>({ name: null, url: null })

	const formRef = useRef<HTMLFormElement>(null)
	const nameRef = useRef<HTMLInputElement>(null)
	const companyRef = useRef<HTMLInputElement>(null)
	const titleRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)
	const themeRef = useRef<HTMLSelectElement>(null)
	const messageRef = useRef<HTMLTextAreaElement>(null)

	const handleSubmit = (e: any) => {
		e.preventDefault()
		const card = {
			id: Date.now(),
			name: nameRef.current?.value || '',
			company: companyRef.current?.value || '',
			title: titleRef.current?.value || '',
			email: emailRef.current?.value || '',
			theme: themeRef.current?.value || '',
			message: messageRef.current?.value || '',
			fileName: file.name || '',
			fileURL: file.url || ''
		}
		onAdd(card)
		formRef.current?.reset()
		setFile({ name: null, url: null })
	}

	const onFileChange = (file: I_file) => {
		setFile(file)
	}

	return (
		<form ref={formRef} className={styles.cardForm}>
			<input ref={nameRef} className={styles.input} type="text" placeholder='Name' name='name' />
			<input ref={companyRef} className={styles.input} type="text" placeholder='Company' name='company' />
			<input ref={titleRef} className={styles.input} type="text" placeholder='Title' name='title' />
			<input ref={emailRef} className={styles.input} type="text" placeholder='Email' name='email' />
			<select ref={themeRef} className={styles.select} name="theme" >
				<option value="light">light</option>
				<option value="dark">dark</option>
				<option value="colorful">colorful</option>
			</select>
			<textarea ref={messageRef} className={styles.text} name="message" placeholder='Message' ></textarea>
			<div className={styles.image} >
				<ImageUpload fileName={file.name} onFileChange={onFileChange} />
			</div>
			<button className={styles.btn} onClick={handleSubmit}>Add</button>
		</form>
	)
}
export default CardAddForm;