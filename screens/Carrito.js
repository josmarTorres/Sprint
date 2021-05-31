import React, { useState, useEffect } from 'react';
import { Image, Button, StyleSheet, ScrollView, Text, View, SafeAreaView, FlatList, TouchableOpacity, useWindowDimensions, Picker } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'

const Carrito = ({ navigation }) => {

  //Dimensiones
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedValue, setSelectedValue] = useState("java");

  const usersData = [
    {
      key: 1,
      name: 'Instalacion de boiler',
      avatar: 'https://media-adsa.camilyo.software/media-adsa/static/3681/273.jpg',
      desc: 'Aqui podras ver los servicios de plomeria',
      origin: 'asset'
    },
    {
      key: 2,
      name: 'Instalacion de azulejo',
      avatar: 'https://solar-energia.net/uploads/cms/electricidad.webp',
      desc: 'Aqui podras ver los servicios de Electricidad ',
      origin: "url"
    },
    {
      key: 3,
      name: 'Instalacion de puerta',
      avatar: 'https://www.blogdelfotografo.com/wp-content/uploads/2020/11/Mascota-composicion-fotografica.jpg',
      desc: 'Aqui podras ver los servicios para mascotas',
      oringin: "url"
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
      height: windowHeight / 3.2,
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
      <View style = {styles.orderCard}>
        <View style = {{width: windowHeight /5.5}}>
            <Image style = {{ width: windowHeight / 5.5, height: 130 }} source = {{ uri: item.avatar }}/>
            <Text style = {{margin:10}}>
                Cantidad:
            </Text>
            <Picker
              selectedValue = {selectedValue}
              style = {{height: 30, width: 80, marginLeft: 10}}
              onValueChange = {(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.item label = "1" value = "1"/>
                <Picker.item label = "2" value = "2"/>
                <Picker.item label = "3" value = "3"/>
                <Picker.item label = "4" value = "4"/>
                <Picker.item label = "5" value = "5"/>
            </Picker>
        </View>
        <View style ={styles.orderCardContent}>
            <Text style = {{fontWeight: 'bold'}}>Nombre: {item.name}</Text>
            <Text>{item.desc}</Text>
            <View style={{height: 50, width: 150, marginLeft: 30, marginTop: 10}}>
              {/* <Button
                onPress={() => navigation.navigate("Midnavigator", {screen: 'SelTec'})}
                title="Presupuestar"
                color="#FFB300"
                accessibilityLabel="Learn more about this purple button"
              /> */}
            </View>
            <View style={{height: 50, width: 150, margin: 10, marginLeft: 30}}>
              <Button
              /*  onPress={onPressLearnMore} */
                title="Cancelar"
                color="#FFB300"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
        </View>
      </View>
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

export default Carrito;