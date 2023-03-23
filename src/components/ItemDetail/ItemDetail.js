const ItemDetail = ({name,image,price,description}) => {
    return(
        <div>
            <h2>{name}</h2>
            <img src={image} alt={'Producto'}/>
            <h3>${price}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ItemDetail