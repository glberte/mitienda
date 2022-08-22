import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// FORMULARIO PROHIBIENDO INGRESAR VOCALES REALIZADO EN CLASE
const Formulario = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        //e.stopPropatagation();
        //const inputs = document.getElementsByTagName("input");
        //console.log(inputs[0]);
       // const data = Array.from(inputs).map((input, index)=> input.value);

         const inputs = document.getElementsByTagName("Form.Group") 
         console.log(inputs[0]);
    };

    // const onChangeHandler = (e) => {
    //     if(e.key == 'a' || e.key =='e')
    //     {e.preventDefault()};
    //     console.log(e);
    // }
    

    return (
        <>
        <h1 id="title"> Formulario </h1>
        {/* <form onSubmit={onSubmitHandler}>
            <input 
            // onKeyDown={onChangeHandler} 
            type="text" />
            <input 
            // onKeyDown={onChangeHandler} 
            type="email" />
            <input 
            // onKeyDown={onChangeHandler} 
            type="tel" />
            <button type="submit" >Enviar al Console Log</button>
        </form> */}
       

        <Form onSubmit={onSubmitHandler}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="userName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Nombre" />
            </Form.Group>

            <Form.Group as={Col} controlId="userLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="lastname" placeholder="Ingrese su Apellido" />
            </Form.Group>
        </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Telefono de contacto</Form.Label>
          <Form.Control type="number" placeholder="Ingrese un nº de Telefono de contacto" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

        </>
    );
};


export default Formulario;