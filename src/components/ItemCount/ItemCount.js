import Button from '../Button/Button'
import { useState } from 'react'
import Swal from 'sweetalert2'

const ItemCount = ({stock, initial = 1, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }else{
            Swal.fire({
                icon: 'error',
                title:'No hay Stock suficiente para la cantidad solicitada'
            })
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }else{
            Swal.fire({
                icon: 'error',
                title: 'La cantidad minima es 1'
            })
        }
    }

    const reset = () => {
        setQuantity(1)
    }

    return(
        <div>
            <div>
                <p>{quantity}</p>
                <Button label="-" onClick={decrement}/>
                <Button label="Reset" onClick={reset}/>
                <Button label="+" onClick={increment}/>
            </div>
            <div>
                <Button label="Agregar al Carrito" onClick={() => {
                    setQuantity(initial)
                    onAdd(quantity)
                }}/>
            </div>
        </div>
    )

}

export default ItemCount