import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { Divider } from 'react-native-elements';
import Midnavigator from '../navigators/midnavigator';
import Mapa from '../Components/Mapa';


const Ticket = ({ navigation }) =>{

    const [modaOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState('')
    return (
            <View style = {styles.container}>
                <ScrollView>
                    <View style = {{flex: 1, flexDirection: 'column'}}>
                        <Avatar.Image size = {90} style={{marginLeft:130}} source={require('../assets/oscar.jpeg')}/>
                        <Text style = {{fontSize: 20, marginTop:10, marginLeft:80}}>Oscar Medina Lopez</Text>
                    </View>
                    <View style= {{flex: 1, flexDirection:'row', marginTop:50}}>
                        <Avatar.Image size={90} source={require('../assets/trab1.jpg')} />
                        <Text style={{fontSize: 18, marginTop: 30}}>
                            Tec: Atenojenes Galindo Galindo
                        </Text>
                    </View>
                    <View style = {{flex: 1, flexDirection: 'row'}}>
                        <Text style= {{fontSize: 20, marginTop: 30, marginLeft: 60}}> Categoria:</Text>
                        <Avatar.Icon size = {50} icon = "shower" style={{marginTop:20}}/>
                        <Text style={{fontSize:20, marginTop:30, marginLeft:10}}>
                            Plomeria
                        </Text>
                    </View>
                    
                    <View style={styles.Vistas}>
                        <Text style = {{fontSize: 30}}>
                            Servicio: Instalacion de regadera
                        </Text>
                    </View>
                    <Divider/>
                    <View style = {{flex: 1,flexDirection: 'column',margin:20, width: 250, height:150, alignItems: 'center'}}>
                        <Text style = {styles.Texto}>
                            Ubicacion
                        </Text>
                        <Mapa/>
                    </View>
                    {/* <View style = {{flexDirection: 'row', height: 40, width: 150}}> */}           
                        <View style={{width: 20}}></View>
                        <Button
                            title = {'Volver'}
                            color = '#040C8B'
                            onPress={() => navigation.goBack()}
                            />
                </ScrollView>
            </View>
                
            /* </View> */
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
        padding: 30,
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

export default Ticket;