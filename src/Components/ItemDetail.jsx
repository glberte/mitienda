import Contador from "./ItemCount"
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



 const ItemDetail = ({item}) => {
   const {id, name, description, price, stcok, img, category} = item;
   return (
    <> 
      <div>
        
        <Card className="text-center">
      <Card.Header><h2>{item.name}</h2></Card.Header>
      <Card.Body>
        <Card.Title>{item.img}</Card.Title>
        <Card.Img variant="top" src={item.img} />
        <Card.Text>
          <h3>
            {item.description}.
          
          </h3> 
        </Card.Text>
        <h5> cantidad disponible: {item.stock} </h5>
        <h4>$ {item.price} </h4>
      </Card.Body>
      <Card.Footer className="text-muted"><Contador key={item.id} stock={item.stock}/></Card.Footer>
    </Card>

      </div>
    </>
   )
}

export default ItemDetail;