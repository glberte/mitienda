import { useState, useEffect } from "react"


const ItemCount2 = ({stock = 1, initial= 1, onAdd}) => {
    const [count, setCount] = useState(initial);
    const updateCount= (op) => {
        if (op=== "-" && count>0) {
            setCount(count - 1);
        }
        if (op=== "+" && count < stock) {
            setCount(count + 1);
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
         <input onChange={(e)=> updateCountInput(e)} type="number" value={count} />
         <button onClick={()=> updateCount("-")} className="btn btn-icon btn-warning" type="button"> - </button>
         <button onClick={()=> updateCount("+")} className="btn btn-icon btn-info" type="button"> + </button>
     </div>

        <div>
            <button onClick={()=> onAdd(count)}
            className="btn btn-icon btn-dark" 
            type="button"> 
            Comprar 
            </button>
        </div>       
    </>
    )

}


export default ItemCount2;