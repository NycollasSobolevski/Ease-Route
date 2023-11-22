import { StyleSheet } from "react-native"
// var {vw, vh , vmin, vmax} = require('react-native-viewport-units');
// 
const styles = StyleSheet.create({
    Screen: {
        width :"100%",
        height:"100%",
        // backgroundColor: "var(--default-background-color)",
        backgroundColor: "#152E58",
        color:"#fff",
        alignItems:"center",
        justifyContent:"center",

        
    },
    //! GENERAL STYLES
    RowContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    },
    SwipeBar: {
        width: 75,
        height: 5,
        backgroundColor: "#fff",
        borderRadius: 100,
    },
    //! TEXT STYLES
    DefaultText: {
        // color: "var(--text-color-01)",
        color: "#fff",
        fontSize: 18,
        // fontFamily: "var(--font-family-02)",
    },
    DefaultLabel:{
        fontSize: 25,   
        // color:'var(--default-input-color)',
        // fontFamily: "var(--font-family-01)",
        color:'#fff',
    },
    DefaultInputLabel: {
        fontSize: 18,   
        // color:'var(--default-input-color)',
        // fontFamily: "var(--font-family-01)",
        color:'#fff',
        paddingLeft: 15,
    },
    DefaultBtnText: {
        color: "#fff",
        fontSize: 18,
    },
    DefaultBtnBoldText: {
        // color: "var(--text-color-01)",
        color: "#21225B",
        fontSize:35,
        fontWeight: "bold",     

        // fontFamily: "var(--font-family-01)",
    },
    MenuBtnLabel: {
        color: "#fff",
        fontSize: 12,
        // fontFamily: "var(--font-family-02)",
    },
    


    AuthContainer: {
        width: 350,
        height: "90%",
        // backgroundColor: 'var(--semitransparent-background-color)',
        backgroundColor: '#1d15158a',
        alignItems:"center",
        justifyContent:'space-between',
        alignItems:"center",
        padding:20,
        borderRadius:25,

        // shadowColor: 'black',
        // shadowOffset: {width: 2, height: 2},
        // shadowOpacity: 0.5,
        // shadowRadius: 10,
        // elevation: 5,
    },
    InputsContainer:{
        gap:15,
    },
    InputContainer:{
        gap:15,
    },
    DefaultInput: {
        // backgroundColor: "var(--default-input-background-color)",
        backgroundColor: "#1d1515",
        width: 270,
        height: 40,
        borderRadius: 12,
        // color: "var(--default-input-color)",
        color: "#fff",
        paddingLeft: 15,
        fontSize:13,
        // fontFamily: "var(--font-family-02)",
        
        shadowColor: '#ffffff',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 10,

    },
    
    LogoScript:{
        width: 250, 
        height:50
    },
    ButtonContainer: {
        gap:20,
        alignItems:"center",
    },
    DefaultBtn: {
        width:200,
        height: 50,
        // backgroundColor: "var(--default-btn-color)",
        // color: "var(--text-color-01)",
        backgroundColor: "#BBB079",
        color: "#21225B",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    
    Link: {
        // color: "var(--default-link-color)",
        color: "#BBB079",
        fontSize: 13,
        // fontFamily: "var(--font-family-02)",
    },
    BackgroundLogo: {
        flex: 1,width: 300, height: 300,
        position: "absolute",
        placeContent: "center",
    },
    //! HOME SCREEN
    StencilContainer:{
        position:"absolute",
        top: 75,
        backgroundColor: "#21225B",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
    },
    MapContainer: {
        zIndex: -1,
        width:"100%", 
        height:"100%"
    },  
    UserPositionMarker:{
        width: 20,
        height: 20,
        backgroundColor: "#2842C8",
        borderRadius: 100,
        
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
    },

    //! Menu
    MenuContainer: {
        backgroundColor: "#21225B",
        width: "90%",
        height: 80,
        position: "absolute",
        bottom: 15,
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    },
    MenuBtnContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    


    ClickBackgroundToReturn:{
        width:"100%",
        height:"100%",
        position:"absolute",
        backgroundColor:"#00000070",
        zIndex: 1,
    },
    SearchContainer: {
        position: "absolute",
        bottom: 100,
        right: "10%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap:10,
        zIndex:2,
    },
    SearchBtnContainer: {
        width: 65,
        height: 65,
        backgroundColor: "#21225B",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center", 
    },
    SearchBtnLogo: {
        height:30,
        objectFit:"contain",
        zIndex:3
    },
    SearchToolsContainer: {
        position: "absolute",
        bottom: 180,
        right: "10%",
        zIndex:2,
        gap:7,
        alignItems:"flex-end",

    },
    
    SearchToolsBtn: {
        width: 100,
        height: 40,
        backgroundColor: "#21225B",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginVertical: 5,
    },
    
    ToolContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap:10,

    },
    CircleBtnContainer: {
        width: 50,
        height: 50,
        backgroundColor: "#8991AE",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    },
    CircleBtnLogo: {
        height: 30,
        objectFit: "contain",
    },


    //! Search Screen
    SearchScreenContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",

    },

    SearchInpuContainer: {
        backgroundColor: "#21225B",
        // width: "80%",
        height: 55,
        padding:5,
        gap:5,
        borderRadius:100,
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "center",
        zIndex:5,
        position:"absolute",
        top:100
    },
    InputWhiteShadow:{
        shadowColor: '#fff',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    SearchInput: {
        width: "80%",
        height: 50,
        paddingLeft: 15,
        fontSize: 18,
        color: "#fff",
        // fontFamily: "var(--font-family-02)",
    },
    InputPressable: {
        // backgroundColor: "#fff",
        width: "10%",
        margin:5
    },
    InputLogo:{
        width:40,
        height:40,
        objectFit:"contain",
    },

    //! Search Card
    SearchCardContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "35%",
        backgroundColor: "#202159D9",
        borderTopLeftRadius: 20,
        borderTopEndRadius: 20,
        padding: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    SearchCardHeaderContainer:{
        alignItems:"center",
        justifyContent:"center",
        gap:10,
    },
    SearchCardMainContainer: {
        width: "100%",
        // height: "80%",
        // alignItems: "center",
        // justifyContent: "space-between",
    },
})


export default styles;