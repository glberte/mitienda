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
    // const Loading = ()=>{
    //   return(
    //     <>
    //     </>
    //   )
    // }
    
    const db = getFirestore();
    const CollectionItems = collection(db, 'items');
    
    useEffect(()=> {
       getDocs(CollectionItems)
       .then( res => {
         const productList= res.docs.map((product)=>({id: product.id, ...product.data()}));
         console.log(productList);
         setItems(productList)
       })

      // getDocs(CollectionItems)
      // .then( (productSnapshot) => {
      //   const productList = productSnapshot.docs.map((doc)=> {
      //     let product = doc.data()
      //     product.id = doc.id
      //     return product
      //   })
      //   console.log(productList);
      // })

    },[name]);


  //   {   
  //     let promise = new Promise ((resolve, reject) =>{
  //         setTimeout(()=> {
  //             resolve(productsDB)
  //         }, 2000);
  //     });

  //         promise.then((productsDB)=>{
  //           if (name) {
  //             setItems(productsDB.filter((product) => product.category == name));
  //           } else{
  //             setItems(productsDB)
  //           }
  //         }).catch(
  //              (err)=> console.log(err)
  //           );

  //  },[name]);

    return(
        <>
        <ItemsList items={items}/>
        </>
    )
}

 export default ItemListContainer;