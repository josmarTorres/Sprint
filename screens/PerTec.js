import React from 'react'
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import pallete from '../config/colors'
import { Divider } from 'react-native-elements';



const PerTec = ({ navigation }) =>{
    return (
        
            <View style = {styles.container}>
                <Avatar.Image size={150} source={require('../assets/trab1.jpg')} />
                <Text style={{fontSize: 18}}>
                    Atenojenes Galindo Galindo
                </Text>
                <Text style={{fontSize: 18}}> 
                    Capacidades
                </Text>
                <View style={styles.Vistas}>
                    <Avatar.Icon size = {50} icon = "shower"/>
                    <Text style={styles.Texto}>
                        Plomeria
                    </Text>
                </View>
                <Divider/>
                <View style = {styles.Vistas}>
                    <Text style = {styles.Texto}>
                        Atenojenes galindo galindo ha terminado 122 servicios
                    </Text>
                </View>
                <View style = {styles.Botones}>
                    <Button
                        title = {'Presupuestar'}
                        color = '#FFB72E'
                        />
                    <View style={{width: 20}}></View>
                    <Button
                        title = {'Volver'}
                        color = '#040C8B'
                        />
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        padding: 10
    },
    Texto:{
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    Vistas:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    Botones:{
        flexDirection: 'row',
        padding: 20,
        margin: 20,

    }
});

export default PerTec;