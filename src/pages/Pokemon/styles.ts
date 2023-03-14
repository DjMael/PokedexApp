import { StyleSheet } from "react-native";
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from "../../styles/TextDefault";

const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        ...TextDefault.text,
        color: ColorDefault.white,
        fontSize: 50,
        fontWeight: 'bold',
    },
    number: {
        ...TextDefault.text,
        color: ColorDefault.white,
        textAlignVertical: 'center',
        fontSize: 20
    },
    image: {
        width: '100%',
        height: 200,
        zIndex: 2
    },
    imagePokeball: {
        position: 'absolute',
        width: '100%',
        height: 200,
        tintColor: 'rgba(255,255,255,0.3)',
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
export default styles;