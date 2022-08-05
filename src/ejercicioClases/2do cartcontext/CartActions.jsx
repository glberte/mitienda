import React,{useContext} from 'react'
import {cartContext} from '../../context/CartContext'


// Separando las funciones y metodos del carrito

const CartActions = (props) => {
    const {clear, totalPrice,sendDoc} = useContext(cartContext);
  const handleClickClearUp = ()=>{
    clear();
  }
  const handlePurchase = (e)=>{ 
    e.preventDefault();
  }
  return (
    <div>
    <button onClick={()=>handleClickClearUp()}>Vaciar Carrito</button>
    <div >
      <span >El Precio Total es: ${totalPrice()}</span>
      <button  onClick={(e)=>handlePurchase(e)}>Comprar</button>
    </div>
    </div>
  )
}

export default CartActions