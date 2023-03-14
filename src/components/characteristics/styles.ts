import { StyleSheet } from 'react-native';
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from '../../styles/TextDefault';
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30
    },
    text:
    {
        ...TextDefault.text,
        color: ColorDefault.black
    },
    button: {
        backgroundColor: ColorDefault.red,
        paddingVertical: 20,
        paddingHorizontal: 5,
    }
});
export default styles;