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
                <View style = {{flexDirection: 'row', height: 40, width: 150}}>
                    <Modal
                    visible={modaOpen} 
                    animationType={'slide'}
                    transparent = {true}
                    >
                        <View style = {styles.modal}>
                        <ScrollView>
                            <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <View style = {{height: 100, width: 200, margin: 10, paddingRight: 30}}>
                                    <Foto/>
                                    <View style = {{width: 10, height: 30}}>

                                    </View>
                                    
                                </View>
                                <View style = {{flex: 1, flexDirection: 'column', width: 50, margin: 20, justifyContent: 'center', alignItems: 'center'}}> 
                                    <TextInput
                                        style = {styles.Botones}
                                        label = "correo electronico"
                                        value = {user}
                                        onChangeText={user => setUser(user)}
                                    />
                                </View>
                                <Mapa/>
                            </View>
                            <View style = {{width: 150, height: 100, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                                <Button
                                title ={'Cancelar'}
                                color = '#FFB72E'
                                onPress = {() => setModalOpen(false)}
                                >
                                </Button>
                                <Button
                                title ={'Presupuestar'}
                                color = '#FFB72E'
                                onPress = {() => setModalOpen(false)}
                                >
                                </Button>
                            </View>
                            </ScrollView>
                        </View>
                    </Modal>
                    <Button
                        title = {'Presupuestar'}
                        color = '#FFB72E'
                        onPress={() => navigation.navigate("Midnavigator", {screen: "presupuest"})}
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