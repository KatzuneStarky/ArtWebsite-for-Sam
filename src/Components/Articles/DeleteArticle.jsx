import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import React from 'react'
import { toast } from 'react-toastify'
import { db, storage } from '../../Firebase/Config'

const DeleteArticle = ({id, imageUrl}) => {
    const handleDelete = async() =>{
        try {
            await deleteDoc(doc(db, "Articles", id))
            toast("Blog eliminado", {type: 'succes'})
            const storageRef = ref(storage, imageUrl)
            await deleteObject(storageRef)
        } catch (error) {
            toast("Error al borrar el blog", {type: 'error'})
        }
      }
    return (
    <div>
        <button className="btn btn-danger" onClick={handleDelete}>Borrar</button>
    </div>
  )
}

export default DeleteArticle