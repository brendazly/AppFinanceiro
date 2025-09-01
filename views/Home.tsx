import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../assets/components/Api';
import Taxas from '../assets/components/Taxas';

export default function Home() {
  const [dolar, setDolar] = useState<number>(0);
  const [euro, setEuro] = useState<number>(0);
  const [cdi, setCdi] = useState<number>(0);
  const [selic, setSelic] = useState<number>(0);

  async function buscaDados() {
    try {
      const response = await api.get('finance?key=657cb0c7');
      const resultados = response.data.results;

      setDolar(resultados.currencies.USD.buy);
      setEuro(resultados.currencies.EUR.buy);
      setCdi(resultados.taxes[0].cdi);
      setSelic(resultados.taxes[0].selic);
    } catch (error) {
      console.log('Erro ao buscar dados da API:', error);
    }
  }

  useEffect(() => {
    buscaDados();
  }, []);

   const navigation = useNavigation();

  return (
    <View style={styles.bloco}>
      <Image source={require('../assets/img/logodn.png')} style={styles.logo} />

      <Text style={styles.Texto}>Bem vindo ao seu App Financeiro!</Text>

      <Taxas dolar={dolar} euro={euro} cdi={cdi} selic={selic} />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Financiamento' as never)}
      >
        <Text style={styles.textoBtn}>Financiamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Investimento' as never)}
      >
        <Text style={styles.textoBtn}>Investimento</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#dde8ec',
  
  },
  Texto: {
    fontSize: 30,
    textAlign: 'center',
  },
  btn: {
    backgroundColor:'#50b3ec',
    width: '80%',
    padding: 10,
    borderRadius: 20,
    marginTop: 10
  },
  textoBtn: {
    color: '#000000ff',
    fontSize: 30,
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
});