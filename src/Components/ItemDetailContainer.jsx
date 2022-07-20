//import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import {useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const {id} = useParams();
    console.log(id);
    const item = {name: "name"};

    // useEffect(()=> {
    //       let promise = new Promise ((resolve, reject) =>{
    //           setTimeout(()=> {
    //               resolve(item)
    //           }, 2000);
    //       })
    //       promise.then((item)=>{
    //           setItems(item)
    //       }).catch(
    //            (err)=> console.log(err)
    //         );
    //   },[]);

    return(
        <>
            <ItemDetail item={item} />
        </>
    )
}

// const ItemDetailContainer = () => {
    
//         const [item, setItems] = useState([]);
//        // const id = props.key;
//        // const item = props.item;
        
//         useEffect(()=> {
//             let promise = new Promise ((resolve, reject) =>{
//                 setTimeout(()=> {
//                     resolve(item)
//                 }, 2000);
//             })
//             promise.then((item)=>{
//                 setItems(item)
//             }).catch(
//                  (err)=> console.log(err)
//               );
//         },[]);
    
//         return (
//             <div>
//                 <ItemDetail item={item}/>
//             </div>
//         )
//     }
    
    

export default ItemDetailContainer;

