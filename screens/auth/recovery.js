import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input';
import { ForgotPassword } from "../../api/aut";
import pallete from '../../config/colors'
import { LinearGradient } from 'expo-linear-gradient';

 
const RecoveryScreen = ({navigation}) => {

    const [user, setUser] = useState('')
    const phoneRef = useRef(undefined);

    const ForgotPass = async () =>{
      let data = {user: user}
      let response = await ForgotPassword(user)
      console.log(response)
      if (response.code==='UserNotFoundException') {
        alert('Correo o contraseña inexistente') 
      }else if (response.code==='LimitExceededException') {
        alert('Ha exedido el limite de intentos, intentelo mas tarde')
      }else{
        navigation.navigate("recovery2")
      }
  }

      return(
        <LinearGradient colors={[pallete.blanco,pallete.blanco,pallete.blanco, pallete.secondary]} style={styles.container}>
          <View style={styles.container}>  
           {/*} <PhoneInput
              style = {{margin: 5, height: 60, width:300, backgroundColor: "#ffffff", borderRadius:10}}
              label = "telefono"
              value = {telefono}
              ref = {phoneRef}
              onChangePhoneNumber = {telefono =s> setTelefono(telefono)}
              />*/}
              <TextInput
              style = {{margin: 5, height: 60, width:300, backgroundColor: "#ffffff", borderRadius:10}}
              label = "correo electronico"
              value = {user}
              onChangeText = {user => setUser(user)}
              />
              
            <Button
              title = "Enviar"
              onPress={() => ForgotPass()}
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

export default RecoveryScreen;