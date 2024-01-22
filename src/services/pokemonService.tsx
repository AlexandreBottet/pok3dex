import axios from "axios";

import { Pokemons } from '../types';

const baseUrl: string = 'https://pokebuildapi.fr/api/v1';

const getAll = async (): Promise<Pokemons[]> => {
    const { data } = await axios.get<Pokemons[]>(baseUrl);
    return data;
};

export default getAll;