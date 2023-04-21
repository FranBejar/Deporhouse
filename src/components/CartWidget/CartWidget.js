import '../CartWidget/CartWidget.css'
import carrito from '../../assets/carrito.png'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div class="Logo" onClick={() => navigate('/cart')}>
            <button className='btnCarrito'>
                <img src={carrito} alt="logo-carrito"/>
                {totalQuantity}
            </button>
        </div>
    )
}

export default CartWidget