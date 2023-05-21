import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import {memo, useLayoutEffect, useState} from 'react';
import {FlatList, Image, Pressable, Text, View} from 'react-native';
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from '../../styles/TextDefault';
import {RootStackParamList} from '../../types/navigationTypes';
import getTypeColor from '../../utils/typesColor';
import PokemonType from '../pokemonType/pokemonType';
import styles from './styles';

const PokemonCard = ({pokemon}: {pokemon: IHomePokemons}) => {
  const [typeColor, setTypeColor] = useState<string>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    let type = pokemon.pokemon_v2_pokemontypes
      .filter(q => q.slot == 1)
      .map(s => s.pokemon_v2_type.name)[0];
    setTypeColor(getTypeColor(type));
  });

  return (
    <Pressable
      style={{...styles.card, backgroundColor: typeColor}}
      onPress={() => navigation.navigate('Pokemon', {pokemon: pokemon})}>
      <View style={{margin: 15}}>
        <Text
          style={{
            ...TextDefault.text,
            color: ColorDefault.white,
            fontSize: 16,
          }}>
          {pokemon.name}
        </Text>
        <FlatList
          data={pokemon.pokemon_v2_pokemontypes}
          renderItem={({item}) => (
            <PokemonType name={item.pokemon_v2_type.name} />
          )}
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
          uri: JSON.parse(pokemon.pokemon_v2_pokemonsprites[0].sprites).other[
            'official-artwork'
          ].front_default.replace(
            '/media',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master',
          ),
        }}
        style={styles.image}
      />
    </Pressable>
  );
};
export default memo(PokemonCard);
