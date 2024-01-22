import axios from "axios";

import { PokemonList } from '../types';

const baseUrl: string = 'https://pokebuildapi.fr/api/v1/pokemon/generation/1';

const getAll = async (): Promise<PokemonList[]> => {
    const { data } = await axios.get<PokemonList[]>(baseUrl);
    return data;
};

export default { getAll };