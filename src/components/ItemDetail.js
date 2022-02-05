import ItemCount from './ItemCount'
import { NavLink} from "react-router-dom"
import { useState} from 'react';
import { useContexto } from './context';

const ItemDetail = ({producto}) => {

    
    // const { qty_cart, setQty_cart } = useContexto
    const {addToCart} = useContexto()
     //console.log("llegs??", addToCart)


    const [mostrar, setMostrar] = useState(true)

    const onAdd = (contador)=>{

        addToCart(producto, contador)
        

        if(contador<=0){
            setMostrar(true)
        }else{  
            return setMostrar(false) 
        } 
        
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
                {
                    mostrar ?
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
                    :
                <div>
                    <NavLink to='/cart' className='detail_btn' >
                    Terminar mi compra
                    </NavLink>
                </div>   
                }
            </div>
        )
         
    }

export default ItemDetail
