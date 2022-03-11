import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useState } from 'react'
import { db, storage } from '../../Firebase/Config'
import { toast } from 'react-toastify'

const AddArticle = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        image: "",
        createdAt: Timestamp.now().toDate()
    })

    const [progress, setProgress] = useState(0)

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) =>{
        setFormData({...formData, image: e.target.files[0] })
    }

    const handlePublish = () => {
        if(!formData.title || !formData.description || !formData.image ){
            alert('favor de llenar todos los campos')
            return;
        }
        const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`)
        const uploadImage = uploadBytesResumable(storageRef, formData.image)

        uploadImage.on("state_changed", (snapshot) => {
            const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            setProgress(progressPercent)
        },
        (err) => {
            console.log(err)
        },
        () => {
            setFormData({
                title: "",
                description: "",
                image: ""
            })
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                const articleRef = collection(db, "Articles")
                addDoc(articleRef, {
                    title: formData.title,
                    description: formData.description,
                    imageUrl: url,
                    createdAt: Timestamp.now().toDate()
                }).then(() => {
                    toast("Entrada de blog subida satisfactoriamente", {type: "succes"})
                    setProgress(0)
                }).catch(err => {
                    toast("Error al subir el blog", {type: "error"})
                })
            })
        })
    }
  return (
    <>
        <div>
            <div className="border p-3 mt-3 bg-success" style={{justifyContent: 'center', alignItems: 'center', width: 500, margin: '0 auto', color: 'white'}}>
                <h2>Crear articulo nuevo</h2>
                <label htmlFor="">Titulo</label>
                <input type="text" name='title' className='form-control' value={formData.title} onChange={(e) => handleChange(e)} />

                <label htmlFor="">Descripcion</label>
                <textarea name="description" className='form-control' value={formData.description} onChange={(e) => handleChange(e)}></textarea>

                <label htmlFor="">Imagen</label>
                <input type="file" name='image' accept='image/*' className='form-control' onChange={(e) => handleImageChange(e)} />

                {progress === 0 ? null : (
                    <div className="profress">
                        <div className="progress-bar progress-bar-striped mt-2" style={{width: `${progress}%`}}>
                            {`Subiendo imagen: ${progress}%`}
                        </div>
                    </div>
                )}        
                <button className='form-control btn-primary mt-2' onClick={handlePublish}>Publicar</button>
            </div>
        </div>
    </>
  )
}

export default AddArticle