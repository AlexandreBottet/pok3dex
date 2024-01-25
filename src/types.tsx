export interface PokemonProfil {
    id: number;
    name: string;
    image: string;
    stats: {
        HP: string;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
    apiTypes: Types[];
}

export type PokemonList = Pick <PokemonProfil, "id" | "image" | "name">

export interface Types {
    id: number;
    name: string;
}