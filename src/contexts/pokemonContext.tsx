import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {IPokemonSpecie} from '../Interfaces/Responses/IPokemonSpecie';

interface PokemonContextData {
  pokemon: IPokemonResponse | undefined;
  specie: IPokemonSpecie | undefined;
  setPokemon: (pk: IPokemonResponse) => void;
  setSpecie: (pk: IPokemonSpecie) => void;
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider = ({children}: {children: ReactNode}) => {
  const [pokemon, setStatePokemon] = useState<IPokemonResponse>();
  const [specie, setStateSpecie] = useState<IPokemonSpecie>();

  const setPokemon = useCallback(
    (pk: IPokemonResponse) => {
      setStatePokemon(pk);
    },
    [setStatePokemon],
  );

  const setSpecie = useCallback(
    (pk: IPokemonSpecie) => {
      setStateSpecie(pk);
    },
    [setStateSpecie],
  );

  const contextValue = useMemo(
    () => ({
      setPokemon,
      setSpecie,
      pokemon,
      specie,
    }),
    [setPokemon, setSpecie, pokemon, specie],
  );

  console.log(contextValue);

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
