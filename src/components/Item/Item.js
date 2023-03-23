import './Item.css'
import {Link} from "react-router-dom"

const Item = ({id,image,name,price,category})=>{
    return(
        <div className="Item">
            <h2>{name}</h2>
            <img src={image} alt={'Producto'}/>
            <h3>${price}</h3>
            <h4>{category}</h4>
            <Link to={`/item/${id}`}><button>Detalle</button></Link>
        </div>
    )
}

export default Item