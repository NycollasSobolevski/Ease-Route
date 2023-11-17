import { View, Text, Image } from "react-native"
import { Marker} from 'react-native-maps';
import MapView from 'react-native-maps';

import styles from "../../Styles/styles"
// import LogoStencil from "../../../assets/Stencil.png"

import { BrandButton } from "../../Components/Buttons"
import Menu from "../../Components/Menu"
import { useState } from "react";

export default function HomeScreen() {
    const muellerLocation ={
        latitude: -25.4230246, 
        longitude: -49.2710027,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    }

    return (
        <View style={styles.Screen}>
            <BrandButton />
            
            <MapView  
                style={styles.MapContainer} 
                region={muellerLocation}
            >
                
                <Marker
                    coordinate={{latitude: muellerLocation.latitude, longitude:muellerLocation.longitude}}
                    title={"um lugar"}
                    description={"marker.description"}
                />
                
            </MapView>

            <Menu />
        </View>
    )
}