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


      <View style={styles.form}>{/* INPUT 1 */}
        <Text style={styles.texto}>E-mail:</Text>

        <TextInput
            style={styles.inputText}
            placeholder="Seu email"
            placeholderTextColor="#FFF"
            keyboardType='email-address'/>

      </View>

      <View style={styles.form}>{/* INPUT 2 */}
        <Text style={styles.texto}>Senha: </Text>

        <TextInput
            style={styles.inputText}
            placeholder="Sua senha"
            placeholderTextColor="#FFF"
            secureTextEntry={true} />

      </View>

      <View style={styles.containerBotao}>{/* BOTAO */}
        <TouchableOpacity style={styles.botao}>
             <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.botao}>  
        {/*</View>onPress={() => navigation.navigate('Registrar')} */}
             <Text style={styles.textoBotao}>Registrar</Text>
        </TouchableOpacity>
      </View>
    

    </View>
  );
}