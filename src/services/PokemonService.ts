import { IPokemonSpecie } from "../Interfaces/Responses/IPokemonSpecie";
import AxiosService from "./AxiosService";

interface IParams {
    limit: number;
    offset: number;
};

const GetPokemonHomeGraph = async (params: IParams): Promise<Array<IHomePokemons>> => {
    const instance = AxiosService.createAxiosGraphInstance();
    return (await instance.post("", {
        query: `query HomePokemonQuery {
        pokemon_v2_pokemon(limit: ${params.limit}, offset: ${params.offset}, order_by: {id: asc}) {
          id
          name
          pokemon_v2_pokemontypes {
            id
            slot
            pokemon_v2_type {
              name
              id
              generation_id
            }
          }
          pokemon_v2_pokemonsprites {
            sprites
            id
          }
        }
      }`})).data.data.pokemon_v2_pokemon;
}

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

const GetEvolutionChain = async (id: number): Promise<IEvolutionChainResponse> => {
    const instance = AxiosService.createAxiosInstance();
    let uri = '/evolution-chain/' + id;
    let specie = await instance.get(uri);
    return specie.data;
}
export default {
    GetPokemons,
    GetPokemonById,
    GetSpecieById,
    GetEvolutionChain,
    GetPokemonHomeGraph
};