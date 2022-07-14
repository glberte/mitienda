import PokeAPIExample from "../ejercicioClases/PokeAPIExample";
import ItemCount2 from "../ejercicioClases/itemCount2";
import Items from "./Itemlist";
import { useState } from "react";
import { useEffect } from "react";



const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
    const promise = new Promise((resolve)=> {
        setTimeout(()=> resolve(items), 5000);
    });

    // const ProductFilters = () => {
    //     return(
    //         <>
    //         <div className="buttons">
    //             <button className="btn btn-outline-dark">Comida</button>
    //             </div></>
    //     )
    // }
    useEffect(()=> {
        promise.then((res)=> setItems(items));
    }, []);

    return(
        <>
        <div>
            <h2>Bienvenido! {props.grettins} </h2> 
        </div>
        <div>
            <Items items={items}/>
        </div> 
        
     
        
     
        <PokeAPIExample/>

        
        </>
    )
}

export default ItemListContainer;