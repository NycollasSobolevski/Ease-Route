import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import styles from "../Styles/styles";
import * as Location from 'expo-location';


export default UserMarker = (props) => {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [latitudeDelta, setLatitudeDelta] = useState(0.005);
    const [longitudeDelta, setLongitudeDelta] = useState(0.005);

    const getUserLocation = async () => {
        // Solicitar permissão para acessar a localização do dispositivo
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.error('Permissão de localização não concedida');
            return;
        }
      
        // Obter a localização do dispositivo
        let location = await Location.getCurrentPositionAsync({});
        setLatitude( location.coords.latitude);
        setLongitude( location.coords.longitude);

        if(props.setMapLocation)
            props.setMapLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            })
        if(props.setUserLocation)
            props.setUserLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
            })
    }

    useEffect(() => {
        getUserLocation();
        const intervalId = setInterval(getUserLocation, 1000);
        setTimeout(() => {
            getUserLocation();
        }, 1000);
    }, []);

    return(
        <>
            <Marker
                coordinate={{latitude: latitude, longitude:longitude}}
                title={"You"}
                >
                <View style={styles.UserPositionMarker} />
            </Marker>
        </>
    )
}



const sla = StyleSheet.create({
    sla:{
        position: 'absolute',
        top:200,
        zIndex: 1,
        backgroundColor: 'blue',
        padding: 10,
    }
})