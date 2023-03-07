import './ItemListContainer.css'

const ItemListContainer = ({ props }) => {

    return (
        <div class="title">
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
        </div>
    )
}

export default ItemListContainer