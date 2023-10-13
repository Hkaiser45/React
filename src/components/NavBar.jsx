
function NavBar ({pokemonIndex, pokemonList, handleClick, handleClick2}) {
    return <nav>
        {pokemonIndex > 0?<button onClick={handleClick2}>Precedent</button>: <p></p>}
        {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>Suivant</button>: <p></p>}
    </nav>

};
export default NavBar;