//import PokeAPIExample from "../ejercicioClases/PokeAPIExample";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";
import ItemsList from "./Itemlist";
import productsDB from "./details.json"
import {getDoc, doc, getFirestore, collection, getDocs, query} from "firebase/firestore"

// cambio el listado de abajo por el json, despues usare una api
// Listado de Productos, luego se traslada a una api
// const productsDB = [{
//          id: 1,
//          name: "Comida 1",
//          description: "aqui tiene mucha descripcion Alimento Balanceado 1",
//          price: 1000,
//          stock: 10,
//          img: "img/comida2.jpeg",
//          category: "aliments"
//        },
//        {
//          id: 2,
//          name: "Comida 2",
//          description: "aqui tiene mucha descripcion Alimento Balanceado 2",
//          price: 1500,
//          stock: 15,
//          img: "img/comida3.jpeg",
//          category: "aliments"
//        },
//        {
//          id: 3,
//          name: "Juguete 1",
//          description: "aqui tiene mucha descripcion Pelota 1",
//          price: 3000,
//          stock: 20,
//          img: "img/juguete1.jpeg",
//          category: "toys"
//        },
//        {
//          id: 4,
//          name: "Juguete 2",
//          description: "aqui tiene mucha descripcion Dispense Alimentos",
//          price: 4000,
//          stock: 10,
//          img: "img/juguete2.jpeg",
//          category: "toys"
//        }
//      ];


const ItemListContainer = () => {
  const {name} = useParams();
  
    const [items, setItems] = useState([]);
    const Loading = ()=>{
      return(
        <>
        </>
      )
    }
    
    useEffect(()=> {
      // const db = getFirestore();
      // const docRef = doc(db, "item", "2gQmkKlgswrM4gPUmSrj");
      // getDoc(docRef).then((snapshot)=> {
      //   const data = {id: snapshot.id, ...snapshot.data()};
      // });

      // const db= getFirestore();
      // const itemsCollection = collection(db, "items");
      // getDocs(itemsCollection).then((snapshot) => {
      //   console.log(snapshot.docs.map(doc => {
      //     const data ={id: doc.id, ...doc.data()}
      //   }));
        
      // })

      // const db = getFirestore();
      // const itemsCollection = collection(db,"items");
      // const filteredCollection = query(
      //   itemsCollection, 
      //   where("title", "==", "Comida1"),
      //   where("price", "<", 1000)
      //   );
      //   getDocs(filteredCollection).then((snapshot)=> {})

        let promise = new Promise ((resolve, reject) =>{
            setTimeout(()=> {
                resolve(productsDB)
            }, 2000);
        })
        promise.then((productsDB)=>{
          if (name) {
            setItems(productsDB.filter((product) => product.category == name));
          } else{
            setItems(productsDB)
          }
        }).catch(
             (err)=> console.log(err)
          );
    },[name]);

    return(
        <>
        <ItemsList items={items}/>
         {/* <PokeAPIExample/> */}
        </>
    )
}

 export default ItemListContainer;