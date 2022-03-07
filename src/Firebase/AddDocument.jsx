import { doc, collection, setDoc, serverTimestamp } from 'firebase/firestore'
import { db } from './Config'

const addDocument = (collectionName, documentObj, id) => {
    const docRef = doc(collection(db, collectionName), id);
    return setDoc(docRef, {
        ...documentObj,
        timestamp: serverTimestamp()
    })
}

export default addDocument