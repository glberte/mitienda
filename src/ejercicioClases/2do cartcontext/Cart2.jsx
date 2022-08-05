import React, { useContext } from 'react'
import {cartContext} from '../../context/CartContext'


const Cart2 = (props) => {
  const { removeItem} = useContext(cartContext);
  const handleBtnClick = (id)=>{
    removeItem(id);
  }
  return (
    <div>
      <img src={props.data.pictureUrl} alt="" />
      <title>{props.data.title}</title>
      <div>
      <div><button className='Cart__btn' onClick={()=>handleBtnClick(props.data.id)}>Eliminar</button></div>
      <span>El Precio es:${props.data.price} | Cantidad: {props.data.quantity}</span>
      </div>
    </div>
  )
}

export default Cart2
