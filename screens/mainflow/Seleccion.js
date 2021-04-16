import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'



const Seleccion = ({ navigation }) => {

  //Dimensiones
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

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
      avatar: 'https://static.wikia.nocookie.net/featteca/images/a/a1/Shadow_Midas_-_Boss_-_Fortnite.png/revision/latest?cb=20201027223734&path-prefix=es',
      desc: 'descripcion 2 ',
      origin: "url"
    },
    {
      key: 3,
      name: 'Herman Mankiewicz',
      avatar: 'https://los40.com/los40/imagenes/2020/11/20/album/1605868442_147516_1605873111_album_normal.jpg',
      desc: 'descripcion 3 ',
      oringin: "url"
    },
    {
      key: 4,
      name: 'Guillermo Arriaga',
      avatar: 'https://cdn-3.expansion.mx/dims4/default/0d5c96e/2147483647/strip/true/crop/1054x1500+0+0/resize/1800x2562!/quality/90/?url=https%3A%2F%2Fcherry-brightspot.s3.amazonaws.com%2Fb8%2Fc4%2F2e1a1e7f4f2cacadec08268c27ac%2Fqui399quien50leonardomanzo111017lm41.jpg',
      desc: 'descripcion 4 ',
      origin: "url"
    },
    {
      key: 5,
      name: 'Orson welles',
      avatar: 'https://www.biografiasyvidas.com/biografia/w/fotos/welles_orson.jpg',
      desc: 'descripcion 5 ',
      origin: 'url'
    }
  ]

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#ffffff',
    },
    text: {
      fontSize: 30,
      color: '#000000',
      backgroundColor: '#ffb72e'
    },
    anuncio: {
      fontSize: 15,
      backgroundColor: '#ffb72e',
    },
    texto: {
      fontSize: 25,
      backgroundColor: '#ffffff',
  
    },
    categorias: {
      width: 150,
      height: 200,
      margin: 10,
    },
    orderCard: {
      backgroundColor: '#FFFFFF',
      height: windowHeight / 5.5,
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
    orderCardIcon: {
        backgroundColor: '#1f62cf',
        width: windowHeight / 5.5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    supBar: {
      flex: 4,
      flexDirection: 'row',
      justifyContent:'center',
      backgroundColor: '#FFB72E',
      height: 20,
      width: windowWidth
    },
    menuBar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'center',
        height: 30,
        width: windowWidth,
        backgroundColor: '#FFB72E'
    },
    orderCardContent: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        justifyContent:'center'
    }
  })

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.orderCard} >
        <View style = {{ width: windowHeight / 5.5 }}>
          <Image style = {{ width: windowHeight / 5.5, height: 130 }} source = {{ uri: item.avatar }}/>
        </View>
        <View style={styles.orderCardContent}>
            <Text style={{ fontWeight: 'bold' }}>Nombre: {item.name}</Text>
            <Text>{item.desc}</Text>
        </View>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={{width: windowWidth, flex: 1, flexDirection: 'column'}}>
        <View style = {styles.menuBar}>
          <Button icon="menu" color={'#000000'}></Button>
        </View>
        <View style = {styles.supBar}>
          <Text>Seleccion de servicio</Text>
        </View>
      </View>
      <SafeAreaView>
        <SafeAreaView style={styles.container}>
          <FlatList
              data={usersData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              refreshing={false}
              onRefresh={() => reloadData()}
          />
        </SafeAreaView>
      </SafeAreaView>
    </>
  );

};

export default Seleccion;