import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Card from 'react-bootstrap/Card';

const Cart = () => {
    const {cartItems, PrecioTotal, removeItem, clearCart} = useContext(CartContext);
    
    const [totalPrice, setTotalPrice] = useState(0);
    //console.log(cartItems);
        //  useEffect(()=> {
        //      let total= 0;
        //      cartItems.forEach(item => {total += parseInt(item.price);            
        //      });
        //      setTotalPrice(total);
        //  },[cartItems]);

        if(cartItems.length === 0){
            return(
                <div>
                <h2>Todavia no elegistes ningun producto</h2>
                <Link to={"/"}>
                    <button className="btn btn-outline-primary"> Volver a la tienda a ver Productos</button>
                 </Link>
                </div>
            )
        }

    return ( 
        <> 
            <h2> Su carrito tiene: </h2> 
                {cartItems.map((item) => ( 
                    //  <div className=" card p1 m-auto" key ={item.id}>
                    <div className=" card p1 m-auto">
                        <div>
                        <h3>{item.name}</h3>
                        <h4>Precio: {item.price} </h4>
                        <h5>
                           cantidad: {item.quantity}
                        </h5> 
                        <p>Subtotal: ${item.quantity * item.price}</p>

                        </div>
                         <button onClick={()=> 
                            removeItem(item.id)
                            //</div>console.log(item.codigo)
                            // ()=>removeItem(item.id)
                            }>Quitar Producto</button>
                    </div>
                    
                ))} 
                <><h3>el total de la compra es $ {PrecioTotal()}</h3> </>
                    <button type="button" title="Eliminar Item" className="btn btn-primary py-1"
                    onClick={()=> clearCart()}>
                        Vaciar Carrito
                    </button>

        
        </> 
    )
}
 
export default Cart;