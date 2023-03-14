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
  const [loaded, setLoaded] = useState<boolean>(false);

  const {setSpecie, specie} = useContext(PokemonContext);

  const fetchSpecie = async () => {
    let specieResponse = await PokemonService.GetSpecieById(
      route.params.pokemon.id,
    );
    console.log(setSpecie);
    setSpecie(specieResponse);
    setLoaded(true);
  };

  useEffect(() => {
    fetchSpecie();

    let type = route.params.pokemon.types
      .filter(q => q.slot == 1)
      .map(s => s.type.name)[0];
    setTypeColor(getTypeColor(type));
  }, []);

  return (
    <View style={{backgroundColor: typeColor}}>
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
            data={route.params.pokemon.types}
            renderItem={({item}) => <PokemonType name={item.type.name} />}
            horizontal={true}
          />
          <Text style={{...TextDefault.text, color: ColorDefault.white}}>
            {specie?.genera.filter(q => q.language.name == 'en')[0].genus}
          </Text>
        </View>
      </View>
      <View style={{zIndex: 1}}>
        <Image
          source={{
            uri: route.params.pokemon.sprites.other?.['official-artwork']
              .front_default,
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
      <View
        style={{
          backgroundColor: ColorDefault.white,
          width: '100%',
          height: '100%',
          top: -30,
          paddingVertical: 30,
          zIndex: 0,
          borderRadius: 40,
        }}>
        <Characteristics />
      </View>
    </View>
  );
};
export default Pokemon;
