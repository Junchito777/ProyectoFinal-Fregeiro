import { Link } from 'react-router-dom';
const Item = ({vehiculos}) => {
    return (
            <div className="vehiculosd vehiculosdAutos" >
                <div>                
                    <img className="vehiculosd-img-top" src={vehiculos.picture} alt="vehiculosd image cap"/>
                <div className="vehiculosd-body">
                    <h5 className="vehiculosd-title">{vehiculos.nombre}</h5>
                    <p className="vehiculosd-text">Modelo: {vehiculos.motor}</p>
                    <p className="vehiculosd-text">Consumo: {vehiculos.consumo}</p>
                    <p className="vehiculosd-text">Plazas: {vehiculos.plazas}</p>
                    <p className="vehiculosd-text">Maletero: {vehiculos.maletero}</p>
                    <p className="vehiculosd-text">Potencia: {vehiculos.potencia}</p>
                    <p className="vehiculosd-text">Precio: {new Intl.NumberFormat('de-DE').format(vehiculos.precio)}</p>
                    <button href="#" className="btn btn-primary"><Link to={`/${vehiculos.nombre}/${vehiculos.id}`}>Ver Producto</Link></button>
                </div>
            </div>
            </div>
    );
}

export default Item;
