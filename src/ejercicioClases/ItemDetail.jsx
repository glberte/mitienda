import Contador from "../Components/ItemCount"

const ItemDetail = () => {
    return ( 
    <>
    <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title> <h2>{props.name}</h2> </Card.Title>
        <Card.Text>
          {props.description}
         <h4>$ {props.price} </h4> 
          <h5> cantidad disponible {props.stock}</h5> 
        </Card.Text>
          <Link to={"/detail"}>{
           <button className="btn btn-outline-dark">Detalles</button>} 
          </Link>
        <Contador key={props.id} stock={props.stock}/>
      </Card.Body>
    </Card>
    </div>
     
    </>)
}

export default ItemDetail;