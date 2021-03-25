import React, {useState} from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import SearchBar from '../../Components/Searchbar';
import logo from '../../assets/imagen1.jpeg';
//import imagen from '../../assets/imagen2.jpeg';


 const Home = ({navigation}) => {
      return(
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                        Bienvenido
                        
                </Text>
                <SearchBar/>

                <ScrollView
                    horizontal={true}
                    //contentContainerStyle={{ width: `${100 * intervals}%` }}
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={200}
                    decelerationRate="fast"
                    pagingEnabled
                  >
                     <Image source={logo} style={{ width: 305, height: 159 }} /> 
                     {/*<Image source={imagen} style={{ width: 305, height: 159 }} /> */}
                    
                </ScrollView>

                <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
          </Text>
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
      //marginTop: Constants.statusBarHeight,
    },
    scrollView: {
      backgroundColor: '#ffb72e',
      //marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
  });
export default  Home;