import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

// Context
import { DarkModeProvider } from './Context/darkMode';
import { CartContextProvider } from './Context/CartContext';

// Componentes


import VentadeAutos from './VentadeAutos/VentadeAutos';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Cart from './Cart/Cart';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import Checkout from './Checkout/Checkout';





function App () {
  return (
    <>
    
    <DarkModeProvider props={"FranciscoS-"}>
    
    <BrowserRouter>
    
    <CartContextProvider>
      
      <VentadeAutos/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:nombre/:id' element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/category/:category' element={<ItemListContainer/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='*' element={<h1>Producto no encontrado</h1>}/>
      </Routes>
      
      <ToastContainer/>

    </CartContextProvider>
     
    </BrowserRouter>    
    
    </DarkModeProvider>
    </>
  );
}

export default App;
