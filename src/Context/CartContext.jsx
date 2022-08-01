import React, {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    // const isInCart = (id) =>{

    // }
    const addItem = (item, ) => {
         const isInCart = cartItems.find(
            (itemInCart) => itemInCart.id === item.id
            );
            if (isInCart){
                setCartItems(
                    cartItems.map((itemInCart) => {
                        if(itemInCart.id === item.id){
                            return {...isInCart, amount: isInCart.amount + 1};
                        }else return itemInCart;
                    })
                );
            }else{setCartItems([...cartItems, {...item, amount:1}])}
    }
    const clearCart = () => setCartItems([]);

    //const [amountItems, setAmountItems] = useState(0);

     return(
         <>
         <CartContext.Provider value={{cartItems, setCartItems, clearCart, addItem}}>
             {props.children},
        
         </CartContext.Provider>
         </>
     );
 };

 export default CartProvider;
