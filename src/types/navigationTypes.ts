import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IPokemonSpecie } from '../Interfaces/Responses/IPokemonSpecie';

export type RootStackParamList = {
    Home: undefined;
    Pokedex: undefined;
    Pokemon: PokemonParamList;
};

export type PokemonCaracteristcsParamList = {
    About: IPokemonSpecie;
    BaseStatus: IPokemonSpecie;
    Evolution: IPokemonSpecie;
    Moves: IPokemonSpecie;
}

export type PokemonCaracteristcsScreenProps<T extends keyof PokemonCaracteristcsParamList> =
    NativeStackScreenProps<PokemonCaracteristcsParamList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type PokemonParamList = {
    pokemon: IPokemonResponse;
};