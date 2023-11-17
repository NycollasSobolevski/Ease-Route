import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginHomeScreen from './App/Screens/Login/LoginHomeScreen';

import FontFace from './App/Styles/fonts/fontface';
// import "./App/Styles/styles.css"
// import "./App/Styles/DefaultTheme.css"
import HomeScreen from './App/Screens/Login/HomeScreen';


export default function App() {
  const Stack  = createStackNavigator();

  return (
  <>
    {/* <FontFace /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{headerShown:false}} component={LoginHomeScreen} />
          <Stack.Screen name="Home" options={{headerShown:false}} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  </>
  );
}