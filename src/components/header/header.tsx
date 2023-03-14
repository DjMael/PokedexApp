import {Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ColorDefault from '../../styles/ColorDefault';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const Header = ({title}: {title: string}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        margin: '5%',
      }}>
      <View style={styles.header}>
        <Icon
          name="arrow-left"
          size={30}
          color={ColorDefault.black}
          onPress={() => navigation.goBack()}
        />
        <View>
          <Icon name="th-list" size={30} color={ColorDefault.black} />
          <Image
            source={{
              uri: 'https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png',
            }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default Header;
