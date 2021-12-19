
import React from 'react';
import {useEffect, useState} from 'react';
import ItemList from "./ItemList";

function ItemListContainer(){

    const products = [
        {id: "001", product:'Manual', price:2000, picture: 'https://sp.depositphotos.com/7942669/stock-illustration-express-yourself-teacher-showing-blackboard.html' ,description: 'El manual más completo y actualizado que podrás encontrar en el mercado', stock:10},
        {id: "002", product:'Clase Peso y Balance', price:2000, picture: 'https://sp.depositphotos.com/7942669/stock-illustration-express-yourself-teacher-showing-blackboard.html', description: 'Clases On demand para repasar o profundizar temas específicos', stock:5},
        {id: "003", product:'Clase Meteorologia', price:1000, picture: 'https://sp.depositphotos.com/7942669/stock-illustration-express-yourself-teacher-showing-blackboard.html', description: 'Clases On demand para repasar o profundizar temas específicos', stock:10},
        {id: "004", product:'Clase Navegacion', price:1000, picture: 'https://sp.depositphotos.com/7942669/stock-illustration-express-yourself-teacher-showing-blackboard.html', description: 'Clases On demand para repasar o profundizar temas específicos', stock:4},
    ]

    let [list, setList] = useState ([])

    useEffect(() =>{

        const promesa = new Promise ((res,rej)=>{
            setTimeout(()=>{
                res(products)
            },2000)
        })

        promesa.then((productos)=>{
            console.log('OK');
            console.log(productos);
            setList(productos);
            
        })
        promesa.catch(()=>{
            console.log('Error')
        })        
    
    },[])

    return( 
        <>
            <ItemList list={list}/>
        </> 
    )
}
export default ItemListContainer