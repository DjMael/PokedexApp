import { TextInput, View, Pressable } from 'react-native';
import styles from './styles';
import ColorDefault from '../../styles/ColorDefault';
import Icon from 'react-native-vector-icons/FontAwesome';
import TextDefault from '../../styles/TextDefault';

interface ISearch{
    placeholder: string;
}

const Search= ({placeholder}: ISearch) => {return (
    <View style={{...styles.search}}>
        <Icon name='search' size={30} color={'black'}/>
        <TextInput
            placeholder={placeholder} 
            placeholderTextColor={ColorDefault.lightGray}
            style={{...TextDefault.text, fontSize:14, color:ColorDefault.black}}/>
    </View>
)}
export default Search;