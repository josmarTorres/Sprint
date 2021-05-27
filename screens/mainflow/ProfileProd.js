import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'

const usersData = [
    {
      key: 1,
      name: 'plomeria',
      avatar: 'https://picsum.photos/800 ',
      desc: 'descripcion 1',
      origin: 'asset'
    },
    {
      key: 2,
      name: 'shadow Midas',
      avatar: 'https://picsum.photos/801 ',
      desc: 'descripcion 2 ',
      origin: "url"
    },
    {
      key: 3,
      name: 'Herman Mankiewicz',
      avatar: 'https://picsum.photos/802 ',
      desc: 'descripcion 3 ',
      oringin: "url"
    },
    {
      key: 4,
      name: 'Guillermo Arriaga',
      avatar: 'https://picsum.photos/803 ',
      desc: 'descripcion 4 ',
      origin: "url"
    },
    {
      key: 5,
      name: 'Orson welles',
      avatar: 'https://picsum.photos/804 ',
      desc: 'descripcion 5 ',
      origin: 'url'
    }
  ]

const ProfileProd = ({navigation}) =>{
return(
    <SafeAreaView>
        <View >
            <Image source={{uri: 'https://wpcdn.es.hudsonreed.com/info/blog/wp-content/uploads/2018/12/bfb2011_hr_e_1000_2.jpg?strip=all&lossy=1&quality=100&ssl=1'}} style={{ width: 360, height: 200 }} /> 
        </View>
        <Text style={styles.baseText}>
                Instalacion de lavabo
        </Text>
        <Text style={{fontSize:15, color: '#3498DB', fontWeight: 'bold', margin: 5}}>
            precio: $2000.00 
        </Text>
        <View >
            <ScrollView>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s,
                </Text>
                <Text style={{fontSize:20, color: '#FFB300', fontWeight: 'bold', margin: 5}}>
                    Detalles
                </Text>
                <Text >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s,
                </Text>
                <Text style={{fontSize:20, color: '#FFB300', fontWeight: 'bold', margin: 5}}>
                    Servicios relacionados
                </Text>
                
                <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </ScrollView>
        </View>
    </SafeAreaView>
);
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea',
      },
    baseText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#000'
    }
})
export default ProfileProd;