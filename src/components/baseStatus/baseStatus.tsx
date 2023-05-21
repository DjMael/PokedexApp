import {useContext, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {PokemonContext} from '../../contexts/pokemonContext';
import ColorDefault from '../../styles/ColorDefault';
import StatVertcalBar from '../statVerticalBar/statVerticalBar';

const BaseStatus = () => {
  const {pokemon} = useContext(PokemonContext);

  useEffect(() => {}, []);

  return (
    <View style={{backgroundColor: ColorDefault.blue}}>
      <FlatList
        scrollEnabled={false}
        data={pokemon?.stats}
        renderItem={({item}) => <StatVertcalBar stats={item} />}
      />
    </View>
  );
};
export default BaseStatus;
