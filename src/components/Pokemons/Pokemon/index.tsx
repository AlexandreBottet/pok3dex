import { PokemonList } from "../../../types";

interface Props {
    pokemon: PokemonList
}

const Pokemon = ({ pokemon }: Props) => {
    return (
        <div className='pokemons_card'>
            <img className='pokemons_card_picture' src={pokemon.image} alt={pokemon.name} />
            <h2 className='pokemons_card_name'>#{pokemon.id} {pokemon.name}</h2>
        </div>
    );
};

export default Pokemon;