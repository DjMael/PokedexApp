import React from "react";
import { Image, Pressable, Text } from 'react-native';
import styles from './styles';
import TextDefault from "../../styles/TextDefault";

interface IButton{
    title: string;
    onPress?: () => void;
    backgroundColor?: string
}

const image = {uri: "https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png"}

const Button = ({title,onPress,backgroundColor}: IButton) => {
    return (
    <Pressable onPress={onPress} style={{...styles.button, backgroundColor:backgroundColor}}>
        <Image source={image} style={{...styles.icon}}/>
        <Text style={{...TextDefault.text, ...styles.text}}>{title}</Text>
    </Pressable>
    )
}
export default Button;