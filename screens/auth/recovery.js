import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import PhoneInput from 'react-native-phone-input';
import { ForgotPassword } from "../../api/aut";

 
const RecoveryScreen = ({navigation}) => {

    const [user, setUser] = useState('')
    const phoneRef = useRef(undefined);

    const ForgotPass = async () =>{
      let data = {user: user}
      let response = await ForgotPassword(user)
      console.log(response)
      navigation.navigate("recovery2")
  }

      return(
          <View style={styles.container}>
            <Text>Ingrese el numero de telefono</Text>
  
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

export default RecoveryScreen;