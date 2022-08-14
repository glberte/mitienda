import { useState } from "react"


const ItemCount2 = ({stock = 1, initial= 1, onAdd}) => {
    const [quantity, setCount] = useState(initial);
    const updateCount= (op) => {
        if (op=== "-" && quantity>0) {
            setCount(quantity - 1);
        }
        if (op=== "+" && quantity < stock) {
            setCount(quantity + 1);
        }
    };
    const updateCountInput = (e) => {
        const { value } = e.target;
        if (value <= stock) {
            setCount(isNaN(value) ? 0 : parseInt(value));
        }
    };
    
    return (
    <>
     <div> 
         <input onChange={(e)=> updateCountInput(e)} type="number" value={quantity} />
         <button onClick={()=> updateCount("-")} className="btn btn-icon btn-warning" type="button"> - </button>
         <button onClick={()=> updateCount("+")} className="btn btn-icon btn-info" type="button"> + </button>
     </div>

        <div>
            <button onClick={()=> onAdd(quantity)}
            className="btn btn-icon btn-dark" 
            type="button"> 
            Enviar al Carrito 
            </button>
        </div>       
    </>
    )

}


export default ItemCount2;