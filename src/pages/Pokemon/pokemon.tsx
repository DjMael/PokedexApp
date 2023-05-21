import {useContext, useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Characteristics from '../../components/characteristics/characteristics';
import PokemonType from '../../components/pokemonType/pokemonType';
import {PokemonContext} from '../../contexts/pokemonContext';
import PokemonService from '../../services/PokemonService';
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from '../../styles/TextDefault';
import {RootStackScreenProps} from '../../types/navigationTypes';
import getTypeColor from '../../utils/typesColor';
import styles from './styles';

const Pokemon = ({navigation, route}: RootStackScreenProps<'Pokemon'>) => {
  const [typeColor, setTypeColor] = useState<string>();
  const {setSpecie, specie, setPokemon} = useContext(PokemonContext);

  const fetchSpecie = async () => {
    let specieResponse = await PokemonService.GetSpecieById(
      route.params.pokemon.id,
    );
    setSpecie(specieResponse);
  };

  useEffect(() => {
    fetchSpecie();
    setPokemon(route.params.pokemon);

    let type = route.params.pokemon.pokemon_v2_pokemontypes
      .filter(q => q.slot == 1)
      .map(s => s.pokemon_v2_type.name)[0];
    setTypeColor(getTypeColor(type));
  }, []);

  return (
    <View style={{backgroundColor: typeColor, flex: 1}}>
      <View style={{margin: 20}}>
        <Icon
          name="arrow-left"
          size={30}
          color={ColorDefault.white}
          onPress={() => navigation.goBack()}
        />
        <View style={styles.title}>
          <Text style={styles.name}>{route.params.pokemon.name}</Text>
          <Text style={styles.number}>
            #{route.params.pokemon.order.toString().padStart(3, '0')}
          </Text>
        </View>
        <View style={styles.type}>
          <FlatList
            scrollEnabled={false}
            data={route.params.pokemon.pokemon_v2_pokemontypes}
            renderItem={({item}) => (
              <PokemonType name={item.pokemon_v2_type.name} />
            )}
            horizontal={true}
          />
          <Text style={{...TextDefault.text, color: ColorDefault.white}}>
            {specie?.genera.filter(q => q.language.name == 'en')[0].genus}
          </Text>
        </View>
      </View>
      <View style={{zIndex: 1, height: '25%'}}>
        <Image
          source={{
            uri: JSON.parse(
              route.params.pokemon.pokemon_v2_pokemonsprites[0].sprites,
            ).other?.['official-artwork'].front_default,
          }}
          style={styles.image}
          resizeMode={'contain'}
        />
        <Image
          source={{
            uri: 'https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png',
          }}
          style={styles.imagePokeball}
          resizeMode={'contain'}
        />
      </View>
      <Characteristics />
    </View>
  );
};
export default Pokemon;
