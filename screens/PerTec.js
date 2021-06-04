import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Alert, Modal, Platform, Image, ScrollView} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import pallete from '../config/colors'
import { Divider } from 'react-native-elements';
import Foto from '../Components/Fotos';
import Mapa from '../Components/Mapa';
import { TextInput } from 'react-native-gesture-handler';
import Midnavigator from '../navigators/midnavigator';


const PerTec = ({ navigation }) =>{

    const [modaOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState('')
    return (
            <View style = {styles.container}>
                <ScrollView>
                    <View style ={{backgroundColor: '#ffffff', elevation: 10, width: 330, height: 250, borderRadius: 20, alignContent: 'center', justifyContent: 'center', alignItems: 'center', margin: 10, paddingTop: 70}}>
                        <Image
                            style={{width: 330, height: 250, position: 'absolute', marginTop: 40, borderRadius: 10}}
                            source={{
                            uri: 'https://boxito.com/wp-content/uploads/2020/05/plomeria-para-todos.jpg',
                            }}
                        />
                        <Avatar.Image size={150} style ={{marginTop: 200, elevation: 10}}source={require('../assets/trab1.jpg')} />
                        <Text style={{fontSize: 25, marginTop: 10, fontWeight: 'bold'}}>
                            Atenojenes Galindo Galindo
                        </Text>
                    </View>
                    
                    <Text style={{fontSize: 18, marginTop: 120, fontWeight: 'bold'}}> 
                        Capacidades
                    </Text>
                    <View style={{flex: 1,flexDirection: 'row', margin: 25}}>
                        <Avatar.Icon size = {50} style={{marginLeft: 10}} icon = "shower"/>
                        <Avatar.Icon size = {50} style={{marginLeft: 50}} icon = "power-socket"/>
                        
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                        <Text style={{fontSize: 20, marginLeft: 17}}>
                            Plomeria
                        </Text>
                        <Text style={{fontSize: 20, marginLeft: 17}}>
                            Electricidad
                        </Text>
                    </View>
                    <Divider/>
                    <View style = {styles.Vistas}>
                        <Text style = {styles.Texto}>
                            Atenojenes galindo galindo ha terminado 122 servicios
                        </Text>
                    </View>
                    <View style = {{flexDirection: 'row', height: 40, width: 150, marginLeft: 65}}>
                        <Button
                            title = {'Presupuestar'}
                            color = '#FFB72E'
                            onPress={() => navigation.navigate("Presupuest")}/>
                        
                        <View style={{width: 20}}></View>
                        <Button
                            title = {'Volver'}
                            color = '#040C8B'
                        />
                    </View>
                </ScrollView>
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
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        height: 40,
        width: 150,
        backgroundColor: "#ffb72e", 
        borderRadius:10, 
        padding: 20
    },
    modalContent:{
        flex:1,
        width: 300,
        height: 300,
    },
    modal:{
        margin: 20,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        alignItems: 'center',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 30,
        height: 500,
        width: 320,
    },
});

export default PerTec;