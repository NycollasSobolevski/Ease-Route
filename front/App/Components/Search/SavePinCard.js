import { Image, Text, View } from "react-native"
import { DefaultBtn, IconButton, MenuToolCircleBtn } from "../Buttons"
import { DefaultInput } from "../Inputs"
import styles from "../../Styles/styles"
import saveIcon from "../../../assets/Icons/GoldenFavorite.png"
import returnArrowIcon from "../../../assets/Icons/ReturnArrow.png"
import { useDispatch, useSelector } from "react-redux"
import { searchPageSlice } from "../../Redux/searchPageSlice"

export default SavePinCard = ( params ) => {
    
    const dispatch = useDispatch();
    const { setPage } = searchPageSlice.actions;
    const { locationData } = useSelector((store) => store.searchPage);


    const ReturnToSearch = () => {
        console.log('sla');
        dispatch(setPage('search-options'))
    }

    return(
        <View style={[styles.CardContainer]}>
            <View style={{alignItems:'center', gap:10}}>
                <View style={styles.SwipeBar} />
                <View style={{width:300, justifyContent:'flex-start'}}>
                    <IconButton icon={returnArrowIcon} action={ReturnToSearch} />
                </View>
                <View style={[styles.RowContainer, {gap:10}]}>
                    <MenuToolCircleBtn backgroundColor={'#fff'} image={saveIcon} /> 
                    <View >
                        <Text style={styles.DefaultLabel} >Save</Text>
                        <Text style={styles.DefaultLabel} >Location</Text>
                    </View>
                </View>
            </View>
                <DefaultInput 
                    title={'Insert the location name:'} 
                    placeholder={'Work'}
                />
                <Text style={[styles.DefaultText, {padding:10, fontSize:15}]}>
                    {locationData.description}
                </Text>
                <DefaultBtn text={"SAVE"} />
        </View>
    )
}