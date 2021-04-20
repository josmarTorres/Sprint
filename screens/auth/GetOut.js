import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { forgotPasswordSubmit } from "../../api/aut";
import pallete from '../../config/colors'
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { signOut } from "../../api/aut"


const GetOut = ({navigation}) => {
    
    const cerrar = () =>{
        navigation.navigate("login")
        signOut()
    
}
      return(
        <LinearGradient colors={[pallete.blanco,pallete.blanco,pallete.blanco, pallete.secondary]} style={styles.container}>
            <View style={styles.container}>
                <Text> 
                    ¿Esta seguro?
                </Text>
                
                <Button
                    title = "Confirmar"
                    onPress={() => cerrar()}
                />
                <Button
                    title = "Cancelar"
                    onPress={() => navigation.navigate("Home")}
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
  
  export default GetOut;