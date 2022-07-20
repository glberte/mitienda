import React from "react";

// FORMULARIO PROHIBIENDO EN INGRESAR VOCALES 
const Formulario = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        //e.stopPropatagation();
        const input = document.getElementsByTagName("input");
        console.log(input[0].value);

    };
    const onChangeHandler = (e) => {
        if(e.key == 'a' || e.key =='e')
        {e.preventDefault()};
        console.log(e);
    }

    return (
        <>
        <h1 id="title"> Formulario </h1>
        <form onSubmit={onSubmitHandler}>
            <input onKeyDown={onChangeHandler} type="text" />
            <button type="submit" >Enviar al Console Log</button>
        </form>
        </>
    );
};



// const Formulario = () => {
//     const onSubmitHandler = (e) => {
//         e.preventDefault();
//         //e.stopPropatagation();
//         const input = document.getElementsByTagName("input");
//         console.log(input[0].value);

//     };

//     return (
//         <>
//         <h1 id="title"> Formulario </h1>
//         <form onSubmit={onSubmitHandler}>
//             <input type="text" />
//             <button type="submit" >Enviar al Console Log</button>
//         </form>
//         </>
//     );
// };

export default Formulario;