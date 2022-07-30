import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
    const {cartItems} = useContext(CartContext);
    console.log(cartItems);
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


    </> )
}
 
export default Cart;