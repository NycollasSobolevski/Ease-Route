import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginHomeScreen from './App/Screens/Login/LoginHomeScreen';

import FontFace from './App/Styles/fonts/fontface';
// import "./App/Styles/styles.css"
// import "./App/Styles/DefaultTheme.css"
import HomeScreen from './App/Screens/Login/HomeScreen';
import SearchScreen from './App/Screens/Login/SearchScreen';
import RouteScreen from './App/Screens/Login/RouteSreen';


export default function App() {
  const Stack  = createStackNavigator();

  return (
  <>
    {/* <FontFace /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginHomeScreen} />
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
          <Stack.Screen name="Search" options={{headerShown:false}} component={SearchScreen} />
          <Stack.Screen name="Route" options={{headerShown:false}} component={RouteScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  </>
  );
}