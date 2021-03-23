import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, View, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import SearchBar from '../../Components/Searchbar'

 const Home = ({navigation}) => {
      return(
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                        Bienvenido
                        
                </Text>
                <SearchBar/>
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