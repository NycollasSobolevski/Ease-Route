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
    DefaultInputLabel: {
        fontSize: 18,   
        // color:'var(--default-input-color)',
        // fontFamily: "var(--font-family-01)",
        color:'#fff',
        paddingLeft: 15,
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
    DefaultBtnText: {
        // color: "var(--text-color-01)",
        color: "#21225B",
        fontSize:35,
        fontWeight: "bold",     

        // fontFamily: "var(--font-family-01)",
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
        backgroundColor: "#000",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
    },
    MapContainer: {
        zIndex: -1,
        width:"100%", 
        height:"100%"
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
    MenuBtnLabel: {
        color: "#fff",
        fontSize: 12,
        // fontFamily: "var(--font-family-02)",
    },
})


export default styles;