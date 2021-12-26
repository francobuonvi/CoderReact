import ItemCount from './ItemCount'
import { NavLink} from "react-router-dom"
import {useEffect, useState} from 'react';

const ItemDetail = ({producto}) => {

    /**/ 
    const [mostrar, setMostrar] = useState(true)

    const onAdd = (contador)=>{
        if(contador<=0){
            return setMostrar(true)
        }else{
            console.log(`${contador} unidades agregadas`);
            return setMostrar(false)
        }
       }

       useEffect(() =>{
        console.log("useEffect")
        },[mostrar])
 
       if(mostrar){
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
         /* */   
    }else{
        return (
            <div className='detail_container'>           
                <h2>Detalle de producto</h2>
                <h3 className='cards_h3'>{producto.product}</h3>
                <div className="store_container2">
                    <img src={producto.image} alt='imagen de producto' className='img_detail'/>
                    <p className="price_detail" >$ {producto.price}</p>
                    <p className='light_text description_detail'>{producto.description}</p>
                </div>
                        <div>
                            <NavLink to="/cart" className='detail_btn'>
                            Terminar mi compra
                            </NavLink>
                        </div>   
               
            </div>
        )
    }
}

export default ItemDetail
