export interface PokemonDetails {
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
    types: Types[];
}

export type PokemonList = Pick <PokemonDetails, "id" | "image" | "name">

export interface Types {
    name: string;
}