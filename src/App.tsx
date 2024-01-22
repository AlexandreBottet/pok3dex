import { useState, useEffect } from 'react';

import Header from './components/Header';
import Pokemons from './components/Pokemons';

import pokemonService from './services/pokemonService';

import { PokemonList } from './types';

import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const pokemons = await pokemonService.getAll();
        setPokemons(pokemons);
      } catch (error) {
        console.error('Error fetching pokemons:', error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <>
      <Header />
      <Pokemons pokemons={pokemons} />
    </>
  );
};

export default App;
