import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import LoginHomeScreen from './App/Screens/Login/LoginHomeScreen';


export default function App() {
  const Stack  = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{headerShown:false}} component={LoginHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}