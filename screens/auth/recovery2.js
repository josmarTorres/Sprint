import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
 
const Recovery2Screen = ({navigation}) => {

    const [contraseña, setContraseña] = useState('')
  
      return(
            <View style={styles.container}>
                <Text> 
                    ingrese la nueva contraseña
                </Text>
                <TextInput
                    style = {{margin: 10, height: 60, width:300, borderColor: "#FFE3AD"}}
                    label = "Contraseña"
                    value = {contraseña}
                    onChangeText = {contraseña => setContraseña(contraseña)}
                />

                <Text>
                    confirme la nueva contraseña
                </Text>
                <TextInput
                    style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
                    label = "Contraseña"
                    value = {contraseña}
                    onChangeText = {contraseña => setContraseña(contraseña)}
                />
                <TouchableOpacity
                    onPress={() => alert('Hello, world!')}
                    style={{ backgroundColor: '#FFFFFF', height: 30, width:100, borderRadius:5 }}>
                        <Text style={{marginTop:5 ,textAlign: 'center'}}>
                            Confirmar
                        </Text>
                </TouchableOpacity>
                <Button
                    title = "Confirmar"
                    onPress={() => navigation.navigate("login")}
                />
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
  
  export default Recovery2Screen;