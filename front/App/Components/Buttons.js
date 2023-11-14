import {  Pressable, Text } from "react-native"
import styles from "../Styles/styles";



const DefaultBtn = ( params ) => {
    const title = params.text;

    return (
        <>
            <Pressable 
                style={styles.DefaultBtn}
                onPress={params.onClick}
            >
                <Text
                    style={styles.DefaultBtnText}
                >{title}</Text>
            </Pressable>
        </>
    )
}



export {DefaultBtn}