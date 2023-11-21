import { View, Text, Image } from "react-native"
import { Marker} from 'react-native-maps';
import MapView from 'react-native-maps';

import styles from "../../Styles/styles"
import { useState } from "react";
import { SearchInput } from "../../Components/Inputs";

export default function SearchScreen() {
    
    const userLocation = {
        latitude: -25.4230246, 
        longitude: -49.2710027,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    }
    const [location, setLocation] = useState({latitude: userLocation.latitude, longitude: userLocation.longitude})
    const settinLocation = (lat, lon) => {
        console.log(lat, lon);
        setLocation({latitude: lat, longitude: lon})
    }
    return (
        <View style={styles.Screen}>
            <MapView  
                style={styles.MapContainer} 
                region={userLocation}
            ></MapView>
            <View style={styles.ClickBackgroundToReturn} />
            <View style={styles.SearchScreenContainer}>
                <SearchInput onSearchClick={(a,b) => settinLocation(a,b)}/>
            </View>
        </View>
    )
}   