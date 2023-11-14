import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    Screen: {
        width:  "100vw",
        height:"100vh",
        backgroundColor: "var(--default-background-color)",
        color:"var(--default-color)",
        alignItems:"center",
        justifyContent:"center",

        
    },
    AuthContainer: {
        width: "95vw",
        height: "98vh",
        backgroundColor: 'var(--semitransparent-background-color)',
        alignItems:"center",
        justifyContent:'space-between',
        alignItems:"center",
        padding:20,
        borderRadius:25,

        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 5,
    },
    InputsContainer:{
        gap:15,
    },
    InputContainer:{
        gap:15,
    },
    DefaultInput: {
        backgroundColor: "var(--default-input-background-color)",
        width: 270,
        height: 45,
        borderRadius: 15,
        color: "var(--default-input-color)",
        paddingLeft: 15,
        fontSize:13,
        fontFamily: "var(--font-family-02)",

        shadowColor: 'var(--default-shadow-color)',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 15,
        elevation: 5,

    },
    DefaultInputLabel: {
        fontSize: 18,        
        color:'var(--default-input-color)',
        fontFamily: "var(--font-family-01)",
        paddingLeft: 15,
    },

    LogoScript:{
        top: 50,
        width: 250, 
        height:50
    },
    ButtonContainer: {
        gap:50,
        alignItems:"center",
    },
    DefaultBtn: {
        width:"300px",
        height: "65px",
        backgroundColor: "var(--default-btn-color)",
        color: "var(--text-color-01)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    DefaultBtnText: {
        color: "var(--text-color-01)",
        fontSize:35,
        fontFamily: "var(--font-family-01)",
    },
    Link: {
        color: "var(--default-link-color)",
        fontSize: 10,
        fontFamily: "var(--font-family-02)",
    }
})


export default styles;