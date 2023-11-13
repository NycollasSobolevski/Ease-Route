import { Button, Text } from "react-native"

const Btn = ( params ) => {
    const title = params.title;

    return (
        <>
            <Button title={title}/>
        </>
    )
}



export {Btn}