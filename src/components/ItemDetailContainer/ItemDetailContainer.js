import {useEffect,useState} from "react"
import {getProductByID} from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import Counter from "../Counter/Counter"
import {useParams} from "react-router-dom"
import "../ItemDetailContainer/ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const {itemID} = useParams()

    useEffect(() => {
        setLoading(true)
        getProductByID(itemID)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemID])

    if(loading){
        return <h1>Cargando, aguarde por favor</h1>
    }

    return(
        <div className="Producto">
            <ItemDetail {...product}/>
            <Counter {...product}/>
        </div>
    )
}

export default ItemDetailContainer