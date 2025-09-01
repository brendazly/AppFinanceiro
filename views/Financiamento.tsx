import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native';

export default function Financiamento(){
    const [valor, setValor] = useState<string>('');
    const [prazo, setPrazo] = useState<string>('');
    const [parcela, setParcela] = useState<number | null>(null);

    const calcularFinanciamento = () => {
    const taxaAno = 12; 
    const v = parseFloat(valor);
    const n = parseInt(prazo);

    if (isNaN(v) || isNaN(n) || v <= 0 || n <= 0) {
      setParcela(null);
      alert('Preencha os campos corretamente');
      return;
    }

    const i = Math.pow(1 + taxaAno / 100, 1 / 12) - 1;

    const p = v * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
    setParcela(p);
  };

  
  return(
        <View style={styles.bloco}>
          <Image source={require('../assets/img/logodn.png')} style={styles.logo} />
          <Text style={styles.text}>Financiamentos</Text>

          <Text style={styles.label}>Valor a ser financiado:</Text>
          <TextInput
            style={styles.input}
            value={valor}
            onChangeText={setValor}
            keyboardType="numeric" 
          />

          <Text style={styles.label}>Prazo:</Text>
          <TextInput
            style={styles.input}
            value={prazo}
            onChangeText={setPrazo}
            keyboardType="numeric" 
          />
            
          <TouchableOpacity
            style={styles.btn} onPress={calcularFinanciamento} >
            <Text style={styles.textoBtn}>Calcular Financiamento</Text>
          </TouchableOpacity>

          {parcela !== null && (
          <Text style={styles.resultado}>
            {parcela.toFixed(2)}</Text>
          )}
            
        </View>
    )
}

const styles = StyleSheet.create({
  bloco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Texto: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: '#00a1feff',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 30,
  },
  textoBtn: {
    color: '#FFF',
    fontSize: 24,
    textAlign: 'center',
  },
  logo: {
    marginBottom: 35,
    height: '20%',
    width: '35%'
  },
  text: {
    marginBottom: 15,
    fontSize: 30,
  }, 
  input:{
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    width: '85%',
    textAlign: 'left'   
  },
  label:{
    fontSize: 20,
    marginBottom:5,
    textAlign: 'left',   
    alignSelf: 'flex-start',
    marginLeft: 30
  },
  resultado: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});