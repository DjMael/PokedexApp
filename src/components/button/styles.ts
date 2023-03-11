import { StyleSheet } from 'react-native';
import ColorDefault from '../../styles/ColorDefault';

const styles = StyleSheet.create({
    button: {
        display: "flex",
        height: 70,
        width: '47%',
        marginVertical: 5,
        borderRadius: 15,
        justifyContent: 'center',
        flexWrap: 'wrap',
        position: 'relative',
        overflow: 'hidden',
    },
    text: {
        marginLeft: '5%',
        fontSize: 16,
        color: ColorDefault.white
    },
    icon: {
        position: 'absolute',
        height: "160%",
        width: "160%",
        right: "-60%",
        opacity: 0.20,
        tintColor: ColorDefault.white,
        resizeMode: 'center'
    }
});

export default styles;