import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

    const onAdd = (contador)=>{
        console.log(`${contador} unidades agregadas`);
       }
 
    return (

        <div className='detail_container'>           
            <h2>Detalle de producto</h2>
            <h3 className='cards_h3'>{producto.product}</h3>
            <div className="store_container2">
                <img src={producto.image} alt='imagen de producto' className='img_detail'/>
                <p className="price_detail" >$ {producto.price}</p>
                <p className='light_text description_detail'>{producto.description}</p>
            </div>

            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>

    )
}

export default ItemDetail
