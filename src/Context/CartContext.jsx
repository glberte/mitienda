import React, {createContext} from "react";
import { useState } from "react";

export const CartContext = React.createContext();

const CartProvider = (props) => {
    const [amountItems, setAmountItems] = useState(0);

     return(
         <>
         <CartContext.Provider value={{amountItems, setAmountItems}}>
             {props.children}
         </CartContext.Provider>
         </>
     );
 };

 export default CartProvider;
