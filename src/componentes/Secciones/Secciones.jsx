import './secciones.css';
import { Link } from 'react-router-dom';

const Secciones = () => {
    return (
    <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Secciones</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to={"./category/1"}>SUV</Link></li>
                {/* <li><Link className="dropdown-item" to={"./category/2"}>Tres Volúmenes</Link></li> */}
                {/* <li><Link className="dropdown-item"to={"./category/3"}>Dos Volúmenes</Link></li> */}
                {/* <li><Link className="dropdown-item"to={"./category/4"}>Monovolumen</Link></li> */}
                {/* <li><Link className="dropdown-item" to={"./category/5"}>Familiar</Link></li> */}
                <li><Link className="dropdown-item" to={"./category/6"}>Sedán</Link></li>
                {/* <li><Link className="dropdown-item" to={"./category/7"}>Pickup</Link></li> */}
                {/* <li><Link className="dropdown-item" to={"./category/8"}>Coupé</Link></li> */}
                <li><Link className="dropdown-item" to={"./category/9"}>Deportivo</Link></li>
                {/* <li><hr className="dropdown-divider" /></li> */}
              </ul>
    </li>
    );
}

export default Secciones;
