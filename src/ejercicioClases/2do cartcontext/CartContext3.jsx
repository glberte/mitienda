import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) =>{

    // array donde se va a guardar
    const [cartItems, setCartItems] = useState([]);
    
    // devuelve el total de items del carrito
    const contextItemsCart = () => {
        return cartItems.reduce((acumulator, current)=> acumulator + current.cantidad, 0);
    }

    // devuelve el precio total del carrito
    const precioTotalCart = () => {
        return cartItems.reduce ((acumulator, current)=> acumulator +
        Number(current.producto.precio * current.cantidad),0);
    }

    // devuelve si un producto ya existe
    const isInCart = (id) => {
        if (contextItemsCart() > 0) {
            return cartItems.findIndex(item => item.producto.id === id)>= 0
        } else {return false}
    }

    // agregando el producto y la cantidad
    const addToCart = (producto, cantidad) => {
        if (!isInCart(producto.id)) {
            setCartItems([...cartItems, {producto, cantidad}])
        } else {
            alert('Ya existe en el carrito')
        }
    }

    // borrar producto por codigo
    const removeFromCart = (codigo) => {
        if (codigo !== undefined) {
            setCartItems(cartItems.filter(item => item.producto.codigo !== codigo))
        }
    }

    // Vaciar el carrito
    const clearCart = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{ cartItems, contextItemsCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;