import React from 'react'
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import pallete from '../config/colors'
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

const PerUser = ({ navigation }) =>{
    return (
            <View style = {styles.container} >
            <ScrollView>    
                <View style ={{backgroundColor: '#ffe3ad', elevation: 10, width: 330, height: 250, borderRadius: 20, alignContent: 'center', justifyContent: 'center', alignItems: 'center', margin: 10, paddingTop: 70}}>
                    <Avatar.Image size={150} source={require('../assets/trab1.jpg')} />
                    <Text style={{fontSize: 22, }}>
                        Atenojenes Galindo Galindo
                    </Text>
                </View>
                <View style={styles.Vistas}>
                    <Text style={{fontSize: 20}}>
                        Apreciaciones
                    </Text>
                </View>
                <Divider/>
                <View style = {styles.Vistas}>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    style = {{flex: 1, flexDirection: 'row'}}
                    >
                        <View style = {{elevation:10, width: 150, height: 200, backgroundColor: '#fff', borderRadius: 10, margin: 10}}>
                            <Text style = {{fontSize: 130, color: '#A3A491'}}>
                                0
                            </Text>
                            <View style = {{backgroundColor: '#001078', width: 150, height: 27, borderBottomStartRadius: 10}}>
                                <Text style = {{color: '#fff'}}>
                                    Puntos
                                </Text>
                            </View>
                        </View>
                        <View style = {{elevation:10, width: 150, height: 200, backgroundColor: '#fff', borderRadius: 10, margin: 10}}>
                            <Text style = {{fontSize: 130, color: '#A3A491'}}>
                                0
                            </Text>
                            <View style = {{backgroundColor: '#001078', width: 150, height: 27, borderBottomStartRadius: 10}}>
                                <Text style = {{color: '#fff'}}>
                                    Servicios contratados
                                </Text>
                            </View>
                        </View>
                        <View style = {{elevation:10, width: 150, height: 200, backgroundColor: '#fff', borderRadius: 10, margin: 10}}>
                            <Text style = {{fontSize: 130, color: '#A3A491'}}>
                                0
                            </Text>
                            <View style = {{backgroundColor: '#001078', width: 150, height: 27, borderBottomStartRadius: 10}}>
                                <Text style = {{color: '#fff'}}>
                                    Reseñas
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>


                <View style = {styles.Vistas}>
                    <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    style = {{flex: 1, flexDirection: 'row'}}
                    >
                        <View style = {{elevation:10, width: 220, height: 250, backgroundColor: '#fff', margin: 10}}>
                            <View style = {{backgroundColor: '#001078', width: 220, height: 60, flexDirection: 'row'}}>
                                <Text style = {{color: '#fff', fontSize: 20, padding: 10}}>
                                    Nivel 1
                                </Text>
                                <View style = {{padding: 10, paddingLeft: 60, flexDirection: 'row'}}>
                                    <Avatar.Icon size={30} icon={'lock'} color = {'#001078'}/>
                                    <Text style ={{color: '#fff', padding: 5}}>
                                        1000
                                    </Text>
                                </View>
                            </View>
                            <Text style = {{fontSize: 50, color: '#A3A491'}}>
                                0
                            </Text>
                        </View>
                        <View style = {{elevation:10, width: 220, height: 250, backgroundColor: '#fff', margin: 10}}>
                            <View style = {{backgroundColor: '#001078', width: 220, height: 60, flexDirection: 'row'}}>
                                <Text style = {{color: '#fff', fontSize: 20, padding: 10}}>
                                    Nivel 2
                                </Text>
                                <View style = {{padding: 10, paddingLeft: 60, flexDirection: 'row'}}>
                                    <Avatar.Icon size={30} icon={'lock'} color = {'#001078'}/>
                                    <Text style ={{color: '#fff', padding: 5}}>
                                        1500
                                    </Text>
                                </View>
                            </View>
                            <Text style = {{fontSize: 50, color: '#A3A491'}}>
                                0
                            </Text>
                        </View>
                        <View style = {{elevation:10, width: 220, height: 250, backgroundColor: '#fff', margin: 10}}>
                            <View style = {{backgroundColor: '#001078', width: 220, height: 60, flexDirection: 'row'}}>
                                <Text style = {{color: '#fff', fontSize: 20, padding: 10}}>
                                    Nivel 3
                                </Text>
                                <View style = {{padding: 10, paddingLeft: 60, flexDirection: 'row'}}>
                                    <Avatar.Icon size={30} icon={'lock'} color = {'#001078'}/>
                                    <Text style ={{color: '#fff', padding: 5}}>
                                        2000
                                    </Text>
                                </View>
                            </View>
                            <Text style = {{fontSize: 50, color: '#A3A491'}}>
                                0
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <Text>
                        Lista de deseos
                    </Text>
                    
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
        padding: 10,
    },
    Texto:{
        fontSize: 20,
        
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

export default PerUser;