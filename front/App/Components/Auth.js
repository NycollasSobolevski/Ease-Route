import { Text, View  } from "react-native"

import styles from '../../App.scss';

import {Btn} from './Components'

const Login = () => {
    console.log(styles.container);
    return (
        <>
            <View style={styles.container}>
                <Text>Login</Text>
                <Btn title="Login"></Btn>
            </View>
        </>
    )
}

const Subscribe = () => {
    return (
        <>
            <View>
                <Text>Subscribe</Text>
                <Btn title="Subscribe"></Btn>
            </View>
        </>
    )
}

export { Login, Subscribe }