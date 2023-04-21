import { getDoc,doc,getDocs,collection,query,where } from 'firebase/firestore'
import { db } from '../firebaseConfig'

export const getProducts = (categoryID) => {

    return new Promise((resolve,reject) => {

    const prodReference = categoryID ? query(collection(db, 'products'),where('category','==',categoryID))
    :collection(db, 'products')
    getDocs(prodReference)
        .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            resolve(productsAdapted);
        })
        .catch(error => {
            reject(error)
        })
    })
}

export const getProductsByID = (itemID) => {
    
    return new Promise((resolve,reject) => {

    const prodReference = doc(db,'products',itemID)
    getDoc(prodReference)
        .then(snapshot => {
            const data = snapshot.data()
            const productAdapted = {id: snapshot.id, ...data}
            resolve(productAdapted)
        })
        .catch(() => {
            reject(true)
        })
    })
}