import React from "react";

const InputCount = ({onAdd, stock}) => {
    <>
    <input onChange={onAdd}/>
    <h1> {stock} </h1>
    </>
};
const ButtonCount = ({onAdd, stock}) => {
    <>
    <button onClick={onAdd}>Ejecutar onAdd</button>
    <h1>{stock}</h1>
    </>
};

const Intercambialidad = (countType)=>{
    const onAdd = ()=> console.log("this is triggerin onAdd");
    const Count = countType == "button" ? ButtonCount : InputCount;
    
    return<Count onAdd={onAdd} stock={4} />;
    
};

export default Intercambialidad;