import { useContext, useState, createContext } from "react";

const CartContext = createContext([])

const CartContextProvider = (props) =>{
    const [cart, setCart] = useState([]);

    const isInCart =(id)=>{
        return cart.find(aut => aut.id === id)
    }

    const addItem = (auto, cantidad) =>{
        if(isInCart(auto.id)){
        const autoBuscado = cart.findIndex(aut => aut.id === aut.id)
        const aux = [...cart]
        aux[autoBuscado].cant = cantidad
        setCart(aux)
        }else{
                const nuevoAuto={
                    ...auto,
                    cant: cantidad
                }

            setCart([...cart, nuevoAuto])
        }

    }
    const emptyCart =()=>{
        return setCart([])
    }

    const removeItem =(id)=>{
        return setCart(cart.filter(aut => aut.id !==id))
    }

    const getItemQuantity =()=>{
        return cart.reduce((acumulador,aut)=> acumulador += aut.cant, 0 )
    }

    const totalPrice =()=>{
        return cart.reduce((acumulador, aut)=> acumulador += (aut.cant * aut.precio),0)
    }
    console.log(cart)
    return(
        <CartContext.Provider value = {{cart, isInCart, addItem, emptyCart, removeItem, getItemQuantity, totalPrice}}>
        {props.children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}