import { IPokemonSpecie } from "../Interfaces/Responses/IPokemonSpecie";
import AxiosService from "./AxiosService";

interface IParams {
    limit: number;
    offset: number;
};

const GetPokemons = async (params: IParams): Promise<IBaseResponse<IBaseEntityResponse>> => {
    const instance = AxiosService.createAxiosInstance();
    return (await instance.get('/pokemon', { params })).data;
};

const GetPokemonById = async (id: number | string): Promise<IPokemonResponse> => {
    const instance = AxiosService.createAxiosInstance();
    let uri = '/pokemon/' + id;
    let pokemon = await instance.get(uri);
    return pokemon.data;
};

const GetSpecieById = async (id: number): Promise<IPokemonSpecie> => {
    const instance = AxiosService.createAxiosInstance();
    let uri = '/pokemon-species/' + id;
    let specie = await instance.get(uri);
    return specie.data;
}

export default {
    GetPokemons,
    GetPokemonById,
    GetSpecieById
};