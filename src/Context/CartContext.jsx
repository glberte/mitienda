import { addDoc, getFirestore } from "firebase/firestore";
import React, {createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);




    // esto es para enviar la compra a Firebase
    // const sendOrder = (() => {
    //     const db = getFirestore();
    //     const orderCollection = collection(db,'orders')
    //     const order = {
    //         item: cartItems,
    //     };
    //     addDoc(orderCollection, order).then((res)=> console.log(res.id)).catch((err)=> console.log('error', err));

    // })

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
    
    const removeItem = (id) => {
        (removeItem.filter(item => item.id !== id))
    };


    const clearCart = product => {
        let previousCart = [...cartItems]
        setCartItems(previousCart.filter(i => i.item.id !== product.item.id))
        
        };

    //const [amountItems, setAmountItems] = useState(0);

     return(
         <>
         <CartContext.Provider value={{cartItems, setCartItems, clearCart, addItem, removeItem}}>
             {props.children},
        
         </CartContext.Provider>
         </>
     );
 };

 export default CartProvider;
