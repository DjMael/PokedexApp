import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ColorDefault from '../../styles/ColorDefault';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        padding: '5%',
      }}>
      <Icon
        name="arrow-left"
        size={30}
        color={ColorDefault.black}
        onPress={() => navigation.goBack()}
      />
      <Icon name="th-list" size={30} color={ColorDefault.black} />
    </View>
  );
};
export default Header;
