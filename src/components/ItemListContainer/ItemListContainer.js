import {useEffect,useState} from 'react'
import {getProducts,getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = ({ props }) => {

    const[productsState, setProductsState] = useState([])
    const[loading,setLoading] = useState(true)

    const{categoryID} = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryID ? getProductsByCategory : getProducts

        asyncFunction(categoryID)
            .then(products => {
                setProductsState(products)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryID])

    if(loading){
        return <h1>Cargando, aguarde por favor</h1>
    }

    if(productsState && productsState.length === 0){
        return <h1>No hay Productos</h1>
    }

    return (
        <div class="title">
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <ItemList products={productsState}/>
        </div>
    )
}

export default ItemListContainer