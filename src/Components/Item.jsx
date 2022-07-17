import Contador from "./ItemCount";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Item = (props) => {

  return(
    <>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.description}
        $ {props.price}
        </Card.Text>
        <Link to={"/detail"}>{<button className="btn btn-outline-dark">Detalles</button>} </Link>
        <Contador/>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};

export default Item;
