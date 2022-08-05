import React,{useContext} from 'react'
import {cartContext} from '../../context/CartContext'
import Cart2 from "./Cart2"
import {Link} from "react-router-dom"
import CartActions from './CartActions'


const CartContainer2 = () => {
  const {cartItems} = useContext(cartContext);
  return (
    <div>
    {
      cartItems.length > 0 ?
      cartItems.map(item => {return(<Cart2 key={item.id} data={item} />)}):
      <Link to="/productos"><div><title>No Hay Productos</title></div></Link>
    }
    {
     cartItems.length > 0 && <CartActions/>
    }
    </div>
  )
}

export default CartContainer2