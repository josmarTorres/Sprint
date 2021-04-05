import { Auth } from 'aws-amplify';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { signUp } from "../../api/aut";

const RegisterScreen = ({navigation}) => {
  
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [apepat, setApepat] = useState('')
  const [apemat, setApemat] = useState('')
  

  const regist = async () =>{
    let data = {
      username: correo,
      password: contraseña, 
      phone_number: telefono, 
      email: correo,
      Nombre: nombre,
      ApellidoPaterno: apepat,
      ApellidoMaterno: apemat
    }
    let response = await signUp(data)
    console.log(response)
    navigation.navigate("confirm");
    };

    return(
        <View style={styles.container}>
          <Text>Registro de usuario</Text>

          <TextInput
            style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
            label = "Correo"
            value = {correo}
            onChangeText = {correo => setCorreo(correo)}
          />

          <TextInput
            style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
            label = "Nombre"
            value = {nombre}
            onChangeText = {nombre => setNombre(nombre)}
          />

          <TextInput
            style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
            label = "Apellido Paterno"
            value = {apepat}
            onChangeText = {apepat => setApepat(apepat)}
          />
          
          <TextInput
            style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
            label = "Apellido materno"
            value = {apemat}
            onChangeText = {apemat => setApemat(apemat)}
          />

          <TextInput
            style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
            label = "telefono"
            value = {telefono}
            onChangeText = {telefono => setTelefono(telefono)}
          />

          <TextInput
            style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
            label = "Contraseña"
            value = {contraseña}
            secureTextEntry = {true}
            onChangeText = {contraseña => setContraseña(contraseña)}
          />

          <Button
            title = "Crear cuenta"
            onPress={() => regist()}
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

export default RegisterScreen;