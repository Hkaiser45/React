import { useState } from "react";
import PokemonCard from "./components/PokemonCard";


function App() {
  const pokemonList = [

    {
    
        name: "bulbasaur",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    
      },
    
      {
    
        name: "charmander",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    
      },
    
      {
    
        name: "squirtle",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    
      },
    
      {
    
        name: "pikachu",
    
        imgSrc:
    
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    
      },
    
      {
    
        name: "mew",
    
      },
    
    ];
  
  const [pokemonIndex, setPokemonIndex]= useState(0);
  console.log(pokemonIndex);

  const pokemon = pokemonList[0];


  const handleClick= ()=>{
  setPokemonIndex(pokemonIndex +1);
  };
  const handleClick2= ()=> {
    setPokemonIndex(pokemonIndex -1)
  };
  


  
  
  return (<div>
    <PokemonCard  pokemon={pokemonList[pokemonIndex]}  />
    {pokemonIndex > 0?<button onClick={handleClick2}>Precedent</button>: <p></p>}
   {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button>: <p></p>}
  </div>
  )
};

export default App

