import {useContext,useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext'
import {useNotification} from '../../notification/NotificationService'

const ItemDetail = ({id,name,price,image,stock,description}) => {
    const [quantity, setQuantity]=useState(0);
    const {addItem} = useContext(CartContext);
    const {setNotification} = useNotification();

    const handleOnAdd = (quantity) => {
        const productToAdd = {
            id,name,price,quantity,image
        }

        setQuantity(quantity);
        addItem(productToAdd);
        setNotification('success',`Se agrego al carrito ${quantity} ${name} con exito`);
    }

    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name}/>
            </picture>
            <section>
                <h3>
                    ${price}
                </h3>
                <p>
                    Descripcion: {description}
                </p>
            </section>
            <footer>
                {stock > 0 ? <ItemCount onAdd={handleOnAdd} stock={stock}/> : <div>Sin Stock</div>}
            </footer>
        </article>
    )
}

export default ItemDetail