import React from 'react';
import {Alert, Image, Text, View} from 'react-native';
import Button from '../../components/button/button';
import Search from '../../components/search/search';
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from '../../styles/TextDefault';
import styles from './styles';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.view}>
      <Image
        source={{
          uri: 'https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png',
        }}
        style={styles.icon}
      />
      <Text
        style={[TextDefault.text, {fontSize: 40, color: ColorDefault.black}]}>
        {'What Pokemon\nare you looking for?'}
      </Text>
      <Search placeholder="Search Pokemon, Moves, Ability, etc" />
      <View style={{...styles.homePage}}>
        <Button
          title="Pokemon"
          onPress={() => navigation.navigate('Pokedex')}
          backgroundColor={ColorDefault.green}
        />
        <Button
          title="Moves"
          onPress={() => Alert.alert('press')}
          backgroundColor={ColorDefault.red}></Button>
        <Button
          title="Abilities"
          onPress={() => Alert.alert('press')}
          backgroundColor={ColorDefault.blue}></Button>
        <Button
          title="Itens"
          onPress={() => Alert.alert('press')}
          backgroundColor={ColorDefault.yellow}></Button>
        <Button
          title="Locations"
          onPress={() => Alert.alert('press')}
          backgroundColor={ColorDefault.purple}></Button>
        <Button
          title="Types Charts"
          onPress={() => Alert.alert('press')}
          backgroundColor={ColorDefault.brown}></Button>
      </View>
    </View>
  );
};
export default Home;
