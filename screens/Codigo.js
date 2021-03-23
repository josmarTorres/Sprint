import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
 
const CodigoV = ({navigation}) => {

    const [codigo, setCodigo] = useState('')
  
      return(
            <View style={styles.container}>
                <Text> 
                    ingrese el codigo que recibio
                </Text>
                <TextInput
                    style = {{margin: 10, height: 60, width:300, borderColor: "#FFE3AD"}}
                    label = "Codigo"
                    value = {codigo}
                    onChangeText = {codigo => setCodigo(codigo)}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate("login")}
                    style={{ backgroundColor: '#FFFFFF', height: 30, width:100, borderRadius:5 }}>
                        <Text style={{marginTop:5 ,textAlign: 'center'}}>
                            Confirmar
                        </Text>
                </TouchableOpacity>
                {/*<Button
                    title = "Confirmar"
                    onPress={() => navigation.navigate("login")}
                />*/}
            </View>

        );
    };
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFE3AD',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
  
  export default CodigoV;