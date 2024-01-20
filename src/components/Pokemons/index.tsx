import './Pokemons.css';

const Pokemons = () => {

    return (
        <div className="pokemons">
            <div className="pokemon">
                <img className="pokemon_picture" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
                <h2 className="pokemon_name">#1 Bulbasaur</h2>
            </div>
            <div className="pokemon">
                <img className="pokemon_picture" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
                <h2 className="pokemon_name">#1 Bulbasaur</h2>
            </div>
            <div className="pokemon">
                <img className="pokemon_picture" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
                <h2 className="pokemon_name">#1 Bulbasaur</h2>
            </div>
        </div>
    );
};

export default Pokemons;