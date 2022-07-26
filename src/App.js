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



function App() {

  const amountItems = 0;

  return (
    <>
    {/* <Intercambialidad countType="input" /> */}
    <CartProvider>
    <BrowserRouter>
      <NavBar amountItems={amountItems}/>

      <Link to={"category/aliments"}>
      <button className="btn btn-outline-dark">Alimentos</button>
      </Link>
      <Link to={"/category/toys"}>
      <button className="btn btn-outline-dark">Juguetes</button>
      </Link>

    <Routes>
      <Route index element={<ItemListContainer/>} />
      <Route path='/productos' element={"/"} />
      <Route path='/Contacto' element={<Formulario/>} />
      <Route path="/category/:name" element={<ItemListContainer/>} />
      <Route path='item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={"Carrito"} />
      
      <Route path="*"  element={<div> No se encuentra el detalle del Producto</div>}/>
    </Routes>
  
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
