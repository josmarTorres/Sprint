import React, {useRef, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { confirmSignUp } from "../../api/aut";
import { Avatar, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { pallete } from '../../config/colors';

 
const RecoveryScreen = ({navigation}) => {

    const [user, setUser] = useState('')
    const [code, setCode] = useState('');


    const confirm = async () =>{
      let data = {username:user, code: code}
      let response = await confirmSignUp(user, code);
      console.log(response);
      navigation.navigate("login");
    }
      
      return(
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <Avatar.Icon size={170} icon="key" color="#323DC1"/>
            </View>
  
            <TextInput
            style = {{margin: 5, height: 60, width:300, backgroundColor: "#ffffff", borderRadius:10, marginTop:20}}
            label = "correo electronico"
            value = {user}
            onChangeText = {user => setUser(user)}
            />

            <TextInput
            style = {{margin: 5, height: 60, width:300, backgroundColor: "#ffffff", borderRadius:10}}
            label = "codigo de verificacion"
            value = {code}
            onChangeText = {code => setCode(code)}
            />
            
            <Button
              title = "Confirmar"
              onPress={() => confirm()}
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