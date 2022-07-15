import Contador from "./ItemCount";
import {Link} from 'react-router-dom';
import { Button } from "react-bootstrap";

const Item = (props) => {

  return(
    <>
    <div>
      <img src={props.img}/>
      <h1>{props.name}</h1>
      <h3>$ {props.price}</h3>
      <h4>Stock {props.stock} ud</h4>
      <h3>{props.description} </h3>
      <Link to={"/detail"}>{<button className="btn btn-outline-dark">Detalles</button>} </Link>
    </div>
    </>
  );
};

export default Item;
