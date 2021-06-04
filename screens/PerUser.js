import React from 'react'
import { StyleSheet, Text, View, Button, Alert, Image, useWindowDimensions, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { Card, Avatar, Title, Paragraph } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import pallete from '../config/colors'
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { getServicesByCat } from "../api/Servicios"
    

const PerUser = ({ navigation, route }) =>{

    let Deseos = getServicesByCat("WishList");

    let cat = route.params.categoria;
    console.log(cat)

    let servicios = getServicesByCat(cat);
    console.log(servicios)

    /* let item = servicios[1]; */
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    const ListWishList = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Midnavigator", {screen: "ProfileProd", params: { servicio: item.key, categoria: item.cat }})}>
            <Card style={{ width: ((windowWidth)), marginRight: 5}}>
                <Card.Cover source={{ uri: item.avatar }}/>
                <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>{item.desc}</Paragraph>
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
    
    const renderItem = ({ item }) => (
        <>
                    <Divider/>
                        <TouchableOpacity style={styles.orderCard} onPress = {() => navigation.navigate("Midnavigator", {screen: "Ticket"})}>
                            <View style = {{width: windowHeight /5.5}}> 
                                <Image style = {{ width: windowHeight / 5.5, height: 130 }} source = {{ uri: item.avatar }}/>
                            </View>
                            <View style ={styles.orderCardContent}>
                                <Text style = {{fontWeight: 'bold'}}>{item.name}</Text>
                                <Text>{item.desc}</Text>
                            </View>
                        </TouchableOpacity>
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
                            <Avatar.Image size={150} style={{position: 'relative', marginTop: 200, elevation:20}} source={require('../assets/oscar.jpeg')} />
                            <Text style = {{fontSize: 25, fontWeight: 'bold'}}> Oscar Josue Avila Gutierrez</Text>
                            
                        </View>
                        <View style = {{marginTop: 100, marginLeft: 80}}>
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
                        <View>
                            <Text style = {{fontSize: 20, marginLeft: 10}}>
                                Lista de deseos:
                            </Text>
                            <ScrollView  horizontal>
                            <SafeAreaView style={styles.container}>
                                <FlatList
                                horizontal={true}
                                data={Deseos}
                                renderItem={ListWishList}
                                keyExtractor={item => item.id}
                                refreshing={false}
                                onRefresh={() => reloadData()}
                                />
                                </SafeAreaView>
                            </ScrollView>
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
        padding: 5,
    },
    Botones:{
        flexDirection: 'row',
        padding: 20,
        margin: 20,

    },
    orderCard: {
        backgroundColor: '#FFFFFF',
        height: 120,
        width: 320,
        elevation: 5,
        marginLeft: 5,
        marginRight: 10,
        marginTop: 6,
        marginBottom: 6,
        borderRadius: 3,
        overflow: 'hidden',
        flex: 1,
        flexDirection: 'row'
      },
      orderCardContent: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        justifyContent:'center'
    }
});

export default PerUser;