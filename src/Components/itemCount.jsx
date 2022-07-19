import { useState, useEffect } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Contador = (props)=> {
  const [contador, setContador] = useState(1);
  const [bool, setBool] = useState( true );
  let cantidad = contador;
  let stock = props.stock;
  

  useEffect(()=>{
    console.log('solo se dispara si cambia bool');
  },[bool])

  const sumar = ()=> {
    if (cantidad < stock) setContador(contador + 1);}

  const quitar = ()=> setContador(0);
  const comprar = ()=> setBool(!bool);
  //const restar = ()=> setContador(contador - 1);
  const restar = ()=> {
    if (cantidad > 0){
      setContador(()=> cantidad - 1);
    }
  }

  return (
    <>
    <div id="Contador">
    <Card className="text-center">
    {/* <Card.Header>Producto 1</Card.Header> */}
    <Card.Body>
        <Card.Title>{contador}</Card.Title>

        <Button variant="outline-primary" onClick={sumar}>+</Button>
        <Button variant="outline-danger" onClick={restar}>-</Button>
        <Button variant="outline-danger" onClick={quitar}> Borrar</Button>
    </Card.Body>
        <Button variant="outline-success" onClick={comprar}>Enviar al carrito</Button>
    </Card>

    </div>
    </>
  )
}

export default Contador;