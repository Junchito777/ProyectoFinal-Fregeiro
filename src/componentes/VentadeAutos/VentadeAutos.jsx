import './ventadeAutos.css'
import { Link } from 'react-router-dom';
import Titulo from '../Titulo/Titulo';
import Secciones from '../Secciones/Secciones';
import Contacto from '../Contacto/Contacto';
import Buscador from '../Buscador/Buscador';
import Inicio from '../Inicio/Inicio';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';

const VentadeAutos= React.memo(() =>{
    return(
    <>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Titulo/>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link className='nav-link' to="/">
            <h6>Home</h6>
          </Link>
        <Inicio/>
        <Contacto/>
        <Secciones/>        
        </ul>
        <Buscador Autos={"Buscar Autos"}/>
      <CartWidget/>
        </div>
        </div>
    </nav>
    </>
    )
})

export default VentadeAutos;