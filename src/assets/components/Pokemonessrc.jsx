import "./Pokemonessrc.css"

const Pokemonessrc = ({pokemones,position}) =>  {
    return (
        <div className="Screenpokemon">
            {pokemones.map((pokemon,idx)=>(
                <>
                    <div key={pokemon.id} className="pokemon-item" style={{backgroundColor: idx == position ? 'red': 'transparent'}}>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                </>
            ))}
        </div>
    );
};

export default Pokemonessrc