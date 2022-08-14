import Item from "./Item";


// const ItemsList = ({data = []})=>{
//     return data.items.map((product) => <Item Key={product.id}/>)
// }

  const ItemsList = (props)=> {
      return(
          <>
          <div className="row">
              {props.items.map((item) =>{
            
                   return(
                       <Item key={item.id}
                             id={item.id} 
                             img={item.img}
                             name={item.name} 
                             price={item.price} 
                             stock={item.stock}
                             description={item.description}
                             category={item.category}
                             codigo={item.codigo}
                       />
                   )}
              )}
          </div>
          </>
      )
  }


export default ItemsList;