import ItemDetail from "./ItemDetail"
import React from 'react';
import {useEffect, useState} from 'react';
import img from './images.jfif'

const ItemDetailContainer = () => {

        const productoInicial = 
        {id: "002", product:'Clase Peso y Balance', price:2000, picture: img, description: 'Clases On demand para repasar o profundizar temas específicos', stock:5}

        let [product, setProduct] = useState ({})

     useEffect(() =>{

            const getItem = () => {
                const promesa = new Promise ((res,rej)=>{
                    setTimeout(()=>{
                        res(productoInicial)
                    },2000)
                })

                promesa.then((productDetail)=>{
                    console.log('OK');
                    console.log(productDetail);
                    setProduct(productDetail);
                    
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
