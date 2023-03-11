import {View, Text, Image, FlatList, Pressable} from 'react-native';
import styles from './styles';
import ColorDefault from '../../styles/ColorDefault';
import {memo, useEffect, useState} from 'react';
import getTypeColor from '../../utils/typesColor';
import TextDefault from '../../styles/TextDefault';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {RootStackParamList} from '../../types/navigationTypes';
import PokemonType from '../pokemonType/pokemonType';

const PokemonCard = ({pokemon}: {pokemon: IPokemonResponse}) => {
  const [typeColor, setTypeColor] = useState<string>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    let type = pokemon.types.filter(q => q.slot == 1).map(s => s.type.name)[0];
    setTypeColor(getTypeColor(type));
  });

  return (
    <Pressable
      style={{...styles.card, backgroundColor: typeColor}}
      onPress={() => navigation.navigate('Pokemon', {pokemon: pokemon})}>
      <View>
        <Text
          style={{
            ...TextDefault.text,
            color: ColorDefault.white,
            fontSize: 16,
            margin: 10,
          }}>
          {pokemon.name}
        </Text>
        <FlatList
          data={pokemon.types}
          renderItem={({item}) => <PokemonType name={item.type.name} />}
        />
      </View>
      <Image
        source={{
          uri: 'https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png',
        }}
        style={styles.icon}
      />
      <Image
        source={{
          uri: pokemon.sprites.other?.['official-artwork'].front_default,
        }}
        style={styles.image}
      />
    </Pressable>
  );
};
export default memo(PokemonCard);
