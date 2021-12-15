import React from 'react'
import Item from './Item'


//aqui iteracion de array

function ItemList({list}){
    
    return(
        <div>
            {list.map((item) => <Item key={item.id} product={item.product} price={item.price} description={item.description} />)}
        </div>
    )


};
export default ItemList        