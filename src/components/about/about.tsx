import {useContext} from 'react';
import {Text, View} from 'react-native';
import {PokemonContext} from '../../contexts/pokemonContext';
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from '../../styles/TextDefault';
import Breeding from '../breeding/bredding';
import styles from './styles';

const About = () => {
  const {specie} = useContext(PokemonContext);

  return (
    <View style={{marginHorizontal: 20, marginVertical: 10}}>
      {specie && (
        <Text
          style={{
            ...TextDefault.text,
            color: ColorDefault.black,
            fontSize: 15,
          }}>
          {specie?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonspeciesflavortexts
            .map(q => q.flavor_text)
            .splice(-1)}
        </Text>
      )}
      <View style={styles.sizePokemon}>
        <View style={styles.property}>
          <Text style={styles.propertyText}>Height</Text>
          <Text style={styles.propertyText}>
            {(specie?.height! * 0.328082).toFixed(2)}"(
            {(specie?.height! / 10).toFixed(2)} cm)
          </Text>
        </View>
        <View style={styles.property}>
          <Text style={styles.propertyText}>Weight</Text>
          <Text style={styles.propertyText}>
            {(specie?.weight! / 4.536).toFixed(1)} lbs(
            {specie?.weight! / 10} kg)
          </Text>
        </View>
      </View>
      <Breeding />
    </View>
  );
};
export default About;
