function NavBar ({pokemonList,setPokemonIndex}) {
    const handleClick = (index) =>{
        setPokemonIndex(index)
      }; 
    return <nav>
        {pokemonList.map((pokemon , index)=>(
            <button key={index} onClick={() => handleClick(index)}>{pokemon.name}</button>
        )
        )}
    </nav>

};
export default NavBar;