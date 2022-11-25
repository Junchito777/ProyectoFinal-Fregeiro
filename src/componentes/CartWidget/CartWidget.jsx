import './cartwidget.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
    <div className='carrito'>
        <li className="nav-item">
            <Link to="/cart">
            <button><p>{getItemQuantity()}</p><FontAwesomeIcon icon={faCartShopping} /></button>
            </Link>
                   
        </li>        
    </div>
    );
}

export default CartWidget;
