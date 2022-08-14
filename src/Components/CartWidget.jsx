import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

const CartWiget = () => {
     const {cartItems, ProductosTotalWidget} = useContext(CartContext);

    return (
        <div>
            <a href="" className="btn btn-outline-dark">
                <i className=" fa fa-shopping-cart"></i> Carrito <span>
                {/* {amountItems} */}
                {/* {cartItems.length} */}
                {ProductosTotalWidget() || "0" }
                </span>
            </a>
        
        </div>
    )
}

export default CartWiget;