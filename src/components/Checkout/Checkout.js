import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from '../../service/firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import { useNotification } from '../../notification/NotificationService'
import Loader from "../Loader/Loader"
import Orders from "../../service/firebase/firestore/orders"
import Swal from "sweetalert2"
import './Checkout.css'

const Checkout = () => {
    const [orderID, setOrderID] = useState('')
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)

    const { setNotification } = useNotification()

    const handleConfirm = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                comprador: userData,
                items: cart,
                total: total
            }

            const ids = cart.map(prod => prod.id)

            const productRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

            const productsAddedFromFirestore = await getDocs(productRef)

            const { docs } = productsAddedFromFirestore

            const batch = writeBatch(db)
            const outOfStock = []

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDB = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDB >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDB - prodQuantity })
                } else {
                    outOfStock.push({ id: doc, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)
                clearCart()
                setOrderID(orderAdded.id)

            } else {
                setNotification('error', 'Lo sentimos, seleccionaste un producto sin stock')
            }
        } catch (error) {
            console.log(error)
            setNotification('error', 'Tuvimos un error creando tu pedido, por favor intente nuevamente')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        let timeoutId;
    
        if (orderID) {
          timeoutId = setTimeout(() => {
            Swal.fire({
                icon: 'success',
                title: `Muchas gracias por su compra, su codigo de orden es: ${orderID}`
            })
          }, 1);
        }
    
        return () => clearTimeout(timeoutId);
      }, [orderID]);

    if (loading) {
        return (
            <div>
                <h1>Estamos generando su orden</h1>
                <Loader />
            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <Orders handleConfirm={handleConfirm} />
        </div>
    )
}

export default Checkout