import { StatusBar } from 'expo-status-bar';
import Login from './src/Screens/Login';
import Registrar from './src/Screens/Registro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';

const Stack = createNativeStackNavigator(); // Criação do stack navigator

export default function App() {
  return (

    <Home/>

   /* <NavigationContainer>    
      <Stack.Navigator initialRouteName="Login">

        <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }}/>

        <Stack.Screen 
        name="Registrar" 
        component={Registrar} 
        options={{ headerShown: false }}/>
        
      </Stack.Navigator>
    </NavigationContainer>*/

    
  );
}


