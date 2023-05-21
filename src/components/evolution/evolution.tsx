import {useContext, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {PokemonContext} from '../../contexts/pokemonContext';
import PokemonService from '../../services/PokemonService';
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from '../../styles/TextDefault';

const Evolution = () => {
  const [evolution, setEvolution] = useState<IEvolutionChainResponse>();

  const {specie, pokemon} = useContext(PokemonContext);

  const fetchEvolution = async () => {
    let evo = await PokemonService.GetEvolutionChain(
      +specie?.evolution_chain.url.split('/')[6]!,
    );
    setEvolution(evo);
  };

  useEffect(() => {
    fetchEvolution();
  }, []);

  const evolvesTo = () => {};

  return (
    <View>
      <Text style={{...TextDefault.text, color: ColorDefault.black}}>
        Evolution Chain
      </Text>
      <View></View>
    </View>
  );
};

export default Evolution;
