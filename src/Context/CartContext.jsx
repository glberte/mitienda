import React, {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    // const isInCart = (id) =>{

    // }
    // const addItem = (item, quantity) => {
    //     isInCart(item.id)
    // }
    //const [amountItems, setAmountItems] = useState(0);

     return(
         <>
         <CartContext.Provider value={{cartItems, setCartItems}}>
             {props.children}
         </CartContext.Provider>
         </>
     );
 };

 export default CartProvider;
