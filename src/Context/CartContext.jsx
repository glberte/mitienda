import { addDoc, getFirestore, collection } from "firebase/firestore";
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
        console.log(item.id);
	};
    const isInCart = (id) => 
		cartItems.find((item) => item.id === id) ? true : false;

    //   const isInCart = (id) => {
    //       return cartItems.find (item=> item.id === id ? true : false);
    //     }
    
     console.log('Items en cartItems: ', cartItems);

     const removeItem = (id) => setCartItems (cartItems.filter(item => item.id !== id));

    // Ver precio total
    const PrecioTotal = () => {
        return cartItems.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const ProductosTotalWidget = () =>
    	cartItems.reduce(
    		(acumulador, productoActual) => acumulador + productoActual.quantity,
    		0,
    	);

    // esto es para enviar la compra a Firebase
    //  const [amountItems, setAmountItems] = useState(0);
     const sendOrder = (() => {
           const db = getFirestore();
           const orderCollection = collection(db,'orders')
          
           const order = { item: cartItems};
      
           addDoc(orderCollection, order)
           .then((res)=> console.log(res.id))
           .catch((err)=> console.log('error', err));
       })
 

    // Vaciamos el carrito
     const clearCart = (item) => {
         setCartItems([]);
     }
    
      return(
          <>
          <CartContext.Provider value={{cartItems, 
            setCartItems, 
            clearCart,
            removeItem,
            // removeUnItem,
            addProduct,
            PrecioTotal,
            ProductosTotalWidget,
            //sendOrder
        }}>
              {children}
          </CartContext.Provider>
          </>
      );
  };

  export default CartProvider;
