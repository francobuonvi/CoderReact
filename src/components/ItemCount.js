import {useState} from 'react'


function ItemCount({stock, initial, onAdd}){

    const [contador, setContador] = useState(initial)


    const sumar = () => {
        if(contador >= stock){
            console.log('no hay mas unidades disponibles');
        }else{
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if(contador > 0){
            setContador(contador - 1)
        }else{
            setContador(contador - 0);
        }
    }

    return (
        <div className='store_container'>
            <h3 className='store_title'>Producto 1</h3>
            <div className='counter_card'>
                <div className='counter'>
                    <button onClick={restar}>-</button>
                    <p className='store_p'> {contador}</p>
                    <button onClick={sumar}>+</button>
                </div>
                <button className='counter_button' onClick={() => onAdd(contador)}>Agregar al carrito</button>
            </div>
            
        </div>
    
    );
}

export default ItemCount

