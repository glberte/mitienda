import Contador from "./ItemCount";

const Item = (props) => {

  return(
    <>
    <div>
      <img src={props.img}/>
      <h1>{props.name}</h1>
      <h3>$ {props.price}</h3>
      <h4>Stock {props.stock} ud</h4>
      <h3>{props.description} </h3>
    </div>
    </>
  );
};

export default Item;
