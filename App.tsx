import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Registrar from './src/screens/Regitro';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); // Criação do stack navigator

export default function App() {
  return (

    <NavigationContainer>    
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
    </NavigationContainer>
    
  );
}


