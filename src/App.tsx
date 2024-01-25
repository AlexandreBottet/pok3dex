import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Pokemons from './components/Pokemons';
import PokemonDetails from './components/Pokemons/Pokemon/PokemonDetails';

import pokemonService from './services/pokemonService';

import { PokemonList } from './types';

import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);
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

  return (
    <>
       <Header />
       <Routes>
          <Route path='/pokemon/:id' element={<PokemonDetails />} />
          <Route path='/' element={<Pokemons pokemons={pokemons} loading={loading} />} />
       </Routes>
    </>
  );
};

export default App;
