import React from 'react';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';



const ItemDetailProduct = ({vehiculos}) => {

    const {cart, isInCart, addItem} = useContext(CartContext)

    const onAdd = (count) =>{
        console.log(vehiculos)
        console.log(count)
       addItem(vehiculos,count)
    }


    return (
        <div>
           <div className="row g-0">
                <div className="col-md-4">
                <img src={vehiculos.picture} className='img-fluid rounded-start' />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className='card-title'>{vehiculos.nombre}</h4>
                        <p className='card-text'>Modelo: {vehiculos.motor}</p>
                        <p className='card-text'>Consumo: {vehiculos.consumo}</p>
                        <p className='card-text'>Plazas: {vehiculos.plazas}</p>
                        <p className='card-text'>Potencia:{vehiculos.potencia}</p>
                        <p className='card-text'>Maletero:{vehiculos.maletero}</p>
                        <p className='card-text'>Precio: {vehiculos.precio}</p>
                        <p className='card-text'>Stock: {vehiculos.stock}</p>
                        <ItemCount stock={vehiculos.stock} onAdd={onAdd}/><br /><br />
                        <button className='btn btn-secondary'><Link to="/cart">Ir al carrito</Link></button>
                    </div>
                </div>
           </div>

        </div>
    );
}

export default ItemDetailProduct;
