import axios from 'axios';
import { useState, useEffect } from 'react';

import Header from './components/Header';
import Pokemons from './components/Pokemons/Index';

import { PokemonList } from './types';

import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonList[]>([]);

  useEffect(() => {
    axios
      .get('https://pokebuildapi.fr/api/v1/pokemon/generation/1')
      .then(response => {
        setPokemons(response.data);
      });
  }, []);

  return (
    <>
      <Header />
      <Pokemons pokemons={pokemons} />
    </>
  );
};

export default App;
