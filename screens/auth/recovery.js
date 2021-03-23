import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
 
const RecoveryScreen = ({navigation}) => {

    const [correo, setCorreo] = useState('')
  
      return(
          <View style={styles.container}>
            <Text>Ingrese el correo al que sera enviado</Text>
  
            <TextInput
              style = {{margin: 5, height: 60, width:300, borderColor: "#FFE3AD"}}
              label = "Correo"
              value = {correo}
              onChangeText = {correo => setCorreo(correo)}
            />
  
            <Button
              title = "Enviar"
              onPress={() => navigation.navigate("recovery2")}
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