import ItemCount from './ItemCount'


function ItemListContainer(props){

    const products = {producto: '1', stock: 10}


    const onAdd = (contador)=>{
    
     console.log(`${contador} unidades agregadas`);
        
    }

    return( 
        <>
            <h1>Bienvenido {props.greeting}</h1>

            <ItemCount stock={products.stock} initial={1} onAdd={onAdd}/>
        </> 
    )

}

export default ItemListContainer