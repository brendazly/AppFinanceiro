import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {
    createStaticNavigation,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.bloco}>
                <Text style={styles.Texto}>App Financeiro</Text>
                <Text style={styles.Texto2}>Seja bem-vindo!</Text>

                <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Financiamento' as never)}
                >
                <Text style={styles.textoBtn}>Financiamento</Text>
                </TouchableOpacity>

                  <TouchableOpacity 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('Investimento' as never)}
                >
                    <Text style={styles.textoBtn}>Investimento</Text>
                </TouchableOpacity>

                
        </View>
    );
} 

const styles = StyleSheet.create({
    bloco:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    Texto:{
        marginTop:30,
        fontSize:30,
        fontWeight:700
    },

     Texto2:{
        marginTop:20,
        fontSize:30,
        fontWeight:400,
        textAlign:'center'
    },

    btn:{
       backgroundColor:"#c9d7ebff",
       width:'80%',
       padding:10,
       marginBottom:20,
       marginTop: 20,
       borderRadius:20
    },
    textoBtn:{
        color:"#0b1d36ff",
        fontSize:30,
        textAlign:'center'
    }
});