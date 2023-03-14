import { StyleSheet } from "react-native";
import TextDefault from "../../styles/TextDefault";
import ColorDefault from "../../styles/ColorDefault";

export const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
    },
    image: {
        height: 300,
        width: 300,
        right: -140,
        top: -140,
        position: 'absolute',
        tintColor: 'rgba(0,0,0,0.05)',
    },
    title: {
        ...TextDefault.text,
        fontSize: 40,
        color: ColorDefault.black,
        marginTop: 10,
    }
})