import {  Pressable, Text, Image, View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import styles from "../Styles/styles";
import LogoStencil from "../../assets/Stencil.png"
import SearchLogo from "../../assets/Icons/Search.png"
import GasLogo from "../../assets/Icons/Gas.png"
import RestaurantLogo from "../../assets/Icons/Restaurant.png"
import HospitalLogo from "../../assets/Icons/Hospital.png"

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

const SearchButton = ( params ) => {
    const nav = useNavigation();
    const [tools, setTools] = useState(false);

    const searchClicked = () => {
        if(!tools){
            setTools(!tools);
            return;
        }
        nav.navigate("Search");
        // console.log(params.userLocation);

    }

    const renderTools = () => {
        if(tools){
            return(
                <>
                    <Pressable onPress={() => setTools(!tools)} style={styles.ClickBackgroundToReturn}/>

                    <View style={styles.SearchToolsContainer}>
                        <MenuToolCircleBtn image={GasLogo} label={"Gas"} showLabel={tools} />
                        <MenuToolCircleBtn image={HospitalLogo} label={"Hospital"} showLabel={tools} />
                        <MenuToolCircleBtn image={RestaurantLogo} label={"Restaurant"} showLabel={tools} />
                    </View>
                </>
            )
        }
    }

    const renderLabel = ( label ) => {
        if(tools){
            return(
                <Text style={styles.SearchBtnLabel}>{label}</Text>
            )
        }
    }
    return(
        <>
            {renderTools()}
            <View style={styles.SearchContainer}  >
                {renderLabel("Search")}
                <Pressable onPress={() => searchClicked()} style={styles.SearchBtnContainer}>
                    <Image source={SearchLogo}  style={styles.SearchBtnLogo}  />
                </Pressable>
            </View>
        </>
    )
}

const MenuToolCircleBtn = ( params ) => {
    const renderLabel = ( label ) => {
        if(params.showLabel){
            return(
                <Text style={styles.SearchBtnLabel}>{label}</Text>
            )
        }
    }
    return(
        <>
        <View style={styles.ToolContainer}>
            {renderLabel(params.label)}
            <Pressable style={styles.CircleBtnContainer}>
                <Image source={params.image} style={styles.CircleBtnLogo} />
            </Pressable>
        </View>
        </>
    )
}

export {DefaultBtn, BrandButton, MenuButtons, SearchButton}