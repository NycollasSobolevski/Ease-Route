import { Text, View } from "react-native"
import styles from "../../Styles/styles"
import { MenuToolCircleBtn } from "../Buttons"

import favoriteIcon from '../../../assets/Icons/GoldenFavorite.png'
import routeIcon from '../../../assets/Icons/GoldenRoute.png'

export default SearchRouteCard = ( params ) => {
    
    return(
        <>
            <View style={styles.SearchCardContainer}>
                <View style={styles.SearchCardHeaderContainer}>
                    <View style={styles.SwipeBar}  />
                    <Text style={styles.DefaultLabel}>{'params.label'}</Text>
                </View>
                <View style={styles.SearchCardMainContainer}>
                    <View style={styles.RowContainer}>
                        <MenuToolCircleBtn onClick={() => params.setPageIndex(2)} image={routeIcon} LabelSide={"bottom"} showLabel={true} label={"Routes"}  backgroundColor={"#21225B"} />
                        <MenuToolCircleBtn onClick={() => params.setPageIndex(3)} image={favoriteIcon} LabelSide={"bottom"} showLabel={true} label={"Save"} backgroundColor={"#21225B"} />
                    </View>
                </View>
                    <Text style={styles.DefaultText}>{'params.description'}</Text>
            </View>
        </>
    )
}