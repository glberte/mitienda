import Item from "./Item";

const ItemsList = (props)=> {
    return(
        <>
        <div className="row">
            {props.items.map(item => {
                return(
                    <Item key={item.id} 
                          img={item.img}
                          name={item.name} 
                          price={item.price} 
                          stock={item.stock}
                    />
                )
            })}
        </div>
        </>
    )
}


export default ItemsList;