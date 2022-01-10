
import {useContexto} from './context.js'



function CartWidget(){

    const { qty_cart } = useContexto()

    return (
    <>
        <span className="material-icons">shopping_cart</span>
        <p>{qty_cart}</p>
    </>);

}

export default CartWidget