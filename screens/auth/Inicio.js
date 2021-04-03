import React, {useState} from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'
import SearchBar from '../../Components/Searchbar';
import Carrusel from '../../Components/Carousel';
import CarouselCards from '../../CarouselCards';

 const Home = ({navigation}) => {
      return(
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                
                <SearchBar style = {styles.searchbar}/>
                <Text style={styles.text}>
                        Bienvenido        
                </Text>
                <Text style={styles.anuncio}>
                        Oferta del dia        
                </Text>
                <CarouselCards/>

                <Text style={styles.texto}>
                        Categorias
                </Text>
                <Image
                  style={styles.categorias}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
                <Image
                  style={styles.categorias}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
                <Image
                  style={styles.categorias}
                  source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
                <Button
                    title = "Confirmar"
                    onPress={() => navigation.navigate("login")}
                />
                
            </ScrollView>
          </SafeAreaView>
      );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#ffffff',
    },
    scrollView: {
      backgroundColor: '#ffffff',
      
    },
    text: {
      fontSize: 42,
      backgroundColor: '#ffb72e'
    },
    anuncio:{
      fontSize: 30,
      backgroundColor: '#ffb72e',
    },
    texto:{
      fontSize: 25,
      backgroundColor: '#ffffff',

    },
    categorias:{
      flex: 1,
      flexDirection: 'column',
      width: 100,
    height: 100,
    marginLeft: 10,
    },
  });
export default  Home;