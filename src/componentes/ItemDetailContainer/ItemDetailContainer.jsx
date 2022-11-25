import {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { consultarAutos } from '../../ruta/funciones';
import ItemDetailProduct from '../ItemDetailProduct/ItemDetailProduct';
import './ItemDetailContainer.css'
import { DarkModeContext } from '../Context/darkMode';
import { getAuto } from '../../ruta/firebase';

const ItemDetailContainer = () => {

    const [vehiculos, setAutos] = useState([]);
    const {id} = useParams();
    const {darkMode}= useContext(DarkModeContext)


useEffect(() => {
   getAuto(id).then(aut =>{
    setAutos(aut)
   })
}, []);



    return (
        <div>
           <div className={darkMode ? "darkMode card mb-3 container detalleProducto" : "card mb-3 container detalleProducto"}>
            <ItemDetailProduct vehiculos ={vehiculos}/>
           </div>
        </div>
    );
}

export default ItemDetailContainer;

