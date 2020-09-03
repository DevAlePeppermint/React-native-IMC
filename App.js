import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
  const[peso, setPeso] = useState('');
  const[altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if(imc < 18.6){
      alert('Cuidado! você está abaixo do peso. ' + imc.toFixed(1));
    } else if (imc > 18.6 && imc < 24.9){
      alert('Seu IMC está ideal. ' + imc.toFixed(1))
    } else {
      alert('Seu IMC está acima do ideal. ' + imc.toFixed(1))
    }

  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calcule seu IMC!</Text>

      <TextInput 
      style={styles.input}
      value={peso}
      onChangeText={(peso) => setPeso(peso)}
      placeholder="Peso (kg)"
      keyboardType="numeric"
      />

      <TextInput 
      style={styles.input}
      value={altura}
      onChangeText={(altura) => setAltura(altura)}
      placeholder="Altura (cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}>

        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,

  },
  
  title:{
    textAlign:'center',
    marginTop:20,
    fontSize:30,
    padding:10
  },

  input:{
    backgroundColor:'#121212',
    borderRadius:8,
    margin:15, 
    padding:10,
    color:'#FFF',
    fontSize: 20
  },

  button:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'grey',
    padding:10,
    borderRadius:8,
  },

  buttonText:{
    color:'white',
    fontSize:25,
  }
 
});