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
          order
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

const GetPokemonSpecieGraph = async (number: number): Promise<IPokemonDescrpitSpecie> => {
  const instance = AxiosService.createAxiosGraphInstance();
  return (await instance.post("", {
    query: `query PokemonQuery {
      pokemon_v2_pokemon_by_pk(id: ${number}) {
        pokemon_v2_pokemonspecy {
          pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}) {
            flavor_text
            language_id
            pokemon_v2_version {
              name
            }
          }
          gender_rate
          pokemon_v2_pokemonegggroups {
            pokemon_v2_egggroup {
              name
            }
          }
          pokemon_v2_growthrate {
            name
            formula
          }
          pokemon_v2_evolutionchain {
            pokemon_v2_pokemonspecies {
              name
              order
            }
          }
        }
        weight
        pokemon_v2_pokemonstats {
          base_stat
          effort
          pokemon_v2_stat {
            name
          }
        }
        height
      }
    }`
  })).data.data.pokemon_v2_pokemon_by_pk;
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
  GetPokemonHomeGraph,
  GetPokemonSpecieGraph
};