import { TextInput, Text, View } from "react-native"
import styles from "../Styles/styles"

const EmailInput = (props) => {
    const title = () => {
        if(props.title)
        {
            return (
                <Text style={styles.DefaultInputLabel}>{props.title}</Text>
            )
        }
    }

    return (
        <View style={styles.InputContainer}>
            {title()}
            <TextInput 
                style={styles.DefaultInput}
                type="email" 
                inputMode="email"
                keyboardType="email-address"
                placeholder={props.placeholder} 
                onChange={props.onChange} 
                value={props.value} 
            />
        </View>
    )
}
const PasswordInput = (props) => {
    const title = () => {
        if(props.title)
        {
            return (
                <Text 
                    style={styles.DefaultInputLabel}>{props.title}</Text>
            )
        }
    }
    
    return (
        
        <View style={styles.InputContainer}>
            {title()}
            <TextInput 
                style={styles.DefaultInput}
                secureTextEntry={true}
                inputMode="password"
                type="password" 
                placeholder={props.placeholder} 
                onChange={props.onChange} 
                value={props.value} 
            />
        </View>
    )
}
export {EmailInput,PasswordInput}