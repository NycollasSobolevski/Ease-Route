import { TextInput, Text, View, Image, Pressable } from "react-native"
import styles from "../Styles/styles"
import SearchLogo from "../../assets/Icons/Search.png"
import { useState } from "react"
import GeoapifyService from "../Services/geoapify"
import { searchPageSlice } from "../Redux/searchPageSlice"
import { useDispatch } from "react-redux"

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
    const dispatch = useDispatch();
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
        const { setPage, setData } = searchPageSlice.actions;
        
        let responseArray = [];

        try {
            const res = await GeoapifyService.getCoordsByString(encodeURI(inputValue));
            const data = res.data.features;
            console.log(data);
            // const description = `${data[0].properties.address_line1}, ${data[0].properties.address_line2}`
            data.forEach(coordinates => {
                responseArray.push({
                    latitude: coordinates.geometry.coordinates[1], 
                    longitude: coordinates.geometry.coordinates[0], 
                    description:`${coordinates.properties.address_line2}`,
                    label:coordinates.properties.address_line1
                });
            });
                
            props.onSearchClick(responseArray[0].latitude, responseArray[0].longitude);
            console.log('search clicked');
            dispatch(setPage("search-options"));
            //! nao usar redux aqui usar componentização
            dispatch(setData({
                label:responseArray[0].label,
                description:responseArray[0].description,
                geolocation:{
                    latitude:responseArray[0].latitude,
                    longitude:responseArray[0].longitude,
                }
            }))
            
        } catch (error) {
            dispatch(setPage("none"));
            
        }
    }

    return (
        
        <View style={[styles.SearchInpuContainer, styles.InputWhiteShadow]}>
            {title()}
            <TextInput
                placeholderTextColor={"#797575cb"} 
                style={styles.SearchInput}
                keyboardType="default"
                placeholder={'Search'} 
                onChangeText={setInputValue} 
                value={inputValue} 
                autoFocus={true}
                inputMode="search"
            />
            <Pressable onPressOut={() => searchClicked()} style={[styles.InputPressable]}>
                <Image source={SearchLogo} style={styles.InputLogo} />
            </Pressable>
        </View>
    )
}

export {EmailInput,PasswordInput, DefaultInput, SearchInput}