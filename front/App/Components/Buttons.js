import {  Pressable, Text, Image, View } from "react-native"
import styles from "../Styles/styles";

import LogoStencil from "../../assets/Stencil.png"
import { useNavigation } from "@react-navigation/native";


const DefaultBtn = ( params ) => {
    const title = params.text;

    return (
        <>
            <Pressable 
                style={styles.DefaultBtn}
                onPress={params.onClick}
            >
                <Text
                    style={styles.DefaultBtnText}
                >{title}</Text>
            </Pressable>
        </>
    )
}

const BrandButton = ( params ) => {

    const navigate = useNavigation();

    return (
        <>
            <Pressable 
                style={styles.StencilContainer}
                onPress={() => navigate.navigate('Home')}
            >
                <Image source={LogoStencil} style={styles.LogoScript} />
            </Pressable>
        </>
    )
}

const MenuButtons = ( params ) => {
    const nav = useNavigation();
    return(
        <Pressable 
            style={ [styles.MenuBtnContainer, params.ContainerStyle] }
            onPress={() => nav.navigate(params.route) }    
        >
            <Image source={params.image} style={[{width:35, height:35}, params.imageStyle]} />
            <Text style={[styles.MenuBtnLabel, params.LabelStyle]}>
                {params.label}
            </Text>
        </Pressable>
    )
}


export {DefaultBtn, BrandButton, MenuButtons}