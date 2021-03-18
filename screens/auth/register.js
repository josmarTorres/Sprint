import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

const RegisterScreen = ({navigation}) => {

  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

    return(
        <View style={styles.container}>
          <Text>Registro de usuario</Text>

          <TextInput
            label = "Correo"
            value = {correo}
            onChangeText = {correo => setCorreo(correo)}
          />

          <TextInput
            label = "Contraseña"
            value = {contraseña}
            onChangeText = {contraseña => setContraseña(contraseña)}
          />

          <TextInput
            label = "Nombre"
            value = {nombre}
            onChangeText = {nombre => setNombre(nombre)}
          />

          <TextInput
            label = "telefono"
            value = {telefono}
            onChangeText = {telefono => setTelefono(telefono)}
          />

          <Button
            title = "Crear cuenta"
            onPress={() => navigation.navigate("registen")}
          />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
});

export default RegisterScreen;