import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Avatar, Title } from 'react-native-paper';
import { SignIn, userInfo } from "../../api/aut";
import { LinearGradient } from 'expo-linear-gradient';
import pallete from '../../config/colors'


const LoginScreen = ({navigation}) => {
    
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    // -- Obtiene la largo y ancho de la pantalla -- //
    //const windowWidth = Dimensions.get('window').width;
    //const windowHeight = Dimensions.get('window').height;

    const login = async () => {
        let data = {user: user, password: password}
        let response = await SignIn(user, password)
        console.log(response)
    }


    return(
        <LinearGradient colors={[pallete.secondary, pallete.gray]} style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <Avatar.Icon size={150} icon="account" />
            </View>
            <Title style={{textAlign: 'center'}}>Inicio de sesion</Title>
            <TextInput
                style= {{margin: 5}}
                label="Usuario"
                value={user}
                onChangeText={user => setUser(user)}
            />
            <TextInput
                style= {{margin: 5}}
                label="Contraseña"
                value={password}
                secureTextEntry = {true}
                onChangeText={password => setPassword(password)}
            />
            <View style={{ flexDirection: "row" }}>
                <View style = {{margin: 5, flex: 1}}>
                    <Button
                        
                        title = "Iniciar sesión"
                        onPress={() => login()}
                    />
                </View>
                <View style = {{margin: 5, flex: 1}}>
                    <Button
                        title = "registro"
                        onPress={() => navigation.navigate("home")}
                    />
                </View>             
            </View>
            <View style={{margin: 10}}>
                    <Text 
                        onPress={() => getLoggedDetails()}
                        style={{textAlign: 'center', color: "blue"}}>
                        Olvide mi contraseña
                    </Text>
                </View>   
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column", 
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    }
});

export default LoginScreen;