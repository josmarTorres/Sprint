import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button} from 'react-native';
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'
import { getServiceByID } from "../../api/Servicios"

const ProfileProd = ({navigation, route}) =>{
    let categoria = route.params.categoria;
    let id = route.params.servicio;
    console.log(categoria+" "+id);

    let servicio = getServiceByID(categoria, id);
    console.log(servicio);

    return(
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <Image source={{uri: servicio.avatar}} style={{ width: 360, height: 200 }} /> 
                    <Text style={styles.baseText}>
                        {servicio.name}
                    </Text>
                    <Text style={{fontSize:15, color: '#3498DB', fontWeight: 'bold', margin: 5}}>
                        precio: ${servicio.precio} 
                    </Text>
                    <Text>
                        {servicio.desc}
                    </Text>
                    <Text style={{fontSize:20, color: '#FFB300', fontWeight: 'bold', margin: 5}}>
                        Detalles
                    </Text>
                    <Text >
                        {servicio.detalles}
                    </Text>
                    <Text style={{fontSize:20, color: '#FFB300', fontWeight: 'bold', margin: 5}}>
                        Servicios relacionados
                    </Text>
                    <Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                    <View style= {{flex: 1, height: 110, width: 150, margin: 30, marginLeft: 100}}>
                        <Button
                            title ={'Presupuestar'}
                            color = '#FFB72E'
                            onPress={() => navigation.navigate("Midnavigator", {screen: "Seltec"})}
                        />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#ffffff',
      },
    baseText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000'
    },
    scroll: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
})
export default ProfileProd;