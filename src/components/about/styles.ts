import { StyleSheet } from "react-native";
import ColorDefault from '../../styles/ColorDefault';
import TextDefault from "../../styles/TextDefault";

const styles = StyleSheet.create({
    sizePokemon: {
        flexDirection: 'row',
        backgroundColor: ColorDefault.white,
        borderRadius: 20,
        elevation: 2,
        marginVertical: 25
    },
    property: {
        width: '50%',
        padding: 15
    },
    propertyText: {
        ...TextDefault.text,
        color: ColorDefault.black
    },
    propertySubText: {
        ...TextDefault.text,
        color: ColorDefault.lightGray,
        width: "33.3%",
    },
    subProperty: {
        flexDirection: 'row',
        marginVertical: 5
    }
});
export default styles;