import {createContext,useState} from "react"
import Swal from "sweetalert2"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart(prev => [...prev,productToAdd])
        }else{
            Swal.fire({
                icon: 'error',
                title: 'El producto ya esta en el carrito'
            })
        }
    }

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach(prod => {
            totalQuantity+=prod.quantity;
        })
        return totalQuantity
    }

    const totalQuantity = getTotalQuantity();

    const getTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.quantity * prod.price
        })
        return total
    }

    const total = getTotal()

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{cart,addItem,removeItem,totalQuantity,total, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}