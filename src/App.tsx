import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import Header from './components/Header';
import PokemonDetails from './pages/PokemonDetails';
import TypesList from './components/TypesList';

import './App.css';


const App = () => {

  return (
    <>
       <Header />
       <Routes>
          <Route path='/pokemon/:id' element={<PokemonDetails />} />
          <Route path='/types' element={<TypesList />} />
          <Route path='/' element={<Home />} />
       </Routes>
    </>
  );
};

export default App;
