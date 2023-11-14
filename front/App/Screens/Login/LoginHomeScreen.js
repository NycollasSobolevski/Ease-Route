import { View } from 'react-native'
import {Login, Subscribe} from '../../Components/Auth'
import styles from '../../Styles/styles'


export default function LoginHomeScreen(params) {
    return(
        <>
            <View style={styles.Screen}>
                <Login/>

            </View>
            {/* <Subscribe /> */}
        </>
    )
}