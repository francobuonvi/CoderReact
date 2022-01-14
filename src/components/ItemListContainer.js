
import React from 'react';
import {useEffect, useState} from 'react';
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
import {products} from './products.js'
import {db} from '../firebase'
//import {collection, getDocs} from 'firebase/firestore'
import { collection, query, where, getDocs } from "firebase/firestore";




function ItemListContainer(){
    console.log(db)
    let [list, setList] = useState ([])

    const {productCategory} = useParams()
    //console.log(productCategory)

    useEffect(() =>{

        const productosCollection = collection(db, 'items')

        if(productCategory){

            const consulta = query(productosCollection, where('productCategory','==', productCategory))
            getDocs(consulta)
            .then((resultado)=>{
            console.log(resultado)
            const docs = resultado.docs
            //de resultado nos interesa docs que es un array con la representacion de los documentos
            const lista = docs.map((doc)=>{
                console.log(doc)
                const id= doc.id
                const data = doc.data()
                const producto = {
                    id : id,
                    ...data
                }

                return producto
            })
            console.log(lista)
            setList(lista)
            //docs.data()
            //console.log(docs.data())
            
        })
        .catch((error)=>{
            console.log(error)
        })
            

        }else{


            getDocs(productosCollection)
            .then((resultado)=>{
                console.log(resultado)
                const docs = resultado.docs
                //de resultado nos interesa docs que es un array con la representacion de los documentos
                const lista = docs.map((doc)=>{
                    console.log(doc)
                    const id= doc.id
                    const data = doc.data()
                    const producto = {
                        id : id,
                        ...data
                    }

                    return producto
                })
                console.log(lista)
                setList(lista)
                //docs.data()
                //console.log(docs.data())
                
            })
            .catch((error)=>{
                console.log(error)
            })

        }
        /*const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(products)
            },1000)
        })

        promesa.then((productos)=>{
            //console.log('OK itemlistcontainer');
            //console.log(productos);

            if(productCategory){
                setList(productos.filter(producto=> producto.productCategory === productCategory))
            }else{
                setList(productos);
            }

            
            
        })
        promesa.catch(()=>{
            console.log('Error')
        })        
    */
    },[productCategory])

    return( 
        <>
            <ItemList list={list}/>
            
            
        </> 
    )
}
export default ItemListContainer