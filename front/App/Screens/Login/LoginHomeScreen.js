import { View } from 'react-native'
import {Login, Subscribe} from '../../Components/Auth'
import styles from '../../Styles/styles'
import { useState } from 'react'


export default function LoginHomeScreen(params) {
    const [ifLogin, setLogin] = useState(true);

    const page = () => {
        if(ifLogin)
            return <Login isLogin={{ifLogin,setLogin}} />
        return <Subscribe isLogin={{ifLogin,setLogin}} />
    }

    return(
        <View style={styles.Screen}>
            {page()}
        </View>
    )
}