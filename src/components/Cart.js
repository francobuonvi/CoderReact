import {useContexto} from './context.js'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import ItemList from './ItemList.js'
import { getDefaultNormalizer } from '@testing-library/react'
import {db} from '../firebase'



const Cart = () => {

    const {cart, qty_cart, removeFromCart, cleanCart, totalPrice} = useContexto()
    console.log('cart', cart)
    console.log('qty_cart ' + qty_cart)

    const finalizarCompra = () => {
        const ventasCollection = collection(db, 'ventas')
        addDoc(ventasCollection,{
            buyer : {
                name: 'Franco',
                lastName: 'Buonvicino',
                email: 'info@gmail.com',
                order: '10'
            },
            items: cart,
            date: serverTimestamp(),
            total: 100
        })
        .then((resultado)=>{
            console.log(resultado)
        })
        cleanCart()
    }


    return (
        <div>
            {cart.length > 0 ? (
                <>
                    <div className='store_container'>
                    
                        {cart.map(item => (
                            <tr>
                            <td><p className='cards_h3'>{item.product}</p></td>
                            <td><p className='cards_h3'>${item.price}</p></td>
                            <td><p className='cards_h3'>{item.quantity} Un.</p></td>
                            <td><button onClick={() => {removeFromCart(item.id, item.price, item.quantity)}}>Quitar Producto</button></td>
                            </tr>
                        ))}
                    
                        <h3>Total: $ {totalPrice}</h3>

                        <button onClick={() => {cleanCart()}}>Vaciar carrito</button>
                        <button onClick={() => {finalizarCompra()}}>Finalizar compra</button>
                
                    </div>
                
                </>
            ) : 
            <>
                <p>Agregue productos</p>
                <NavLink to='/' className='detail_btn' >
                    Volver al Store
                </NavLink>
                </>}
        </div>
    )
}

export default Cart
