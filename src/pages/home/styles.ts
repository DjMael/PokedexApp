import { StyleSheet } from "react-native";
import ColorDefault from '../../styles/ColorDefault';

const styles = StyleSheet.create({
    homePage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        alignContent: 'center',
    },
    icon: {
        position: 'absolute',
        right: -150,
        top: -200,
        height: 350,
        width: 350,
        resizeMode: 'contain',
        tintColor: ColorDefault.black,
        opacity: 0.05
    },
    view: {
        height: '100%',
        justifyContent: "space-evenly",
        padding: '2%',
        position: 'relative',
        backgroundColor: ColorDefault.white
    }
});

export default styles;