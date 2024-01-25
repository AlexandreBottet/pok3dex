import axios from "axios";

import { PokemonList, PokemonProfil } from '../types';

const baseUrl: string = 'https://pokebuildapi.fr/api/v1';

const getAll = async (): Promise<PokemonList[]> => {
    const { data } = await axios.get<PokemonList[]>(`${baseUrl}/pokemon/generation/1`);
    return data;
};

const getPokemonById = async (id: number): Promise<PokemonProfil> => {
    const { data } = await axios.get<PokemonProfil>(`${baseUrl}/pokemon/${id}`);
    return data;
};

export default { 
    getAll,
    getPokemonById
};