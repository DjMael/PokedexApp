import {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import PokemonType from '../../components/pokemonType/pokemonType';
import {RootStackScreenProps} from '../../types/navigationTypes';
import getTypeColor from '../../utils/typesColor';
import styles from './styles';
import ColorDefault from '../../styles/ColorDefault';

const Pokemon = ({navigation, route}: RootStackScreenProps<'Pokemon'>) => {
  const [typeColor, setTypeColor] = useState<string>();

  useEffect(() => {
    let type = route.params.pokemon.types
      .filter(q => q.slot == 1)
      .map(s => s.type.name)[0];
    setTypeColor(getTypeColor(type));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: typeColor}}>
      <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
        <View>
          <Text
            style={{
              color: ColorDefault.white,
              fontSize: 50,
              fontWeight: 'bold',
            }}>
            {route.params.pokemon.name}
          </Text>
          <FlatList
            data={route.params.pokemon.types}
            renderItem={({item}) => <PokemonType name={item.type.name} />}
            horizontal={true}
          />
        </View>
        <Text
          style={{
            color: ColorDefault.white,
            backgroundColor: 'black',
            display: 'flex',
            alignSelf: 'baseline',
          }}>
          {route.params.pokemon.order.toString().padStart(3, '0')}
        </Text>
      </View>
      <Image
        source={{
          uri: route.params.pokemon.sprites.other?.['official-artwork']
            .front_default,
        }}
        style={styles.image}
        resizeMode={'center'}
      />
    </View>
  );
};
export default Pokemon;
