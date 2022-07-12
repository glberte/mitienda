import { useEffect } from "react";
import { useState } from "react";

// const PokeAPIExample = () => {
//     const [pokemon, setPokemon] = useState({});
//     //const [test, setTest] = useState ("test");
//     const url= "https://pokeapi.co/api/v2/pokemon/ditto";
//     useEffect(()=>{
//         fetch(url)
//         .then((res)=> console.log(res))
//         .then((res)=> setPokemon(res) );

//     }),[];
//     return (
//         <>
//         <div>

//         </div>
//         </>
//     )
// }


const PokeAPIExample = () => {
    const [pokemon, setPokemon] = useState({});
    const url = "https://pokeapi.co/api/v2/pokemon/gengar";
    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((res) => setPokemon(res));
    }, []);
    return (
      <>
        <h2>{pokemon.name}</h2>
        {/* <img src={pokemon.sprites.front_default} /> */}
      </>
    );
  };

  export default PokeAPIExample;