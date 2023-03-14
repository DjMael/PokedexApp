import {useContext} from 'react';
import {Text, View} from 'react-native';
import {PokemonContext} from '../../contexts/pokemonContext';
import ColorDefault from '../../styles/ColorDefault';

const About = () => {
  const {specie} = useContext(PokemonContext);

  return (
    <View style={{backgroundColor: ColorDefault.green}}>
      <Text style={{color: ColorDefault.white}}>
        {specie?.flavor_text_entries
          .filter(q => q.language.name == 'en')
          .map(q => q.flavor_text)
          .splice(-1)}
      </Text>
    </View>
  );
};
export default About;
