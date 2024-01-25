import React, { useState, useEffect } from 'react';

import './Types.css';

import { Types } from '../../types';

import typeService from '../../services/typeService';

const TypesList = () => {
    const [types, setTypes] = useState<Types[]>([]);

    useEffect(() => {
        const getTypes = async () => {
          try {
            const types = await typeService.getAllTypes();
            setTypes(types);
          } catch (error) {
            console.error('Error fetching types:', error);
          }
        };
    
        getTypes();
      }, []);

      const renderTypeDiv = (typeName: string) => {
        const className = typeName.toLowerCase();

        const type = types.find(type => type.name === typeName);

        if (type) {
            return <div className={`type ${className}`}>{typeName}</div>;
        }

        return null;
    };

    return (
        <>
            <p>Listes des types disponibles</p>
            <div className="types">
                {types.map(type => (
                  <React.Fragment key={type.name}>
                    {renderTypeDiv(type.name)}
                  </React.Fragment>
                ))}
            </div>
        </>
    );  
};

export default TypesList;

