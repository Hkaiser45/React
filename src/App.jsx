import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";


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
    <NavBar pokemonIndex={pokemonIndex} pokemonList={pokemonList} handleClick={handleClick} handleClick2={handleClick2}/>
    <PokemonCard  pokemon={pokemonList[pokemonIndex]}  /> 
  </div>
  )
};

export default App

