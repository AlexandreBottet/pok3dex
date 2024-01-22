import { Link } from "react-router-dom";

import { PokemonList } from "../../../types";

import './Pokemon.css';

interface Props {
    pokemon: PokemonList
}

const Pokemon = ({ pokemon }: Props) => {
    return (
        <div className='pokemons_card'>
            <Link to={`/pokemon/${pokemon.id}`}>
                <img className='pokemons_card_picture' src={pokemon.image} alt={pokemon.name} />
            </Link>
            <h2 className='pokemons_card_name'>#{pokemon.id} {pokemon.name}</h2>
        </div>
    );
};

export default Pokemon;