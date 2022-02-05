import {useContexto} from './context.js'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Checkout from './Checkout';



const Cart = () => {

    const {cart, qty_cart, removeFromCart, cleanCart, totalPrice} = useContexto()
    console.log('cart', cart)
    console.log('qty_cart ' + qty_cart)

    


    return (
        <div>
            {cart.length > 0 ? (
                <>
                    <div className='cart_container'>
                    
                        {cart.map(item => (
                            <tr>
                            <td><p className='cards_h3'>{item.product}</p></td>
                            <td><p className='cards_h3'> ${item.price}</p></td>
                            <td><p className='cards_h3'>  {item.quantity}Un.</p></td>
                            <td><button onClick={() => {removeFromCart(item.id, item.price, item.quantity)}}>Quitar Producto</button></td>
                            </tr>
                        ))}
                    
                        <h2>Total: $ {totalPrice}</h2>

                        <button onClick={() => {cleanCart()}}>Vaciar carrito</button>
                        <Checkout />
                
                    </div>
                
                </>
            ) : 
            <>
                <p>Carrito Vacio</p>
                <NavLink to='/' className='detail_btn' >
                    Volver al Store
                </NavLink>
            
                </>}
        </div>
    )
}

export default Cart
