import { useState } from "react";
import { Button } from "react-bootstrap";
import Input from "./Inputs";

const Formulario2 = () => {
    const [userData, setUserData] = useState({});
    const handleChange = ({target}) => {
        setUserData((prevState)=>({...prevState, [target.name]: target.value}));
    };
    function onSubmit(e){
        e.preventDefault();
        console.log(
            `Your name is ${userData.name} ${userData.surname} and you have ${userData.age}`
        );
    };

    return ( 
        <form onSubmit={onSubmit}>
            <Input label={"Nombre"} name="name" handleChange={handleChange} />
            <Input label={"Apellido"} name="surname" handleChange={handleChange}/>
            <Input label={"Edad"} name="age" handleChange={handleChange} />

            <button disabled={!(userData.name && userData.surname && userData.age)} >
                Crear Orden</button>
        </form>
     );
}
 
export default Formulario2;
