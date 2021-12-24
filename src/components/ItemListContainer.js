
import React from 'react';
import {useEffect, useState} from 'react';
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
import {products} from './products.js'

function ItemListContainer(){

    let [list, setList] = useState ([])

    const {productCategory} = useParams()
    console.log(productCategory)

    useEffect(() =>{

        const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(products)
            },2000)
        })

        promesa.then((productos)=>{
            console.log('OK itemlistcontainer');
            console.log(productos);

            if(productCategory){
                setList(productos.filter(producto=> producto.productCategory === productCategory))
            }else{
                setList(productos);
            }

            
            
        })
        promesa.catch(()=>{
            console.log('Error')
        })        
    
    },[productCategory])

    return( 
        <>
            <ItemList list={list}/>
            
            
        </> 
    )
}
export default ItemListContainer