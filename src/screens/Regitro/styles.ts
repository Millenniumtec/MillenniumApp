import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#022238',
      alignItems: 'center',
    },

    image:{
        marginTop:50,
        width:150,
        height:150,
        marginLeft:10,
        borderTopColor:"#FFF"
    },

    frase:{
        fontSize:24,
        color:"#FFF",
        marginBottom:25
    },

    texto:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:18,
        marginLeft:12
    },

    inputText:{
        flex:1,
        width:'50%',
        height: 56,
        backgroundColor:'#0c466e',
        borderRadius: 10,  
        color: '#FFF',
        padding:16,
        fontSize:16,
        marginLeft:12    
    },

    form:{
        width:'100%',
        flexDirection:"row",
        marginBottom:20,
        alignItems:'center',
    },

    botao:{
        backgroundColor:'#005691',
        width:150,
        alignItems:'center',
        marginLeft:10,
        borderRadius:10
    },

    textoBotao:{
        color:'#FFF',
        padding:10,
        fontSize:18
    },

    containerBotao:{
        marginTop:20,
        flexDirection:"row",
        
    }

  });