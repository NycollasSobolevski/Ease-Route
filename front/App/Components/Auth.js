import { Image, ImageBackground, Pressable, Text, View  } from "react-native"
import React, { useState } from 'react'
import styles from '../Styles/styles'
import Logo from '../../assets/Stencil.png'
import BackGroundImage from '../../assets/favicon.png'
import {useNavigation} from '@react-navigation/native'

import {DefaultBtn} from './Buttons'
import { EmailInput, PasswordInput, DefaultInput } from "./Inputs"

const Login = ( params ) => {
    const navigation = useNavigation();

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const Login = (props) => {
        var body ={ 
            login: login,
            password: password
        }
        console.log(body);

        navigation.navigate('Home')
    }

    return (
        <>
        <ImageBackground source={BackGroundImage} resizeMode="cover" 
            style={styles.BackgroundLogo}/>

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
                    <Pressable onPressOut={() => params.isLogin.setLogin(!params.isLogin.ifLogin)} >
                        <Text style={[styles.Link, {paddingLeft: 13}]}>
                            Dont have account? Subscribe
                        </Text>
                    </Pressable>
                </View>


                <View style={styles.ButtonContainer}>
                    <DefaultBtn text="LOGIN" onClick={Login}/>
                    <Pressable>
                        <Text style={styles.Link}>Forget password?</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

const Subscribe = ( params ) => {
    
    const [login, setLogin] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const Subscribe = (props) => {
        var body = {
            login: login,
            email: email,
            password: password,
            repassword: repassword
        }
        console.log(body );
    }

    return (
        <>
        <ImageBackground source={BackGroundImage} resizeMode="cover" 
            style={styles.BackgroundLogo}/>

            <View style={styles.AuthContainer}>
                <Image source={Logo} style={styles.LogoScript} />
                <View style={styles.InputsContainer}>
                    <DefaultInput 
                        placeholder="Joaosinho da Silva" 
                        title="Login"
                        onChange={setLogin}
                    />
                    <EmailInput 
                        placeholder="email@email.com" 
                        title="Email"
                        onChange={setEmail}
                    />

                    <PasswordInput 
                        placeholder="********" 
                        title="Password"
                        onChange={setPassword}
                    />
                    <PasswordInput 
                        placeholder="********" 
                        title="Password"
                        onChange={setRepassword}
                    />
                </View>


                <View style={styles.ButtonContainer}>
                    <DefaultBtn text="SUBSCRIBE" onClick={Subscribe}/>
                    <Pressable onPressOut={() => params.isLogin.setLogin(!params.isLogin.ifLogin)} >
                        <Text style={styles.Link}> LOGIN </Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export { Login, Subscribe }