import { View, Text, Image } from "react-native"
import { Marker} from 'react-native-maps';
import MapView from 'react-native-maps';

import styles from "../../Styles/styles"
import { useState } from "react";

export default function SearchScreen() {
    const userLocation = {
        latitude: -25.4230246, 
        longitude: -49.2710027,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    }
    console.log(navigator.geolocation);
    
    return (
        <View style={styles.Screen}>
            <MapView  
                style={styles.MapContainer} 
                region={userLocation}
            ></MapView>
            <View style={styles.ClickBackgroundToReturn} />
            <View style={styles.SearchScreenContainer}>

            </View>
        </View>
    )
}   