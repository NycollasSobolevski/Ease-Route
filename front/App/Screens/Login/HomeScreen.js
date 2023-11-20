import { View, Text, Image, PermissionsAndroid } from "react-native"
import { Marker} from 'react-native-maps';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import styles from "../../Styles/styles"
// import LogoStencil from "../../../assets/Stencil.png"

import { BrandButton, SearchButton } from "../../Components/Buttons"
import Menu from "../../Components/Menu"
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";


export default function HomeScreen() {
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);
    const [latitudeDelta, setLatitudeDelta] = useState(0.005);
    const [longitudeDelta, setLongitudeDelta] = useState(0.005);
    const UserLocation = {
        latitude: latitude, 
        longitude: longitude,
        latitudeDelta: latitudeDelta,
        longitudeDelta: longitudeDelta
    }
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
    }

    useEffect(() => {
        getUserLocation();
        const intervalId = setInterval(getUserLocation, 1000);
        setTimeout(() => {
            getUserLocation();
        }, 1000);
    }, []);

      
    

    return (
        <View style={styles.Screen}>
            <BrandButton />
            
            <MapView  
                style={styles.MapContainer} 
                region={UserLocation}
            >
                
                <Marker
                    coordinate={{latitude: latitude, longitude:longitude}}
                    // title={"um lugar"}
                    // description={"marker.description"}
                >
                    <View style={styles.UserPositionMarker} />
                </Marker>
                
            </MapView>

            <SearchButton userLocation={UserLocation} /> 
            <Menu />
        </View>
    )
}