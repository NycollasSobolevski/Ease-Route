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
                placeholderTextColor={"#797575cb"} 
                style={styles.DefaultInput}
                type="email" 
                keyboardType="email-address"
                placeholder={props.placeholder} 
                onChangeText={props.onChange} 
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
                placeholderTextColor={"#797575cb"} 
                style={styles.DefaultInput}
                secureTextEntry={true}
                type="password" 
                placeholder={props.placeholder} 
                onChangeText={props.onChange} 
                value={props.value} 
            />
        </View>
    )
}
const DefaultInput = (props) => {
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
                placeholderTextColor={"#797575cb"} 
                style={styles.DefaultInput}
                type="none" 
                keyboardType="default"
                placeholder={props.placeholder} 
                onChangeText={props.onChange} 
                value={props.value} 
            />
        </View>
    )
}

export {EmailInput,PasswordInput, DefaultInput}