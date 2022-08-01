import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
    const {cartItems} = useContext(CartContext);
    
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(cartItems);
    useEffect(()=> {
        let total= 0;
        cartItems.forEach(item => {
            total+= parseInt(item.price);            
        });
        setTotalPrice(total);
    },[cartItems]);
    
    if(cartItems.length === 0){
        return(
            <> 
            <h2>Todavia no elegistes ningun producto</h2>
            
            <Link to={"/"}>
                <button className="btn btn-outline-primary"> Ir a ver Productos
                </button>
             </Link>
            </>
        )
    }

    return ( 
    <> 
        <h2>
            Su carrito tiene:
        </h2> 
            {cartItems.map((item) => (
                <>
                <h3>{item.name}</h3>
                <h3>{item.price}</h3>
                </>

            ))} 
            <>
            <h3>el total de la compra es ${totalPrice}</h3>
            </>


    </> )
}
 
export default Cart;