import {useContexto} from './context.js'
import React from 'react'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {db} from '../firebase'
import {useState} from 'react'
import { NavLink} from "react-router-dom"

 
const Checkout = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [auth, setAuth] = useState("");

    const {cart, cleanCart, totalPrice} = useContexto()

    const finalizarCompra = () => {

        const ventasCollection = collection(db, 'ventas')


        addDoc(ventasCollection,{
            buyer : {
                name: name,
                phone: phone,
                email: email,
                order: '10'
            },
            items: cart,
            date: serverTimestamp(),
            total : totalPrice,
        })
        .then((resultado)=>{
            console.log(resultado)

        })
        cleanCart()

    }



    return (
        <>
            <div>
            <h3 class='cards_h3'>Ingrese datos para finalizar la compra</h3>
            <input id='name' type='text' placeholder='nombre' onChange={e=> setName(e.target.value)}/>
            <input type='tel' placeholder='telefono' onChange={e=> setPhone(e.target.value)}/>
            <input type='email' placeholder='email' onChange={e=> setEmail(e.target.value)}/>
            <input type='email' placeholder=' repita email' onChange={e=> setAuth(e.target.value)}/>

            {(name && phone && (email != '') && (email === auth)) ? 
             <NavLink to='/success' >
             <button onClick={() => {finalizarCompra()}}
             >Finalizar compra</button>
         </NavLink>
         :
         <p className='p_cart'>Complete los datos</p>
        }
       
           


        </div>
        
    </>

    )

     
   
};

export default Checkout;