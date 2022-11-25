import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createOrdenCompra, getAuto, updateAutos} from '../../ruta/firebase';
import { CartContext } from '../Context/CartContext';








const Checkout = () => {

const datosFormulario = React.useRef()
let navigate = useNavigate()
const {cart, emptyCart, totalPrice} = useContext(CartContext)




const consultarFormulario=(e)=>{
    
     e.preventDefault()
     const datForm = new FormData(datosFormulario.current)
     const valores= Object.fromEntries(datForm)
     const aux = [...cart]
     aux.forEach(auto=>{
        getAuto(auto.id).then(aut=>{
            if(aut.stock -= auto.cant)
            updateAutos(auto.id,aut)
        })
     })
     createOrdenCompra(valores, totalPrice(), new Date().toISOString().slice(0,10)).then(orden =>{
        toast.success(`Su orden ${orden.id} fue creada con exito`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            })
        emptyCart()
        e.target.reset()
        navigate("/")
}).catch(error =>{
    toast.error(`Su orden no fue creada con éxito`)
    console.log(error)
})
     }


    return (
        <div className='container'>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                        Nombre
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        name='nombre'
                        aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">
                        Apellido
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        name='apellido'
                        aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni" className="form-label">
                        DNI
                        </label>
                        <input
                        type="number"
                        className="form-control"
                        name='dni'
                        aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mail" className="form-label">
                        Mail
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        name='email'
                        aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">
                        Número de teléfono
                        </label>
                        <input
                        type="number"
                        className="form-control"
                        name='celular'
                        aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="direccion" className="form-label">
                        Dirección
                        </label>
                        <input
                        type="text"
                        className="form-control"
                        name='direccion'
                        aria-describedby="emailHelp"
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    
            </form>

        </div>
    );
}

export default Checkout;
