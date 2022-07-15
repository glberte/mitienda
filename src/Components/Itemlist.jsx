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