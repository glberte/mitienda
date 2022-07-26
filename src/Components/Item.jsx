import Contador from "./ItemCount";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';



const Item = (props) => {
  let stock = props.stock
 

  return(
    <>
    <Row xs={1} md={2} className="g-4"></Row>
    
    <div className="row">
    <Card border="warning" style={{ width: '20rem' }}>
      
      <Card.Img variant="top" src={props.img} />
        
        <Card.Body>
          <Card.Title> <h2>{props.name}</h2> </Card.Title>
             <Card.Text>
               <h4>$ {props.price} </h4> 
               <h5> cantidad disponible {props.stock}</h5> 
             </Card.Text>
           
            <Link to={`/item/${props.id}`}>{
             <button variant="outline-dark" className="btn btn-outline-dark">Detalles</button>
             } 
            </Link>
          
            <Contador key={props.id} stock={props.stock}/>
        </Card.Body>
    </Card>
    </div>
    </>
  );
};

export default Item;
