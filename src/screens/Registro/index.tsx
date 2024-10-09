import { StatusBar } from 'expo-status-bar';
import { View, Image, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Registrar() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../../img/Logo.png')} 
        style={styles.image}
      />
      <Text style={styles.frase}>
        Faça parte da Millennium:
      </Text>

      <StatusBar style="auto" />

      <View style={styles.form}>{/* INPUT 1 */}
        <Text style={styles.texto}>Email: </Text>

        <TextInput
            style={styles.inputText}
            placeholder="Seu email"
            placeholderTextColor="#FFF"
            keyboardType='email-address'/>

      </View>

      <View style={styles.form}>{/* INPUT 1 */}
        <Text style={styles.texto}>Phone:</Text>

        <TextInput
            style={styles.inputText}
            placeholder="Digite o seu Telefone"
            placeholderTextColor="#FFF"
            keyboardType="phone-pad"
            maxLength={11}/>

      </View>

      <View style={styles.form}>{/* INPUT 1 */}
        <Text style={styles.texto}>CPF:    </Text>

        <TextInput
            style={styles.inputText}
            placeholder="Digite o seu CPF"
            placeholderTextColor="#FFF"
            maxLength={14}/>

      </View>

      <View style={styles.form}>{/* INPUT 2 */}
        <Text style={styles.texto}>Senha:</Text>

        <TextInput
            style={styles.inputText}
            placeholder="Digite a senha"
            placeholderTextColor="#FFF"
            secureTextEntry={true} />

      </View>

      <View style={styles.form}>{/* INPUT 2 */}
        <Text style={styles.texto}>Repita:</Text>

        <TextInput
            style={styles.inputText}
            placeholder="Digite novamente a sua senha"
            placeholderTextColor="#FFF"
            secureTextEntry={true} />

      </View>

      <View style={styles.containerBotao}>{/* BOTAO */}
        <TouchableOpacity style={styles.botao}>
             <Text style={styles.textoBotao}>Registrar</Text>
        </TouchableOpacity>
      </View>
    

    </View>
  );
}