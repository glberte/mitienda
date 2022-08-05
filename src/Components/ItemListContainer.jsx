//import PokeAPIExample from "../ejercicioClases/PokeAPIExample";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";
import ItemsList from "./Itemlist";
import productsDB from "./details.json"
import {getDoc, doc, getFirestore, collection, getDocs, query} from "firebase/firestore"



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
      const db = getFirestore(); 
      const docRef = doc(db, "items", "2gQmkKlgswrM4gPUmSrj");
      getDoc(docRef).then((snapshot)=> {
         const data = {id: snapshot.id, ...snapshot.data()};
         console.log(snapshot.data());
         setItems(snapshot.data())
       });

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