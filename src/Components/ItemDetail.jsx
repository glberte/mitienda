import Contador from "./ItemCount"
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount2 from "../ejercicioClases/itemCount2";


 const ItemDetail = ({item, setAmountItems}) => {
  // const [cartItems, setCartItems] = useState([]);
  const {setCartItems}= useContext(CartContext);
  // const context = useContext(CartContext);
  //   console.log(context);

   const [amount, setAmount] = useState(0);
   const {id, name, description, price, stock, img, category} = item;
   const onAdd = (amount) => {
     setAmount(amount);
     
     setCartItems((prevState)=> {
      console.log(prevState);
      return [...prevState, item]});
     
     
      // setAmountItems((prevState) => {
      //  return parseInt(prevState) + 1;
      // });
    };
     
    

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
             
              {amount == 0 ? (
                 <ItemCount2 stock={stock} initial={0} onAdd={onAdd} />
              ) : (
                  <h3> {amount} unidades de {item.name} se envió al carrito, seguir comprando? 
                   
                     <div>
                       <Link to={"/"}>
                          <button className="btn btn-outline-primary"> Ver más Productos
                          </button>
                        </Link>

                       <Link to={"/cart"}>
                         <button className="btn btn-outline-dark">
                         <i className=" fa fa-shopping-cart"> Finalizar Compra</i>
                         </button>
                       </Link>
                     </div> 
              
                  </h3>

            
              )}
              
              {/* <Contador key={item.id} stock={item.stock} onAdd={onAdd}/> */}
              <div>

              </div>
            </Card.Footer>
         </Card>

      </div>
    </>
   )
}

export default ItemDetail;