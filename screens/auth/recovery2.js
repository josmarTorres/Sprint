import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { forgotPasswordSubmit } from "../../api/aut";
import pallete from '../../config/colors'
import { LinearGradient } from 'expo-linear-gradient';


const Recovery2Screen = ({navigation}) => {

    const [user, setUser] = useState('')
    const [newcontraseña, setNewcontraseña] = useState('')
    const [code, setCode] = useState('')

    const ConfirmPass = async () =>{
        let response = await forgotPasswordSubmit(user, code, newcontraseña)
        console.log(response)
        try{
            if (response.code==='UserNotFoundException') {
                alert('Correo o contraseña invalido') 
            } else if (response.code==='CodeMismatchException'){
                alert('Codigo de verificacion no valido, por favor intente nuevamente.')
            }else if (response.code==='LimitExceededException') {
                alert('Ha exedido el limite de intentos, intentelo mas tarde')
            }else if(response.code==='passwordChanged'){
                alert('La contraseña ha sido cambiada con exito.')
                navigation.navigate("login")
            }
        }catch{
            console.log(response.code)
        }
    }
        
    
//LimitExceededException
  
      return(
        <LinearGradient colors={[pallete.blanco,pallete.blanco,pallete.blanco, pallete.secondary]} style={styles.container}>
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
                <Button
                    title = "Confirmar"
                    onPress={() => ConfirmPass()}
                />
            </View>
            </LinearGradient>

        );
    };
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
  
  export default Recovery2Screen;