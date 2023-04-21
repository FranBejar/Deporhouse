import {useContext} from "react"
import {CartContext} from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./Cart.css"

const Cart = () => {

    const {cart} = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            <div>
            {
                cart.map(prod => {
                    const totalPrice = prod.price * prod.quantity;
                    console.log(cart)
                    return (
                        <div className="item" key={prod.id}>
                            <img src={prod.image} alt="" className="imagen"/>
                            <div className="info">
                                <div className="nombre">{prod.name}</div>
                                <div className="cantidad">Cantidad: {prod.quantity}</div>                                
                                <div className="total">Total: ${totalPrice}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <Link to={'/checkout'}><button className="Finalizar">Finalizar Compra</button></Link>
        </div>
    )
}

export default Cart