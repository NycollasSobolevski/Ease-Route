import { View, Text, Image } from "react-native"
import { Marker} from 'react-native-maps';
import MapView from 'react-native-maps';

import styles from "../../Styles/styles"
import { useEffect, useState } from "react";
import { SearchInput } from "../../Components/Inputs";
import UserMarker from "../../Components/UserMarker";
import SearchCard from "../../Components/Search/SearchCard";
import { useSelector } from "react-redux";
import { searchPageSlice } from "../../Redux/searchPageSlice";
import RoutesCard from "../../Components/Search/RoutesCard";
import SavePinCard from "../../Components/Search/SavePinCard";

export default function SearchScreen() {
    
    const { value: searchPageIndex } = useSelector((store) => store.searchPage);
    const { setPage } = searchPageSlice;

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

    ///
    const settinLocation = (lat, lon) => {
        console.log(lat, lon);
        setMarkLocation({
            latitude: lat,
            longitude: lon
        })
        console.log(MarkLocation);
        setMark(true)
        // todo: add to regex
    };
    
    /// renderiza de acordo com o valor do searchPageIndex ( REDUX ) que é setado dentro dos componentes
    const renderCard = () => {
        switch( searchPageIndex ) {
            case 0:
                return <></>
            case 'search-options':
                return <SearchCard />
            case 'search-route':
                return <RoutesCard />
            case 'search-save':
                return <SavePinCard />
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