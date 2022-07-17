import PokeAPIExample from "../ejercicioClases/PokeAPIExample";
import ItemCount2 from "../ejercicioClases/itemCount2";
import Items from "./Itemlist";
import { useState } from "react";
import { useEffect } from "react";
import {useParams} from "react-router-dom";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";



const ItemListContainer = (props) => {
    const name = useParams();
    // console.log(name);
    const [items, setItems] = useState([]);

    const promise = new Promise((resolve, reject)=> {
        setTimeout(()=>{
            const resp = {items};
            resolve ( resp );}, 2000);
    });

    promise.then( ({items}) => {
        return(
            <div>
                {/* <Items/> */}
            </div>
        )
        
        
    });
     return(
         <>
     <div>
         <h2>Bienvenido! {props.grettins} </h2> 
     </div>
     <div>
         <Items items={items}/>
     </div> 

     {/* <PokeAPIExample/> */}        
     </>
)
}

export default ItemListContainer;



//  const ProductFilters = () => {
    //      return(
    //          <>
    //          <div className="buttons">
    //              <button className="btn btn-outline-dark">Comida</button>
    //              </div></>
    //      )
    //  }