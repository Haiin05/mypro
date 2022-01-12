
const CLOUD_NAME = process.env.React_APP_CLOUDINARY_CLOUD_NAME

class ImageUploader {

	async upload(file: any) {
		const formData = new FormData()
		formData.append('file', file)
		formData.append('upload_preset', 'oelvkmrl')

		const result = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
			method: 'POST',
			body: formData
		})

		return await result.json()
	}
}

export default ImageUploader
export const imageUploader = new ImageUploader()