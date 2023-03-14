import {Text, View} from 'react-native';
import ColorDefault from '../../styles/ColorDefault';

const BaseStatus = () => {
  return (
    <View style={{backgroundColor: ColorDefault.blue}}>
      <Text style={{color: ColorDefault.red}}>{}</Text>
    </View>
  );
};
export default BaseStatus;
