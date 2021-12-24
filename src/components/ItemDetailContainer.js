import ItemDetail from "./ItemDetail"
import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import {products} from './products.js'

const ItemDetailContainer = () => {
    
    const {id} = useParams()
    console.log(`id: ${id}`)

    const filterProduct = products.filter(detail=>detail.id === id)
    const productoInicial = filterProduct.find(o => o.id === id)

    console.log(productoInicial.id)

        let [product, setProduct] = useState ({})

     useEffect(() =>{

            const getItem = () => {
                const promesa = new Promise ((res,rej)=>{
                    setTimeout(()=>{
                        res(productoInicial)
                    },2000)
                })

                promesa.then((productDetail)=>{
                    console.log('OK detalle');

                    if(id){
                        setProduct(productDetail)
                    }
                    
                })
                promesa.catch(()=>{
                    console.log('Error')
                })     
            }   
            getItem();
        },[])
        
    return (
        <div>
            <ItemDetail producto={product}/>
        </div>
    )
}

export default ItemDetailContainer
