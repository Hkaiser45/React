import PropTypes from "prop-types";

function PokemonCard ({pokemon}) {
  

  

    return <figure>{pokemon.imgSrc?
        <img src={pokemon.imgSrc}></img> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
        </figure> 
};

PokemonCard.propTypes={
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,

}
 export default PokemonCard;

 