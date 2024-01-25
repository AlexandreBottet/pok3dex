import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PokemonProfil } from "../../../../types";

import pokemonService from "../../../../services/pokemonService";

import './PokemonDetails.css';

const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState<PokemonProfil | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const getOnePokemon = async (id: number) => {
            try {
                const pokemon = await pokemonService.getPokemonById(id);
                setPokemon(pokemon);
            } catch (error) {
                console.error('Error fetching one pokemon:', error);
            }
        };

        if (id) {
            const parsedId = parseInt(id);
            getOnePokemon(parsedId);
        }
    }, [id]);

    const renderTypeSpan = (typeName: string) => {
        const className = typeName.toLowerCase();

        const type = pokemon?.apiTypes.find(type => type.name === typeName);

        if (type) {
            return <span className={`pokemon-details_types-item ${className}`}>{typeName}</span>;
        }

        return null;
    };

    return (
        <div className="pokemon-details">
            <h2 className="pokemon-details__title">Détails de {pokemon?.name}</h2>
            <div className="pokemon-details__content">
                <img className="pokemon-details__picture" src={pokemon?.image} alt={pokemon?.name} />
                <div className="pokemon-details__description">
                <h3 className="pokemon-details__name">#{pokemon?.id} {pokemon?.name}</h3>
                    <div className="pokemon-details__types">
                        {pokemon?.apiTypes.map(type => (
                            <React.Fragment key={type.name}>
                                {renderTypeSpan(type.name)}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className="pokemon-details__stats">
                        <h4 className="pokemon-details__stats-title">Statistiques</h4>
                        <div className="pokemon-details__stats-item">
                            {Object.entries(pokemon?.stats || {}).map((stat, index) => (
                                <div key={index} className="pokemon-details__stat">
                                    <span className="pokemon-details__stat-name">{stat[0]}</span>
                                    <span className="pokemon-details__stat-value">{stat[1]}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonDetails;