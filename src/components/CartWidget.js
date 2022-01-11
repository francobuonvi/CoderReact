
import {useContexto} from './context.js'


function CartWidget(){

    const { qty_cart } = useContexto()

    return (
    <div className='cart_icon'>
        <span className="material-icons">shopping_cart</span>
        <p className='qty_cart'>{qty_cart}</p>
    </div>);

}

export default CartWidget