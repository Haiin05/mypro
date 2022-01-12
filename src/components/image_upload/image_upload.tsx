import { useRef, useState } from 'react';
import { imageUploader } from '../../service/image_uploader';
import { I_file } from '../card_add_form/card_add_form';
import styles from './image_upload.module.css'

interface I_imageUpLoad {
	fileName: string | null
	onFileChange: (file: I_file) => void
}


const ImageUpload = ({ fileName, onFileChange }: I_imageUpLoad) => {
	const [loading, setLoading] = useState<boolean>(false)

	const inputRef = useRef<HTMLInputElement>(null)

	const onButtonClick = (e: any) => {
		e.preventDefault()
		inputRef?.current?.click()
	}

	const onChange = async (e: any) => {
		setLoading(true)
		const uploaded = await imageUploader.upload(e.currentTarget.files[0])
		setLoading(false)
		onFileChange({
			name: uploaded.original_filename,
			url: uploaded.url
		})
	}

	return (
		<div className={styles.container}>
			<input
				ref={inputRef}
				className={styles.input}
				type="file"
				accept="image/*"
				name="file"
				onChange={onChange}
			/>
			{!loading &&
				<button
					className={styles.button}
					onClick={onButtonClick}>
					{fileName || 'No file'}
				</button>}
			{loading && <div className={styles.loading}></div>}
		</div>
	)
}

export default ImageUpload;