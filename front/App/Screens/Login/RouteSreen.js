import { Text } from "react-native";

export default function RouteScreen (params) {


    return(
        <>
            <Text>RouteScreen {params.From}~{params.Destiny}</Text>
        </>
    )
}