import ItemCount from "./itemCount";

const ItemListContainer = (props) => {
    console.log(props);
    return(
        <>
        <h2>Bienvenido! {props.grettins} </h2> 
        <ItemCount/>
    

        
        </>
    )
}

export default ItemListContainer;