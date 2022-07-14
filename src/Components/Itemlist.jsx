import { useState, useEffect } from "react";
import Item from "./Item";
import Contador from "./ItemCount";

const Items = () => {
    const [items, setItems] = useState(
        [{
            id: 1,
            name: "Comida 1",
            description: "Alimento Balanceado 1",
            price: 1000,
            stock: 20,
            img: "../img/comida2.jpeg",
          },
          {
            id: 2,
            name: "Comida 2",
            description: "Alimento Balanceado 2",
            price: 1500,
            stock: 20,
            img: "./img/comida2.jpeg",
          },
          {
            id: 3,
            name: "Comida 3",
            description: "Alimento Balanceado 3",
            price: 3000,
            stock: 20,
            img: "../img/comida2.jpeg",
          }
        ]);

    return(
        <>
        <div className="row">
            {items.map((item)=>{
                return(
                    <>
                    <Item key={item.id} name={item.name} price={item.price} stock={item.stock}/>
                    <Contador/>
                    </>
                )
            }
            )}
        </div>
        </>
    )
}

export default Items;