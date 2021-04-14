import React, {useState} from 'react';
import { StyleSheet, Text, View, Button , Modal} from 'react-native';
import { TextInput } from 'react-native-paper';
import { signUp } from "../../api/aut";
import { confirmSignUp } from "../../api/aut";
import pallete from '../../config/colors'
import { LinearGradient } from 'expo-linear-gradient';

const RegisterScreen = ({navigation}) => {
  
  const [correo, setCorreo] = useState('')
  const [contraseña, setContraseña] = useState('')
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [apepat, setApepat] = useState('')
  const [apemat, setApemat] = useState('')
  const [code, setCode] = useState('')

  const [ modalOpen, setModalOpen] = useState(false);

  const execProcess = async () =>{
    await regist()
    setModalOpen(true)
  }
  const closeProcess = async () =>{
    await confirm() 
    setModalOpen(false)
  }

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

    }

    const confirm = async () =>{
      let response = await confirmSignUp(correo, code);
      console.log(response);
      navigation.navigate("login");
    }

    const Palanca = () => {
      if (code==='') {
        return(<Button color='#717171' title = "Verificar"/>)
      }else{
        return(<Button style = {{margin: 5, height: 10, width: 30}} title = "Verificar" onPress={() => closeProcess()}/>)
      }
    }

    return(
      <LinearGradient colors={[pallete.blanco,pallete.blanco,pallete.blanco, pallete.secondary]} style={styles.container}>
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
            
          <Modal
            animationType = "slide"
            transparent = {true}
            visible = {modalOpen}
            >
            <View style={styles.modal}>
              <TextInput
                style = {{margin: 5, width: 200, height: 60,backgroundColor: "#ffffff"}}
                label = "codigo de verificacion"
                value = {code}
                onChangeText = {code => setCode(code)}
              />
              <Palanca/>
            </View>
          </Modal>
          <Button
            title = "Crear cuenta"
            onPress={() => execProcess()}
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
    },
    modal:{
      margin: 20,
      backgroundColor: '#FFF86A',
      borderRadius: 20,
      padding: 35,
      shadowColor: '#000',
      alignItems: 'center',
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 30,
    }
});

export default RegisterScreen;