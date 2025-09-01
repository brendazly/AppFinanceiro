import {View, Text, StyleSheet, Image} from 'react-native';

 interface propsTaxas{
        dolar:any,
        euro:any,
        cdi:any,
        selic:any,
    }

export default function Taxas({dolar, euro, cdi, selic} : propsTaxas){
            
    const dolarNum = Number(dolar) || 0;
    const euroNum = Number(euro) || 0;


    return(
        <View style={styles.principal}>
                <Text style={styles.texto}>Dólar: R${dolar?.toFixed(2)}</Text>
                <Text style={styles.texto}>Euro: R${euro?.toFixed(2)}</Text>
                <Text style={styles.texto}>CDI: {cdi}%</Text>
                <Text style={styles.texto}>Selic: {selic}%</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    principal:{
        width:'80%',
        borderWidth:0.6,
        padding:20,
        margin:20
    },
    texto:{
        fontSize:20
    },
    imagem:{
        width:80,
        height:80,
    },
    images:{
        flexDirection:'row',
        marginLeft:53
    }
});