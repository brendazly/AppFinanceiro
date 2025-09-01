import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';

export default function Investimento() {
  const [investimentoInicial, setInvestimentoInicial] = useState<string>('');
  const [aporteMensal, setAporteMensal] = useState<string>('');
  const [aporteTempo, setAporteTempo] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularInvestimento = () => {
    let montante = Number(investimentoInicial);
    const aporte = Number(aporteMensal);
    const meses = Number(aporteTempo);

    if (isNaN(montante) || isNaN(aporte) || isNaN(meses)) {
      setResultado(null);
      return;
    }

    const taxaAnual = 12;
    const taxaMes = Math.pow(1 + taxaAnual / 100, 1 / 12) - 1;

    for (let i = 0; i < meses; i++) {
      montante = montante * (1 + taxaMes) + aporte;
    }

    setResultado(montante);
  };

  return (
    <View style={styles.bloco}>
      <Image source={require('../assets/img/logodn.png')} style={styles.logo} />
      <Text style={styles.text}>Investimentos</Text>

      <Text style={styles.label}>Valor de Investimento inicial:</Text>
      <TextInput
        style={styles.input}
        value={investimentoInicial}
        onChangeText={setInvestimentoInicial}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Aporte mensal:</Text>
      <TextInput
        style={styles.input}
        value={aporteMensal}
        onChangeText={setAporteMensal}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Aporte Tempo</Text>
      <TextInput
        style={styles.input}
        value={aporteTempo}
        onChangeText={setAporteTempo}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.btn} onPress={calcularInvestimento}>
        <Text style={styles.textoBtn}>Calcular Investimento</Text>
      </TouchableOpacity>

      {resultado !== null && (
        <Text style={styles.resultado}>
          {resultado.toFixed(2)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bloco: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 15,
    fontSize: 30,
  },
  btn: {
    backgroundColor: '#00a1feff',
    width: '80%',
    padding: 12,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 30,
  },
  textoBtn: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  logo: {
    marginBottom: 35,
    height: '20%',
    width: '35%'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
    width: '85%',
    textAlign: 'left',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  resultado: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
});