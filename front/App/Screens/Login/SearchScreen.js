import { View, Text, Image } from "react-native"
import { Marker} from 'react-native-maps';
import MapView from 'react-native-maps';

import styles from "../../Styles/styles"
import { useEffect, useState } from "react";
import { SearchInput } from "../../Components/Inputs";
import UserMarker from "../../Components/UserMarker";
import SearchCard from "../../Components/Search/SearchCard";

export default function SearchScreen() {
    const [locationData, setLocationData] = useState();
    const [pageIndex, setPageIndex] = useState(0);
    const [MarkLocation, setMarkLocation] = useState({
        latitude: -25.514249, 
        longitude: -49.283341,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
    });
    const [mark, setMark] = useState(false);
    const renderMark = (params) => {
        if(params)
        return(
            <>
                <Marker
                    coordinate={{latitude: MarkLocation.latitude, longitude:MarkLocation.longitude}}
                    title="pesquisa"
                    description="Localização de onde voce pesquisou"
                />
            </>
        )
    };

    const settinLocation = (lat, lon) => {
        console.log(lat, lon);
        setMarkLocation({
            latitude: lat,
            longitude: lon
        })
        console.log(MarkLocation);
        setMark(true)
        setPageIndex(1)
    };
    const switchContainer = (number) => {
        console.log(number);
        // setPageIndex(number);
    }
    const renderCard = () => {
        switch(pageIndex) {
            case 0:
                return <></>
            case 1:
                // ! REDUX aqui 
                return <SearchCard setPageIndex={switchContainer} />
            case 2:
                return <></>
        }
    };

    return (
        <View style={styles.Screen}>
            <MapView  
                style={styles.MapContainer} 
                region={MarkLocation}
            >
               {renderMark(mark)}
               <UserMarker />
            </MapView>
            {/* <View style={styles.ClickBackgroundToReturn} /> */}
            <View style={styles.SearchScreenContainer}>
                <SearchInput onSearchClick={(a,b) => settinLocation(a,b)}/>
            </View>
            {renderCard()}
        </View>
    )
}   