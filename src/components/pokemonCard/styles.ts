import { StyleSheet } from "react-native";
import ColorDefault from '../../styles/ColorDefault';

const styles = StyleSheet.create({
    card: {
        margin: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,
        width: "49%",
        height: 120
    },
    image: {
        width: 100,
        height: 100,
        right: 0,
        bottom: 0,
        zIndex: 10,
        position: 'absolute'
    },
    icon: {
        position: 'absolute',
        height: 90,
        width: 90,
        opacity: 0.30,
        tintColor: ColorDefault.white,
        resizeMode: 'center',
        right: 0,
        bottom: 0,
        zIndex: 1
    }
});
export default styles;