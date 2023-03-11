import AxiosService from "./AxiosService";

interface IParams {
    limit: number;
    offset: number;
};

export const GetPokemons = async (params: IParams): Promise<IBaseResponse<IBaseEntityResponse>> => {
    const instance = AxiosService.createAxiosInstance();
    return (await instance.get('/pokemon', { params })).data;
};

export const GetPokemonById = async (id: number | string): Promise<IPokemonResponse> => {
    const instance = AxiosService.createAxiosInstance();
    let uri = '/pokemon/' + id;
    let pokemon = await instance.get(uri);
    return pokemon.data;
};

export default {
    GetPokemons,
    GetPokemonById
};