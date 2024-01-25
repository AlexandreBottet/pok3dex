import axios from "axios";

import { Types } from '../types';

const baseUrl: string = 'https://pokebuildapi.fr/api/v1';

const getAllTypes = async (): Promise<Types[]> => {
    const { data } = await axios.get<Types[]>(`${baseUrl}/types`);
    return data;
};


export default { 
    getAllTypes
};