import { Image, ImageBackground, Pressable, Text, View  } from "react-native"
import React, { useState } from 'react'
import styles from '../Styles/styles'
import Logo from '../../assets/ER logo 2.png'
import BackGroundImage from '../../assets/LOGO.png'

import {DefaultBtn} from './Buttons'
import { EmailInput, PasswordInput } from "./Inputs"

const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const Login = (props) => {
        console.log(login.target.value );
    }

    return (
        <>
        <ImageBackground source={BackGroundImage} resizeMode="cover" 
            style={{flex: 1,width: 300, height: 300,
                alignItems: 'center',
                justifyContent: 'center',
            }}>

            <View style={styles.AuthContainer}>
                <Image source={Logo} style={styles.LogoScript} />
                <View style={styles.InputsContainer}>
                    <EmailInput 
                        placeholder="Emailsinho@email.com" 
                        title="Email"
                        onChange={setLogin}
                    />

                    <PasswordInput 
                        placeholder="********" 
                        title="Password"
                        onChange={setPassword}
                    />
                </View>


                <View style={styles.ButtonContainer}>
                    <Pressable>
                        <Text style={styles.Link}>Forget password?</Text>
                    </Pressable>
                    <DefaultBtn text="LOGIN" onClick={Login}/>
                </View>
            </View>
        </ImageBackground>
        </>
    )
}

const Subscribe = () => {
    return (
        <>
            <View>
                <Text>Subscribe</Text>
                <DefaultBtn text="Subscribe"></DefaultBtn>
            </View>
        </>
    )
}

export { Login, Subscribe }