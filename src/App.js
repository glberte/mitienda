// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/itemCount';


function App() {

  return (
    <div className="App">
      <NavBar/>
  
      <ItemListContainer grettins="proximamente publicaremos los productos!"/>
     
    </div>
  );
}

export default App;
