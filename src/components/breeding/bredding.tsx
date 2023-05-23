import {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PokemonContext} from '../../contexts/pokemonContext';
import ColorDefault from '../../styles/ColorDefault';
import styles from '../about/styles';

const Breeding = () => {
  const {specie} = useContext(PokemonContext);

  return (
    <View>
      <Text style={styles.propertyText}> Breeding</Text>
      <View style={styles.subProperty}>
        <Text style={styles.propertySubText}>Gender</Text>
        <View style={{flexDirection: 'row', width: '33.3%'}}>
          <Icon name="male" size={20} color={ColorDefault.blue} />
          <Text style={styles.propertyText}>
            {100 - (specie?.pokemon_v2_pokemonspecy.gender_rate! / 8) * 100}%
          </Text>
        </View>
        <View style={styles.subProperty}>
          <Icon name="female" size={20} color={ColorDefault.pink} />
          <Text style={styles.propertyText}>
            {(specie?.pokemon_v2_pokemonspecy.gender_rate! / 8) * 100}%
          </Text>
        </View>
      </View>
      <View style={styles.subProperty}>
        <Text style={styles.propertySubText}>Egg Groups</Text>
        <View style={{flexDirection: 'row', width: '33.3%'}}>
          <FlatList
            scrollEnabled={false}
            data={specie?.pokemon_v2_pokemonspecy.pokemon_v2_pokemonegggroups}
            renderItem={({item}) => (
              <Text style={styles.propertyText}>
                {item.pokemon_v2_egggroup.name}
              </Text>
            )}
          />
        </View>
      </View>
      <View style={styles.subProperty}>
        <Text style={styles.propertySubText}>Growth Rate</Text>
        <View style={{flexDirection: 'row', width: '33.3%'}}>
          <Text style={styles.propertyText}>
            {specie?.pokemon_v2_pokemonspecy.pokemon_v2_growthrate.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Breeding;
