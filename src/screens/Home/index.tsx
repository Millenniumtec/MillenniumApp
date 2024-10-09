import { StatusBar } from 'expo-status-bar';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Image
        source={require('../../img/Logo.png')} 
        style={styles.image}
      />

      <StatusBar style="auto" />

      
    

    </View>
  );
}