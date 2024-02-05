import Pokemon from './Pokemon';

import { PokemonWithoutDetails } from '../../types';

import './Pokemons.css';

interface Props {
    pokemons: PokemonWithoutDetails[],
    loading: boolean
}

const Pokemons = ({ pokemons, loading }: Props) => {

    if (loading) {
        return <p style={{ textAlign: 'center', marginTop: '1rem'}}>Les pokemons sont partis mangés, ils arrivent...</p>;
    }

    return (
         <div className="pokemons">
            {pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
         </div>
    );
};

export default Pokemons;