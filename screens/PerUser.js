import React from 'react'
import { StyleSheet, Text, View, Button, Alert, Image, useWindowDimensions, SafeAreaView, FlatList} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import pallete from '../config/colors'
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { getServicesByCat } from "../api/Servicios"
    

const PerUser = ({ navigation, route }) =>{
    let cat = route.params.categoria;
    console.log(cat)

    let servicios = getServicesByCat(cat);
    console.log(servicios)
    /* let item = servicios[1]; */
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    
    const renderItem = ({ item }) => (
        <>
                    <Divider/>
                        <View style={styles.orderCard}>
                            <View style = {{width: 100}}> 
                                <Image style = {{ width: 100, height: 130 }} source = {{ uri: item.avatar }}/>
                            </View>
                        </View>
        </>
    );
            return (
                <View style = {styles.container}>
                    <ScrollView>    
                        <View style ={{backgroundColor: '#ffffff', elevation: 10, width: 330, height: 250, borderRadius: 20, alignContent: 'center', justifyContent: 'center', alignItems: 'center', margin: 10, paddingTop: 70}}>
                            <Image
                                style={{position: 'absolute', width: 330, height: 250, borderRadius:20, marginTop:20}}
                                source={{
                                uri: 'http://c.files.bbci.co.uk/15F60/production/_103225998_sunset3.jpg',
                                }}
                            />
                            <Avatar.Image size={150} style={{position: 'relative', marginTop: 100}} source={require('../assets/oscar.jpeg')} />
                            <Text style = {{fontSize: 25, fontWeight: 'bold'}}> Oscar Josue Avila Gutierrez</Text>
                        </View>
                        <View style = {{marginTop: 50, marginLeft: 80}}>
                            <Text style={{fontSize: 17}}>Calificacion de usuario: </Text>
                            <View style={{flex:1, flexDirection: 'row', marginLeft: 10}}>
                                <Avatar.Icon size = {20} style={{marginLeft: 10}} icon = "star"/>
                                <Avatar.Icon size = {20} style={{marginLeft: 10}} icon = "star"/>
                                <Avatar.Icon size = {20} style={{marginLeft: 10}} icon = "star"/>
                                <Avatar.Icon size = {20} style={{marginLeft: 10}} icon = "star"/>
                                <Avatar.Icon size = {20} style={{marginLeft: 10}} icon = "star"/>
                            </View>
                        </View>
                        <View style={styles.Vistas}>
                            <Text style={{fontSize: 20, marginTop: 5}}>
                                Servicios contratados:
                            </Text>
                        </View>
                        <ScrollView>
                            <SafeAreaView style={styles.container}>
                                <FlatList
                                    data={servicios}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                    refreshing={false}
                                    onRefresh={() => reloadData()}
                                />
                            </SafeAreaView>
                        </ScrollView>
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
        padding: 5,
    },
    Botones:{
        flexDirection: 'row',
        padding: 20,
        margin: 20,

    },
    orderCard: {
        backgroundColor: '#FFFFFF',
        height: 130,
        width: 320,
        elevation: 5,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 6,
        marginBottom: 6,
        borderRadius: 3,
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'row'
      },
});

export default PerUser;