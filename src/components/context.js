import { createContext, useContext, useState, useEffect } from "react";

const context = createContext()

export const {Provider}= context

export const useContexto = () => {
    return useContext(context)

}

export const CustomProvider = ({children})=> {

     const [qty_cart, setqty_cart] = useState(0)
     const [cart, setCart] = useState([])
     const [totalPrice, settotalPrice] = useState(0)

     const isInCart = (id) => {
        return cart.find(element => element.id === id);
    };
     
     const addToCart = (producto, contador) => {
        console.log('LLEGA A addToCart Context', producto);

        settotalPrice(totalPrice + (producto.price * contador));

        //Total unidades cart para cartwidget
        const updateQty = qty_cart + contador;
        setqty_cart(updateQty)

        if (isInCart(producto.id)) {
            console.log('pasa x true: producto ya en cart')
            //copia de cart para mapear y agregar cantidad al producto si ya se encuentra en el carrito.

            const newQty = [...cart];
            newQty.map((element) => {
              if (element.id === producto.id) {
                element.quantity += contador;
              }
            });

        } else {
            
            const cart_copy = [...cart];
            producto.quantity = contador;
            cart_copy.push(producto);
            setCart(cart_copy);
            console.log('pasa x false: producto nuevo en cart', contador, 'unidades')
        }
    
     }

     const removeFromCart = (id, price, quantity)=>{
        const cartCopy = [...cart,]
        const newCart = () => cartCopy.filter(element => element.id !== id);
        setCart(newCart);

        //Nuevo Total $ 
        const newTotal = totalPrice - (price * quantity);
        settotalPrice(newTotal)

        //Nuevo Qty Widget 
        console.log('quantity', quantity)
        const newQty = qty_cart - quantity;
        setqty_cart(newQty)
      };

     const cleanCart = () =>{ setCart([]); settotalPrice(0); setqty_cart(0)}
    

    
        
        

     const contextValue = {
         qty_cart,
         cart,
         totalPrice,
         addToCart,
         removeFromCart,
         cleanCart,
         isInCart,  
        
     }


     return (
         <Provider value={contextValue}>
            {children}
         </Provider>
     )
}
