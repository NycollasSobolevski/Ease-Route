import { TextInput, Text, View, Image, Pressable } from "react-native"
import styles from "../Styles/styles"
import SearchLogo from "../../assets/Icons/Search.png"
import { useState } from "react"
import GeoapifyService from "../Services/geoapify"


const EmailInput = (props) => {
    const title = () => {
        if(props.title)
        {
            return (
                <Text style={styles.DefaultInputLabel}>{props.title}</Text>
            )
        }
    }

    return (
        <View style={styles.InputContainer}>
            {title()}
            <TextInput
                placeholderTextColor={"#797575cb"} 
                style={styles.DefaultInput}
                type="email" 
                keyboardType="email-address"
                placeholder={props.placeholder} 
                onChangeText={props.onChange} 
                value={props.value} 
            />
        </View>
    )
}
const PasswordInput = (props) => {
    const title = () => {
        if(props.title)
        {
            return (
                <Text 
                    style={styles.DefaultInputLabel}>{props.title}</Text>
            )
        }
    }
    
    return (
        
        <View style={styles.InputContainer}>
            {title()}
            <TextInput
                placeholderTextColor={"#797575cb"} 
                style={styles.DefaultInput}
                secureTextEntry={true}
                type="password" 
                placeholder={props.placeholder} 
                onChangeText={props.onChange} 
                value={props.value} 
            />
        </View>
    )
}
const DefaultInput = (props) => {
    const title = () => {
        if(props.title)
        {
            return (
                <Text 
                    style={styles.DefaultInputLabel}>{props.title}</Text>
            )
        }
    }
    
    return (
        
        <View style={styles.InputContainer}>
            {title()}
            <TextInput
                placeholderTextColor={"#797575cb"} 
                style={styles.DefaultInput}
                type="none" 
                keyboardType="default"
                placeholder={props.placeholder} 
                onChangeText={props.onChange} 
                value={props.value} 
            />
        </View>
    )
}
const SearchInput = (props) => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const title = () => {
        if(props.title)
        {
            return (
                <Text 
                    style={styles.DefaultInputLabel}>
                        {props.title}
                </Text>
            )
        }
    }
    
    const searchClicked = async () => {
        let responseArray = [];
        // props.onSearchClick(latitude, longitude);
        console.log('search clicked');
        const res = await GeoapifyService.getCoordsByString(encodeURI(inputValue));
        const data = res.data.features;
        data.forEach(coordinates => {
            console.log(coordinates.geometry.coordinates[0], coordinates.geometry.coordinates[1]);
            responseArray.push({
                latitude: coordinates.geometry.coordinates[1], 
                longitude: coordinates.geometry.coordinates[0], 
                description:`` });
        });

    }

    return (
        
        <View style={[styles.SearchInpuContainer, styles.InputWhiteShadow]}>
            {title()}
            <TextInput
                placeholderTextColor={"#797575cb"} 
                style={styles.SearchInput}
                type="none" 
                keyboardType="default"
                placeholder={'Search'} 
                onChangeText={setInputValue} 
                value={inputValue} 
            />
            <Pressable onPressOut={() => searchClicked()} style={[styles.InputPressable]}>
                <Image source={SearchLogo} style={styles.InputLogo} />
            </Pressable>
        </View>
    )
}

export {EmailInput,PasswordInput, DefaultInput, SearchInput}