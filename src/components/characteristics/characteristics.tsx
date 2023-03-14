import {useCallback, useContext, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {PokemonContext} from '../../contexts/pokemonContext';
import About from '../about/about';
import BaseStatus from '../baseStatus/baseStatus';
import Evolution from '../evolution/evolution';
import Moves from '../moves/moves';
import styles from './styles';

const Characteristics = () => {
  const [screen, setScreen] = useState<string>('About');

  const {specie} = useContext(PokemonContext);

  const verifyScreen = useCallback(() => {
    switch (screen) {
      case 'About':
        return <About />;
      case 'BaseStatus':
        return <BaseStatus />;
      case 'Evolution':
        return <Evolution />;
      case 'Moves':
        return <Moves />;
      default:
        return null;
    }
  }, [screen]);

  return (
    <View>
      <View style={styles.header}>
        <Pressable style={styles.button} onPress={() => setScreen('About')}>
          <Text style={styles.text}>About</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => setScreen('BaseStatus')}>
          <Text style={styles.text}>Base Stauts</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setScreen('Evolution')}>
          <Text style={styles.text}>Evolution</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setScreen('Moves')}>
          <Text style={styles.text}>Moves</Text>
        </Pressable>
      </View>
      <View>{verifyScreen()}</View>
    </View>
  );
};
export default Characteristics;
