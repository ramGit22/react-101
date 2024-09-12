import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const FileUploadForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const [filePreview, setFilePreview] = useState(null)

  const watchFile = watch('file')

  useEffect(() => {
    if (watchFile) {
      const selectedFile = URL.createObjectURL(watchFile[0])
      setFilePreview(selectedFile)
    }
  }, [watchFile])

  const onSubmit = (data) => {
    console.log('data', data)
    console.log('File Data:', data.file[0])
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="file">Upload a file:</label>
        <input
          type="file"
          {...register('file', {
            required: 'Please upload a file.',
            validate: {
              checkFileType: (files) =>
                files[0]?.type.includes('image') ||
                'Only image files are allowed.',
              checkFileSize: (files) =>
                files[0]?.size < 2000000 ||
                'File size should be less than 2MB.',
            },
          })}
        />
        {errors.file && <p>{errors.file.message}</p>}
      </div>

      {filePreview && (
        <img
          src={filePreview}
          alt="File preview"
          style={{ width: '100px', height: '100px', marginTop: '10px' }}
        />
      )}

      <button type="submit">Submit</button>
    </form>
  )
}

export default FileUploadForm
