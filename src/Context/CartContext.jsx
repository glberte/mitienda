import { addDoc, getFirestore } from "firebase/firestore";
import React, {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    
    const isInCart = (item) => {
        return cartItems.find ((e)=> e.item.id === item.id)
    }
    
    const addItem = (item, quantity) => {
        const newItem = isInCart(item);
        if (newItem){
            quantity= quantity + newItem.quantity;
            setCartItems(cartItems.slice (cartItems.findIndex((e)=> e.item.id === item.id),1))
        }
        setCartItems([...cartItems, {item,quantity}])
    }


    // const addItem = (item) => {
    //      const isInCart = cartItems.find(
    //         (itemInCart) => itemInCart.id === item.id
    //         );
    //         if (isInCart){
    //             setCartItems(
    //                 cartItems.map((itemInCart) => {
    //                     if(itemInCart.id === item.id){
    //                         return {...isInCart, amount: isInCart.amount + 1};
    //                     }else return itemInCart;
    //                 })
    //             );
    //         }else{setCartItems([...cartItems, {...item, amount:1}])}
    // }
    
    // const removeItem = (id) => {
    //     (removeItem.filter(item => item.id !== id))
    // };
    const removeItem = (itemId) => {
        return setCartItems(cartItems.filter (element => element.item.id !== itemId))
    }


    const clearCart = product => {
        let previousCart = [...cartItems]
        setCartItems(previousCart.filter(i => i.item.id !== product.item.id))
        
        };

    //const [amountItems, setAmountItems] = useState(0);
    // esto es para enviar la compra a Firebase
    // const sendOrder = (() => {
    //     const db = getFirestore();
    //     const orderCollection = collection(db,'orders')
    //     const order = {
    //         item: cartItems,
    //     };
    //     addDoc(orderCollection, order).then((res)=> console.log(res.id)).catch((err)=> console.log('error', err));
    // })





    
     return(
         <>
         <CartContext.Provider value={{cartItems, setCartItems, clearCart, addItem, removeItem}}>
             {children},
        
         </CartContext.Provider>
         </>
     );
 };

 export default CartProvider;
