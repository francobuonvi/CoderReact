import {collection, doc, getDoc} from 'firebase/firestore'
import ItemDetail from "./ItemDetail"
import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {products} from './products.js'
import {db} from '../firebase'


const ItemDetailContainer = () => {
    
    const {id} = useParams()
    console.log(`id: ${id}`)

    //const filterProduct = products.filter(detail=>detail.id === id)
    //const productoInicial = filterProduct.find(o => o.id === id)

    //console.log(productoInicial.id)

        let [product, setProduct] = useState ({})

     useEffect(() =>{

            const productosCollection = collection(db, 'items')
            const refDoc= doc(productosCollection, id)
             getDoc(refDoc)
             .then((resultado)=>{
                 if(id)
                    setProduct(resultado.data())
             })
             .catch((error)=>{
                console.log(error)
             })

        },[id])
        
    return (
        <div>
            <ItemDetail producto={product}/>
        </div>
    )
}

export default ItemDetailContainer
