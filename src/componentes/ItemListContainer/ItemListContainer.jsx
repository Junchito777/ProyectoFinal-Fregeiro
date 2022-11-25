import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../Context/darkMode';
import { getAutos } from '../../ruta/firebase.js';

const ItemListContainer = () => {


    const [vehiculos, setAutos] = useState([]);
    const {category} = useParams()

    const {darkMode, toggleDarkMode}= useContext(DarkModeContext)

    useEffect(() => {
        if (category){
        getAutos().then(vehiculos => {
        const listaVehiculos =  vehiculos.filter(vehiculos => vehiculos.idCategoria === parseInt(category)).filter(vehiculo => vehiculo.stock > 0)
        console.log(listaVehiculos)
        const cardAutos = ItemList({listaVehiculos})
        setAutos(cardAutos)
        })    
        }else{
        getAutos().then(vehiculos => {
        const listaVehiculos = vehiculos.filter(vehiculos => vehiculos.stock > 0)
        const cardAutos = ItemList({listaVehiculos})
        setAutos(cardAutos)
        })        
    }},[category]);

    

    return(
        <div className= {darkMode ? 'vehiculos darkMode': 'vehiculos'}>
            <button className={darkMode ? 'btn btn-light' : 'btn btn-dark'} onClick={()=> toggleDarkMode()}>Modo Oscuro</button>
            {vehiculos}
        </div>

    );
}

export default ItemListContainer;
