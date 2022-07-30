import { useState } from "react";

const CartWiget = ({amountItems}) => {
    //  const[amount, setAmount] = useState(0);

    return (
        <div>
            <a href="" className="btn btn-outline-dark">
                <i className=" fa fa-shopping-cart"></i> Carrito <span>

                {/* {amount} */}
                {amountItems}
                </span>
            </a>
        
        </div>
    )
}

export default CartWiget;