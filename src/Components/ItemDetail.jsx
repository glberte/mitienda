//import Contador from "./ItemCount"
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CartContext } from "../Context/CartContext";
import ItemCount2 from "../ejercicioClases/itemCount2";
 

 const ItemDetail = ({item}) => {
  const {setCartItems, addProduct}= useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  // descontructar el hook custom para agregar items al carrito
  // const {addProduct} = useCartContext();
  
   const stock = item.stock;
   //console.log(stock);
   //console.log(item);
  
   const onAdd = (quantity) => {
      setQuantity(quantity);
      console.log(quantity);
      addProduct(item, quantity)
  
    //addProduct( {...quantity, quantity: quantity});
     
    //  setCartItems((prevState)=> {
    //   return [...prevState, {item, quantity}]});

    
    //  setCartItems((prevState)=> {
    //   return [...prevState, item]});
    
    };
     
    

   return (
    <> 
      <div>
        
        <Card className="text-center">
           <Card.Header><h2>Detalles del producto</h2></Card.Header>
             <Card.Body>
                <Card.Title> 
                 <h3>{item.name} </h3> 
                 <h5>cod ID: {`${item.codigo}`}</h5>
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
              {quantity == 0 ? (
                     <ItemCount2 stock={stock} initial={1} onAdd={onAdd} />
                  ) : (
                       <h3> {quantity} unidades de {item.name} se envió al carrito, seguir comprando? 
                          <div>
                            <Link to={"/"}>
                               <button className="btn btn-outline-primary"> Ver más Productos
                               </button>
                             </Link>
                             <p> o </p>

                             <Link to={"/cart"}>
                               <button className="btn btn-outline-dark">
                               <i className=" fa fa-shopping-cart"> Ir al carrito</i>
                               </button>
                             </Link>
                             </div> 
                          </h3>
                      )
                      
              }
            </Card.Footer>
         </Card>

      </div>
    </>
   )
}

export default ItemDetail;