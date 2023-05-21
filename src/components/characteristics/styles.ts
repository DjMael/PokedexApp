import { StyleSheet } from 'react-native';
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from '../../styles/TextDefault';
const styles = StyleSheet.create({
    headerCaracteristics: {
        backgroundColor: ColorDefault.white,
        // marginTop: -10,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flexGrow: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    text:
    {
        ...TextDefault.text,
        color: ColorDefault.black,
        fontSize: 16
    },
    button: {
        paddingVertical: 30,
        paddingHorizontal: 5,
    }
});
export default styles;