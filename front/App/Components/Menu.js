import { Text, View } from "react-native";
import styles from "../Styles/styles";
import { MenuButtons } from "./Buttons";

import HistoricLogo from '../../assets/Icons/Historic.png'
import FavoriteLogo from '../../assets/Icons/Favorite.png'
import SettingsLogo from '../../assets/Icons/Settings.png'
export default function Menu( params ) {
    

    return (
        <View style={styles.MenuContainer}>
            <MenuButtons 
                image={HistoricLogo} 
                label={"Historic"} 
                route={"Historic"}
            />
            <MenuButtons 
                image={FavoriteLogo}
                // imageStyle={{width: 100, height: 100}}
                label={"Favorites"} 
                route={"Historic"}
            />
            <MenuButtons 
                image={SettingsLogo} 
                label={"Settings"} 
                route={"Historic"}
            />
        </View>
    )
}