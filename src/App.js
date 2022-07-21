// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav';
import ItemListContainer from './Components/ItemListContainer';
import { BrowserRouter, Route, Routes, Link } from'react-router-dom';
import Item from './Components/Item';
import Formulario from './ejercicioClases/Formulario';
import Intercambialidad from './ejercicioClases/Intercambialidad';
import ItemDetailContainer from './Components/ItemDetailContainer';



function App() {

  return (
    <>
    {/* <Intercambialidad countType="input" /> */}
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<ItemListContainer/>} />
      <Route path='/productos' element={"/"} />
      <Route path='/Contacto' element={<Formulario/>} />
      <Route path='/category/:name' element={<ItemListContainer/>} />
      <Route path='item/:id' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Item/>} />
      <Route 
        path="*" 
        element={<div> No se encuentra el detalle del Producto</div>}/>
    </Routes>

    <div className="App">
      {/* <NavBar/> */}
  
      {/* <ItemListContainer grettins="proximamente publicaremos los productos!"/> */}
      
     
    </div>
    
    
    </BrowserRouter>
    </>
  );
}

export default App;
