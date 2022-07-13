import Contador from "./ItemCount";
import PokeAPIExample from "../ejercicioClases/PokeAPIExample";
import ItemCount2 from "../ejercicioClases/itemCount2";


const ItemListContainer = (props) => {
    console.log(props);
    return(
        <>
        <h2>Bienvenido! {props.grettins} </h2> 
        <ItemCount2/>
        <PokeAPIExample/>
        <Contador/>
    

        
        </>
    )
}

export default ItemListContainer;