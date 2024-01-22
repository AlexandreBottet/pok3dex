import Pokemon from './Pokemon';

import { PokemonList } from '../../types';
import './Pokemons.css';

interface Props {
    pokemons: PokemonList[]
}

const Pokemons = ({ pokemons }: Props) => {
    return (
         <div className="pokemons">
            {pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
         </div>
    );
};

export default Pokemons;