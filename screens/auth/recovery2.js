import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { forgotPasswordSubmit } from "../../api/aut";


const Recovery2Screen = ({navigation}) => {

    const [user, setUser] = useState('')
    const [newcontraseña, setNewcontraseña] = useState('')
    const [code, setCode] = useState('')

    const ConfirmPass = async () =>{
        let data = {code: code, user: user, password: newcontraseña }
        let response = await forgotPasswordSubmit(user, code, newcontraseña)
        console.log(response)
        navigation.navigate("login")
    }
  
      return(
            <View style={styles.container}>
                <Text> 
                    ingrese el codigo que recibio
                </Text>
                <TextInput
                    style = {{margin: 10, height: 60, width:300, borderColor: "#FFE3AD"}}
                    label = "codigo"
                    value = {code}
                    onChangeText = {code => setCode(code)}
                />
                <Text> 
                    ingrese el usuario
                </Text>
                <TextInput
                    style = {{margin: 10, height: 60, width:300, borderColor: "#FFE3AD"}}
                    label = "Usuario"
                    value = {user}
                    onChangeText = {user => setUser(user)}
                />

                <Text>
                    confirme la nueva contraseña
                </Text>
                <TextInput
                    style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
                    label = "Contraseña"
                    value = {newcontraseña}
                    secureTextEntry = {true}
                    onChangeText = {newcontraseña => setNewcontraseña(newcontraseña)}
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
                    onPress={() => ConfirmPass()}
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