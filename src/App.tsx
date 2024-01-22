import { useState, useEffect } from 'react';

import Header from './components/Header';
import Pokemons from './components/Pokemons';

import pokemonService from './services/pokemonService';

import { PokemonList } from './types';

import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemons = await pokemonService.getAll();
        setPokemons(pokemons);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <Header />
      <Pokemons pokemons={pokemons} loading={loading} />
    </>
  );
};

export default App;
