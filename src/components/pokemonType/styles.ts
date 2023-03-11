import { StyleSheet } from "react-native";
import ColorDefault from "../../styles/ColorDefault";

const styles = StyleSheet.create({
    typeText: {
        color: ColorDefault.white,
        textAlign: 'center',
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: 30,
        margin: 2,
        alignSelf: 'flex-start',
        paddingHorizontal: 12
    }
});
export default styles;