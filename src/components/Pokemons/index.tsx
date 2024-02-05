import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PokemonWithoutDetails } from '../../types';

import pokemonService from '../../services/pokemonService';

import './Pokemons.css';

const Pokemons = () => {

    const [pokemons, setPokemons] = useState<PokemonWithoutDetails[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getPokemons = async () => {
        try {
          const pokemons = await pokemonService.getAll();
          setPokemons(pokemons);
        } catch (error) {
          console.error('Error fetching pokemons:', error);
        } finally {
          setLoading(false);
        }
      };
  
      getPokemons();
    }, []);

    if (loading) {
        return <p style={{ textAlign: 'center', marginTop: '1rem'}}>Les pokemons sont partis mangés, ils arrivent...</p>;
    }

    return (
         <div className="pokemons">
            {pokemons.map(pokemon => (
                <div key={pokemon.id} className='pokemons_card'>
                    <Link to={`/pokemon/${pokemon.id}`}>
                        <img className='pokemons_card_picture' src={pokemon.image} alt={pokemon.name} />
                    </Link>
                    <h2 className='pokemons_card_name'>#{pokemon.id} {pokemon.name}</h2>
            </div>
            ))}
         </div>
    );
};

export default Pokemons;