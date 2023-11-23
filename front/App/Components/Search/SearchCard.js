import { Text, View } from "react-native"
import styles from "../../Styles/styles"
import { MenuToolCircleBtn } from "../Buttons"

import favoriteIcon from '../../../assets/Icons/GoldenFavorite.png'
import routeIcon from '../../../assets/Icons/GoldenRoute.png'
import { useDispatch } from "react-redux"
import { searchPageSlice } from "../../Redux/searchPageSlice"

export default SearchRouteCard = ( params ) => {
    
    const dispatch = useDispatch();
    const { setPage } = searchPageSlice.actions;

    return(
        <>
            <View style={styles.SearchCardContainer}>
                <View style={styles.SearchCardHeaderContainer}>
                    <View style={styles.SwipeBar}  />
                    <Text style={styles.DefaultLabel}>{'params.label'}</Text>
                </View>
                <View style={styles.SearchCardMainContainer}>
                    <View style={styles.RowContainer}>
                        <MenuToolCircleBtn onClick={() => dispatch(setPage('search-route'))} image={routeIcon} LabelSide={"bottom"} showLabel={true} label={"Routes"}  backgroundColor={"#21225B"} />
                        <MenuToolCircleBtn onClick={() => dispatch(setPage('search-save'))} image={favoriteIcon} LabelSide={"bottom"} showLabel={true} label={"Save"} backgroundColor={"#21225B"} />
                    </View>
                </View>
                    <Text style={styles.DefaultText}>{'params.description'}</Text>
            </View>
        </>
    )
}