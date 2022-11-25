import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, emptyCart, totalPrice, removeItem} = useContext(CartContext)
    return (
        <>
        {
            cart.length === 0  ? 
            <div><p>Tu carrito está vacío</p> <Link to={"/"}><button className="btn btn-dark">Ir al inicio</button></Link></div> 
            : 
            <div> 
                {cart.map((vehiculos,indice)=><div className="card mb-3" key={indice} style={{maxwidth:'100px'}}>
                <div className="card mb-3">
                    <img src={vehiculos.picture} width="350px" />
                    <div className="card-body">
                    <h5 className="card-title">{vehiculos.nombre}</h5>
                    <p className="card-text">Cantidad: {vehiculos.cant}</p>
                    <p className="card-text">Precio: {vehiculos.precio}</p>
                    <p className="card-text">Subtotal: {vehiculos.cant * vehiculos.precio}</p>
                     </div>
                     <button className="btn btn-danger" onClick={()=> removeItem(vehiculos.id)}>Eliminar Vehiculo</button>
                     </div>
             </div>   
            )}<p>Total: {totalPrice()}</p>
            <button className="btn btn-danger" onClick={emptyCart}>Limpiar Carrito</button>
            <Link to="/checkout">
            <button className="btn btn-primary">Finalizar Compra</button>
            </Link>
            
            </div>          
}
        </>      
    );
}

export default Cart;
