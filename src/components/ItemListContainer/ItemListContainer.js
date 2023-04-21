import {useEffect,useState} from 'react'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'
import Loader from '../Loader/Loader'
import fail from '../../assets/error.png'
import './ItemListContainer.css'
import { getProducts } from '../../service/firebase/firestore/products'

const ItemListContainer = ({ props }) => {

    const[products, setProducts] = useState([])
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(false)

    const{categoryID} = useParams()

    useEffect(() => {

        setLoading(true)

        getProducts(categoryID)
            .then(products => {
                setProducts(products)
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

    }, [categoryID])

    if(loading){
        return <Loader/>
    }

    if(error){
        return(
            <div className='MsgError'>
                <h1>Oops... tuvimos un problema, por favor recargue la pagina</h1>
                <img src={fail} alt="pelota-error"/>
            </div>
        )
    }

    if(products && products.length === 0){
        return <h1>No hay Productos</h1>
    }

    return (
        <div class="title">
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer