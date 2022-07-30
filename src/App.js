// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Route, Routes, Link } from'react-router-dom';
import Item from './Components/Item';
import Formulario from './ejercicioClases/Formulario';
import Intercambialidad from './ejercicioClases/Intercambialidad';
import ItemDetailContainer from './Components/ItemDetailContainer';
import CartProvider from './Context/CartContext';
import BarraFiltros from './Components/Filter';
import React, { useState } from 'react';

// const CartContext = React.createContext("");
// console.log('CartContext: ', CartContext);

function App() {
  const[ amountItems, setAmountItems] = useState(0);

  return (
    <>
    {/* <Intercambialidad countType="input" /> */}
    {/* <CartProvider> */}
    <BrowserRouter>
      <NavBar amountItems={amountItems}/>
    <Routes>
      <Route index element={<ItemListContainer/>} />
      <Route path='/productos' element={"/"} />
      <Route path='/Contacto' element={<Formulario/>} />
      <Route path="/category/:name" element={<ItemListContainer/>} />
      <Route path='item/:id' element={<ItemDetailContainer setAmountItems={setAmountItems}/>} />
      <Route path='/cart' element={"Carrito"} />
      
      <Route path="*"  element={<div> No se encuentra el detalle del Producto</div>}/>
    </Routes>
  
    </BrowserRouter>
    {/* </CartProvider> */}
    </>
  );
}

export default App;
