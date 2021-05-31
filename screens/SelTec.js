import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'

const SelTec = ({ navigation }) => {

  //Dimensiones
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const usersData = [
    {
      key: 1,
      name: 'Josmar Ulises Torres Miranda',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNZK8AfLKtVSW5Gg2xwL4V7kaooNsHN2P_60xiCfrghhzKq0&s',
      desc: 'Aqui podras ver los servicios de plomeria',
      origin: 'asset'
    },
    {
      key: 2,
      name: 'Atenojenes Galindo Galindo',
      avatar: 'https://serviciotecnicotarragona.net/wp-content/uploads/2016/11/ylakio-statyba.pnghttps://solar-energia.net/uploads/cms/electricidad.webp',
      desc: 'Aqui podras ver los servicios de Electricidad ',
      origin: "url"
    },
    {
      key: 3,
      name: 'Ramiro Tovar Miranda',
      avatar: 'https://lh3.googleusercontent.com/proxy/rYFaFr249BqvLLgoJXOeSeN2LI1UB3pEMPvrJapdzIuztJxgkYM4XqO6yxxun_VTnrXSL4Ni5DXPUEg3uuin5hYsHc5P0oDACwyRGaYUPX5sLRGRJZxh0jAM9zSP8cM8_-L2-EMBzE2eQcQmaxIOE6nJHNowmCcsDCDw6R4FT8k',
      desc: 'Aqui podras ver los servicios para mascotas',
      oringin: "url"
    },
    {
      key: 4,
      name: 'German Valdez Moreno',
      avatar: 'https://www.reparaciondecalderasenlasrozas.com/wp-content/uploads/2014/07/reparacion-mantenimiento-instalacion-de-calderas.png',
      desc: 'Aqui podras ver los servicios de colocacion de azulejos',
      origin: "url"
    },
    {
      key: 5,
      name: 'Silverio Romero Romero',
      avatar: 'https://img.milanuncios.com/fg/2658/70/265870474_8.jpg?VersionId=uuwxpNpiYCtXkz5qA.2v3b9ZFmKd_HvM',
      desc: 'Aqui podras ver los servicios de pintura',
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
    <TouchableOpacity style={styles.orderCard} onPress={() => navigation.navigate("Midnavigator", {screen: "Pertec"})}>
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
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <FlatList
              data={usersData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              refreshing={false}
              onRefresh={() => reloadData()}
          />
        </SafeAreaView>
      </ScrollView>
  );

};

export default SelTec;