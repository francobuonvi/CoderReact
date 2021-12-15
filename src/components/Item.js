
import React from 'react'
/*import ItemCount from './ItemCount'*/
//muestra la info de producto iterado en Itemlist

function Item({product, price, description, }){
    

    /*const onAdd = (contador)=>{
    
     console.log(`${contador} unidades agregadas`);
        
    }*/

    return(
        <div className='store_container'>    
            <h3 className='cards_h3'>{product}</h3>
            <p>$ {price}</p>
            <p className='light_text'>{description}</p>
            
         {/*<ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>*/}

        </div>
        

    )

}

export default Item