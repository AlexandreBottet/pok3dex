import { PokemonList } from '../../types';
import './Pokemons.css';

interface Props {
    pokemons: PokemonList[]
}

const Pokemons = ({ pokemons }: Props) => {
    return (
         <div className="pokemons">
            {pokemons.map(pokemon => (
                <div key={pokemon.id} className='pokemons_card'>
                    <img className='pokemons_card_picture' src={pokemon.image} alt={pokemon.name} />
                    <h2 className='pokemons_card_name'>#{pokemon.id} {pokemon.name}</h2>
                </div>
            ))}
         </div>
    );
};

export default Pokemons;