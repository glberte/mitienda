import { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Contador = (props)=> {
  const [contador, setContador] = useState(1);
  //const [onAdd, setonAdd] = useState(contador);
  //const [bool, setBool] = useState( true );

  let cantidad = contador;
  let stock = props.stock;
  let onAdd = props.onAdd;
  

  useEffect(()=>{
    console.log('solo se dispara si cambia bool');
  },[])

  const sumar = ()=> {
    if (cantidad < stock) setContador(contador + 1);}
  
  const quitar = ()=> setContador(0);
  
  const restar = ()=> {
    if (cantidad > 0){setContador(()=> cantidad - 1);} 
  };
  
  //const comprar = ()=> setonAdd(cantidad);

  return (
    <>
    <div id="Contador">
    <Card className="text-center">
    {/* <Card.Header>Producto 1</Card.Header> */}
    <Card.Body>
        <Card.Title>
          <Button variant="outline-primary" onClick={sumar}>+</Button>
        </Card.Title>
          <h4> </h4>
          {contador} 
          <h4> </h4>
          <Button variant="outline-danger" onClick={restar}>-</Button>
          <h4> </h4>
        
    </Card.Body>
        <Button variant="outline-success" 
            onClick={()=> onAdd(contador)}>
            Enviar al carrito
          </Button>

        <Button variant="outline-danger" 
            onClick={quitar}> 
            Borrar
          </Button>
    </Card>

    </div>
    </>
  )
}

export default Contador;