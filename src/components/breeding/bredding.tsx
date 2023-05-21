import {useContext, useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PokemonContext} from '../../contexts/pokemonContext';
import ColorDefault from '../../styles/ColorDefault';
import styles from '../about/styles';

const Breeding = () => {
  const [eggs, setEggs] = useState<Array<string>>();
  const {specie} = useContext(PokemonContext);

  useEffect(() => {
    let listEggs = specie?.egg_groups.map(s => s.name);
    setEggs(listEggs);
  }, [specie]);

  return (
    <View>
      <Text style={styles.propertyText}> Breeding</Text>
      <View style={styles.subProperty}>
        <Text style={styles.propertySubText}>Gender</Text>
        <View style={{flexDirection: 'row', width: '33.3%'}}>
          <Icon name="male" size={20} color={ColorDefault.blue} />
          <Text style={styles.propertyText}>
            {100 - (specie?.gender_rate! / 8) * 100}%
          </Text>
        </View>
        <View style={styles.subProperty}>
          <Icon name="female" size={20} color={ColorDefault.pink} />
          <Text style={styles.propertyText}>
            {(specie?.gender_rate! / 8) * 100}%
          </Text>
        </View>
      </View>
      <View style={styles.subProperty}>
        <Text style={styles.propertySubText}>Egg Groups</Text>
        <View style={{flexDirection: 'row', width: '33.3%'}}>
          <FlatList
            scrollEnabled={false}
            data={eggs}
            renderItem={({item}) => (
              <Text style={styles.propertyText}>{item}</Text>
            )}
          />
        </View>
      </View>
      <View style={styles.subProperty}>
        <Text style={styles.propertySubText}>Growth Rate</Text>
        <View style={{flexDirection: 'row', width: '33.3%'}}>
          <Text style={styles.propertyText}>{specie?.growth_rate.name}</Text>
        </View>
      </View>
    </View>
  );
};

export default Breeding;
