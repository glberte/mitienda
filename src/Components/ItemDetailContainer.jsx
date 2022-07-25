//import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import {useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import detail from "./details.json";
import { useState } from "react";


const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    const {id} = useParams();
    console.log("ver "+id);
        const promise = new Promise ((res, rej)=> {
            setTimeout(()=>{
                res(detail)
            }, 2000)
        });

        useEffect( ()=> {
            promise.then((response)=>{
                const foundItem = response.filter((item) => item.id == parseInt(id))
                setItems(foundItem[0]);
            })
        });
    
    return(
        <>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer;