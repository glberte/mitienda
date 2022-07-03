// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav';
import ItemListContainer from './Components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer grettins="a mi futura tienda online!"/>
      <ItemListContainer grettins="proximamente se veran los producos!"/>
    </div>
  );
}

export default App;
