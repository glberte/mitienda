// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './ejercicioClases/itemCount2';
import { BrowserRouter, Route, Routes, Link } from'react-router-dom';
import Item from './Components/Item';


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route index element={<ItemListContainer/>} />
      <Route path='/productos' element={"/"} />
      <Route path='/category/:name' element={<ItemListContainer/>} />
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
