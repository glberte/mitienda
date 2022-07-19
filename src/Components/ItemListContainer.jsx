import PokeAPIExample from "../ejercicioClases/PokeAPIExample";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";
import ItemsList from "./Itemlist";

// Listado de Productos, luego se traslada a una api
const productsDB = [{
         id: 1,
         name: "Comida 1",
         description: "Alimento Balanceado 1",
         price: 1000,
         stock: 20,
         img: "../img/comida2.jpeg",
         category: "aliments"
       },
       {
         id: 2,
         name: "Comida 2",
         description: "Alimento Balanceado 2",
         price: 1500,
         stock: 20,
         img: "./img/comida2.jpeg",
         category: "aliments"
       },
       {
         id: 3,
         name: "Juguete 1",
         description: "Pelota 1",
         price: 3000,
         stock: 20,
         img: "../img/comida2.jpeg",
         category: "toys"
       }
     ];


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    
    useEffect(()=> {
        let promise = new Promise ((resolve, reject) =>{
            setTimeout(()=> {
                resolve(productsDB)
            }, 2000);
        })
        promise.then((productsDB)=>{
            setItems(productsDB)
        }).catch(
             (err)=> console.log(err)
          );
    },[]);

    return(
        <>
        <ItemsList items={items}/>
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