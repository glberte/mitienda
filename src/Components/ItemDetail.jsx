import Contador from "./ItemCount"
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card } from "react-bootstrap";

 const ItemDetail = ({props}) => {
   const item = {props};
     return ( 
     <>
     <div>
      <Card style={{ width: '18rem' }}>   
       <Card.Img variant="top" src={props.img} />      
         <Card.Body>
           <Card.Title> <h2>{props.name}</h2> </Card.Title>
             <Card.Text>
               <h2> {props.description} </h2> 
               <h4>$ {props.price} </h4> 
               <h5> cantidad disponible: {props.stock} </h5> 
             </Card.Text>
           <Contador key={props.id} stock={props.stock}/>
         </Card.Body>   
     </Card>
     </div> 
     </>
     )
 }

 export default ItemDetail;