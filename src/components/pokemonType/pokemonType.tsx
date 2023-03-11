import {View, Text} from 'react-native';
import styles from './styles';

const PokemonType = ({name}: {name: string}) => {
  return <Text style={styles.typeText}>{name}</Text>;
};

export default PokemonType;
