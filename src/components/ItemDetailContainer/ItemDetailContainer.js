import {useEffect,useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import {useParams} from "react-router-dom"
import Loader from "../Loader/Loader"
import fail from '../../assets/error.png'
import "../ItemDetailContainer/ItemDetailContainer.css"
import { getProductsByID } from "../../service/firebase/firestore/products"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)
    const[error,setError] = useState(false)

    const {itemID} = useParams()

    useEffect(() => {

        setLoading(true)

        getProductsByID(itemID)
            .then(prodById => {
                setProduct(prodById)
            })
            .catch(error => {
                if(error){
                    setError(true)
                }
            })
            .finally(() => {
                setTimeout(() => {
                    setLoading(false)
                },1000)
            })
    }, [itemID])

    if(loading){
        return <Loader/>
    }

    if(error){
        return(
            <div className='MsgError'>
                <h1>Oops... tuvimos un problema al cargar el producto, por favor recargue la pagina</h1>
                <img src={fail} alt="pelota-error"/>
            </div>
        )
    }

    return(
        <div className="Producto">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer