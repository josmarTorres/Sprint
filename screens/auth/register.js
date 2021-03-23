import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const RegisterScreen = ({navigation}) => {

  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [apepat, setApepat] = useState('')
  const [apemat, setApemat] = useState('')

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
            onChangeText = {contraseña => setContraseña(contraseña)}
          />

          <Button
            title = "Crear cuenta"
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

export default RegisterScreen;