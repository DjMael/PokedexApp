import React, {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface PokemonContextData {
  pokemon: IHomePokemons | undefined;
  specie: IPokemonDescrpitSpecie | undefined;
  setPokemon: (pk: IHomePokemons) => void;
  setSpecie: (pk: IPokemonDescrpitSpecie) => void;
}

export const PokemonContext = createContext<PokemonContextData>(
  {} as PokemonContextData,
);

const PokemonProvider = ({children}: {children: ReactNode}) => {
  const [pokemon, setStatePokemon] = useState<IHomePokemons>();
  const [specie, setStateSpecie] = useState<IPokemonDescrpitSpecie>();

  const setPokemon = useCallback(
    (pk: IHomePokemons) => {
      setStatePokemon(pk);
    },
    [setStatePokemon],
  );

  const setSpecie = useCallback(
    (pk: IPokemonDescrpitSpecie) => {
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

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
