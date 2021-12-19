import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {

    const onAdd = (contador)=>{
        console.log(`${contador} unidades agregadas`);
       }
 
    return (

        <div className='detail_container'>           
            <h2>Detalle de producto</h2>
            <img src={producto.picture} alt='clase' className='img_detail'/>
            <h3 className='cards_h3'>{producto.product}</h3>
            <p>$ {producto.price}</p>
            <p className='light_text'>{producto.description}</p>

            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>

    )
}

export default ItemDetail
