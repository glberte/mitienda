import { addDoc, getFirestore } from "firebase/firestore";
import React, {createContext, useState} from "react";
import { createRoutesFromChildren } from "react-router-dom";

export const CartContext = createContext();

//export const useCartContext = () => useCartContext(CartContext);

const CartProvider = ({children}) => {
    // array donde guardamos los items
     const [cartItems, setCartItems] = useState([]);
     const [quantityProduct, setQuantityProducts] = useState(0);
     
     const addProduct = (item, quantity) => {
		if (isInCart(item.id)) {
			setCartItems(
				cartItems.map((item) => {
					return item.id === item.id
						? { ...item, quantity: item.quantity + quantity }
						: item;
				}),
			);
		} else {
			setCartItems([...cartItems, { ...item, quantity }]);
		}
	};




     const isInCart = (item) => {
         return cartItems.find ((e)=> e.item.id === item.id)
     }
    
     console.log('newcarrito: ', cartItems);


     const removeUnItem = (codigo) => {
         return setCartItems(cartItems.filter(e => e.item.codigo !== codigo))
     }
     const removeItem = (id) => setCartItems (cartItems.filter(item => item.id !== id));

    // Ver precio total
    const PrecioTotal = () => {
        return cartItems.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProducts = () =>
		cartItems.reduce(
			(acumulador, productoActual) => acumulador + productoActual.amount,
			0,
		);

    // esto es para enviar la compra a Firebase
     //const [amountItems, setAmountItems] = useState(0);
     // const sendOrder = (() => {
     //     const db = getFirestore();
     //     const orderCollection = collection(db,'orders')
     //     const order = {
     //         item: cartItems,
     //     };
     //     addDoc(orderCollection, order).then((res)=> console.log(res.id)).catch((err)=> console.log('error', err));
     // })
 

    // Viciarmos el carrito
     const clearCart = (item) => {
         setCartItems([]);
     }
    
      return(
          <>
          <CartContext.Provider value={{cartItems, 
            setCartItems, 
            clearCart,
            removeItem,
            addProduct,
            PrecioTotal,
            totalProducts
            //addItem
        }}>
              {children}
          </CartContext.Provider>
          </>
      );
  };

  export default CartProvider;
