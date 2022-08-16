import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Card from 'react-bootstrap/Card';
import {addDoc, getFirestore, collection } from "firebase/firestore";

const Cart = () => {
    const {cartItems, PrecioTotal,removeUnItem,removeItem, clearCart} = useContext(CartContext);
    
    //const [totalPrice, setTotalPrice] = useState(0);
    //console.log(cartItems);
        //  useEffect(()=> {
        //      let total= 0;
        //      cartItems.forEach(item => {total += parseInt(item.price);            
        //      });
        //      setTotalPrice(total);
        //  },[cartItems]);

        const order = {
            user:{fullname:"Gabriel Bertellotti", email:"gabiberte@gmail.com"},
            items: cartItems.map((item)=> ({
                id: item.id,
                name: item.name,
                quantity: item.quantity
            })),
            total: PrecioTotal(),
        };
        // const handleClick = ()=> {
        //     console.log(order)
        //     const db = getFirestore();
        //     const ordersCollection = collection(db, "orders");
        //     addDoc(ordersCollection, order)
        //     .then(({id})=> console.log(id));
        // };
        const EnviarOrden = () => {
            console.log(order)
            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            addDoc(ordersCollection, order).then(({ id }) => console.log(id));
        };
        

      
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
                    <div className=" card p1 m-auto" key={item.id}>
                        <div>
                        <h3>{item.name}</h3>
                        <h4>Precio: {item.price} </h4>
                        <h5>
                           cantidad: {item.quantity}
                        </h5> 
                        <p>Subtotal: ${item.quantity * item.price}</p>

                        </div>
                         <button onClick={(item)=> 
                            removeUnItem(item.quantity)
                            //removeItem(item.id)
                            //</div>console.log(item.codigo)
                            // ()=>removeItem(item.id)
                            //console.log()
                            }>Quitar Producto</button>                            
                    </div>
                    
                ))} 
                <><h3>el total de la compra es $ {PrecioTotal()}</h3> </>
                    <button type="button" title="Limpiar Carrito" className="btn btn-primary py-1"
                    onClick={()=> clearCart()}>
                        Vaciar Carrito
                    </button>

                    <button type="button" title="Finalizar Compra" className="btn btn-success py-1"
                    onClick={EnviarOrden}>
                        Finalizar Compra
                    </button>

        
        </> 
    )
}
 
export default Cart;