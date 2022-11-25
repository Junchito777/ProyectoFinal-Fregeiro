import './itemcount.css'
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1)
const agregarCarrito = ()=>{
   onAdd(contador)
}

const incrementar =()=> contador < stock && setContador (contador + 1)
const decrementar =()=> contador > 1 && setContador (contador - 1)
    return (
        <>
            <button onClick={decrementar}className='btn btn-light'>-</button>
            {contador}
            <button onClick={incrementar}className='btn btn-light'>+</button><br /><br />
            <button className='btn btn-dark' onClick={agregarCarrito}><FontAwesomeIcon icon={faCartShopping}/></button>
        </>
    );
}

export default ItemCount;
