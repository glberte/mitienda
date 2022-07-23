import Contador from "./ItemCount"
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";



 const ItemDetail = ({item}) => {
  // const context = useContext(CartContext);
  // console.log(context);

   const {id, name, description, price, stcok, img, category} = item;
   return (
    <> 
      <div>
        <Card className="text-center">
           <Card.Header><h2>Detalles del producto</h2></Card.Header>
             <Card.Body>
                <Card.Title> 
                 <h3>{item.name}</h3> 
                </Card.Title>
                  <Card.Img variant="left" src={item.img} />
                  <Card.Text>
                    <h4>
                      {item.description}.
                    </h4> 
                  </Card.Text>
                <h5> cantidad disponible: {item.stock} </h5>
                <h4>$ {item.price} </h4>
             </Card.Body>
            <Card.Footer className="text-muted">
              <Contador key={item.id} stock={item.stock}/>
            </Card.Footer>
         </Card>

      </div>
    </>
   )
}

export default ItemDetail;