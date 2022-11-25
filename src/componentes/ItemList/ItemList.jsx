import Item from "../Item/Item";


const ItemList = ({listaVehiculos}) => {    
    return (
            <>
                {listaVehiculos.map(vehiculo => <Item key={vehiculo.id} vehiculos ={vehiculo}/>)}
            </>
    );
}

export default ItemList;
