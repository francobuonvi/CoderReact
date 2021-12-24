
import React from 'react'
import {Link, NavLink} from "react-router-dom"

//muestra la info de producto iterado en Itemlist

function Item({product, price, description, id, image }){
    

    /**/

    return(
        <div className='store_container'>    
            <h3 className='cards_h3'>{product}</h3>
            <div className='store_container2'>
                <img src={image} alt='imagen de producto' className='img_detail'/>
                <p className='price_detail'>$ {price}</p>
                <p className='light_text description_detail'>{description}</p>
            </div>
            <NavLink className='detail_btn' to={`/item/${id}`} >Ver detalle</NavLink>
         

        </div>
        

    )

}

export default Item