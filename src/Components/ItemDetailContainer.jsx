//import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import {useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import detail from "./details.json";
import { useState } from "react";
import {getDoc, doc, getFirestore, collection, getDocs, query} from "firebase/firestore"


const ItemDetailContainer = ({setAmountItems}) => {
    const [item, setItems] = useState({});
    const {id} = useParams();

        const db = getFirestore(); 
        const docRef = doc(db, "items", id);
        
        useEffect( ()=> {
            getDoc(docRef).then((snapshot)=> {
                const data = {id: snapshot.id, ...snapshot.data()};
                //console.log(snapshot.data());
                setItems(snapshot.data())
             },[]);

        });
    
    return(
        <>
            <ItemDetail setAmountItems={setAmountItems} item={item} />
        </>
    )
}

export default ItemDetailContainer;