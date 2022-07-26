import Contador from "./ItemCount"
import { Link } from "react-router-dom";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import ItemCount2 from "../ejercicioClases/itemCount2";



 const ItemDetail = ({item}) => {
  // const context = useContext(CartContext);
  // console.log(context);
   const [amount, setAmount] = useState(0);
   const {id, name, description, price, stock, img, category} = item;
   const onAdd = (amount) => {
     setAmount(amount);
   
    }

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
              <h2> {amount} unidades de {item.name} se enviaron al carrito, seguir comprando? 
              <Link to={"/cart"}>Finalizar compra </Link> o ver mas   
              <Link to={"/"}> productos</Link>
              </h2>
            
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