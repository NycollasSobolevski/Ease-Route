import { View, Text, Image, PermissionsAndroid, Pressable, StyleSheet } from "react-native"
import { Marker} from 'react-native-maps';
import MapView from 'react-native-maps';
import styles from "../../Styles/styles"
// import LogoStencil from "../../../assets/Stencil.png"

import { BrandButton, SearchButton } from "../../Components/Buttons"
import Menu from "../../Components/Menu"
import { useEffect, useState } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import UserMarker from "../../Components/UserMarker";


export default function HomeScreen() {
    const [userLocation, setUserLocation] = useState();
    const [MapLocation, setMapLocation] = useState({
        latitude: 0, 
        longitude: 0,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    });
    

    //todo: centralizar o mapa na localização do usuário
    const centralizeMap = () => {
        console.log('centralizeMap');
        console.log(userLocation,"\n\n" ,MapLocation);
        setMapLocation({
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        })
    }

    return (
        <View style={styles.Screen}>
            <BrandButton />
            
            <MapView  
                style={styles.MapContainer} 
                region={MapLocation}
                onRegionChangeComplete={(R) => console.log(R)}
            >
                <UserMarker 
                    MapLocation={MapLocation} 
                    setMapLocation={setMapLocation}
                    setUserLocation={setUserLocation}
                />   
            </MapView>
            
            <SearchButton userLocation={MapLocation}  /> 
            <Menu />
        </View>
    )
}


