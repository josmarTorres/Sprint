import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'
import SearchBar from '../../Components/Searchbar';
import CarouselCards from '../../CarouselCards';
import { Dimensions, FlatList } from 'react-native';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { getServicesByCat } from "./../../api/Servicios"
import { getCategorias } from "./../../api/Categorias"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

/*const RenderCards = ( props ) => {
  let item = props.item
 let imagen = null; 
 if (item.origin=="asset") {
    //imagen = require(item.avatar)
  }else
  imagen = {uri: item.avatar}
 return(
 <Card>
 <Card.Cover source={ imagen }/>
 <Card.Content>
   <Title>{item.name}</Title>
   <Paragraph>{item.desc}</Paragraph>
 </Card.Content>
</Card>
 );
} */


const Home = ({ navigation }) => {

  let Anuncios = getServicesByCat("Anuncios");
  let Categorias = getCategorias();
  let Deseos = getServicesByCat("WishList");
  
  const Ofertas = ({ item }) => (
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

  const ListWishList = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Midnavigator", {screen: "ProfileProd", params: { servicio: item.key, categoria: item.cat }})}>
      <Card style={{ width: ((windowWidth)-20), marginRight: 10}}>
        <Card.Cover source={{ uri: item.avatar }}/>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.desc}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  const ListaCategorias = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("selec", {categoria: item.name})}>
      <Card style={{ width: (windowWidth-20) }}>
        <Card.Cover source={{ uri: item.avatar }}/>
        <Card.Content>
          <Title>{item.name}</Title>
          <Paragraph>{item.desc}</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <SearchBar style={styles.searchbar} /> */}
        <View style={styles.text}>
        </View>
        <View>
          <Text style={styles.texto}>Bienvenido</Text>
        </View>
        <Text style={{fontSize: 14, marginLeft: 5}}>Oferta del día</Text>
        <View style = {{elevation: 5, marginBottom: 10}}>
          {/* <CarouselCards type = "Anuncios"/> */}
          <View>
            <ScrollView  horizontal>
              <SafeAreaView style={styles.container}>
                <FlatList
                  horizontal={true}
                  data={Anuncios}
                  renderItem={Ofertas}
                  keyExtractor={item => item.id}
                  refreshing={false}
                  onRefresh={() => reloadData()}
                />
              </SafeAreaView>
            </ScrollView>
          </View>
        </View>
        <Text style={styles.texto}>
          Categorias
        </Text>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <ScrollView
            // horizontal //scrolling left to right instead of top to bottom
            // showsHorizontalScrollIndicator={false} //hides native scrollbar
            //pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            style={{ flex: 1 }}
          >
            
            {/* {usersData.map(u => (
              <TouchableOpacity onPress={() => navigation.navigate("selec", {categoria: u.name})}>
                <Card style={{ width: 200, margin: 5 }}>
                  <Card.Cover source={{ uri: u.avatar }}/>
                  <Card.Content>
                    <Title>{u.name}</Title>
                    <Paragraph>{u.desc}</Paragraph>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))} */}
            <View style={{ flex: 1}}>
              <ScrollView>
                <SafeAreaView style={styles.container}>
                  <FlatList
                    data={Categorias}
                    renderItem={ListaCategorias}
                    keyExtractor={item => item.id}
                    refreshing={false}
                    onRefresh={() => reloadData()}
                  />
                </SafeAreaView>
              </ScrollView>
            </View>
            <View>
              <Text style={styles.texto}>Lista de deseos</Text>
            </View>
            <View>
              <ScrollView horizontal>
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
    fontSize: 30,
    color: '#000000',
    backgroundColor: '#ffb72e',
    marginLeft: 5
  },
  anuncio: {
    fontSize: 15,
    backgroundColor: '#ffb72e',
  },
  texto: {
    fontSize: 25,
    backgroundColor: '#ffffff',
    marginLeft: 5
  },
  categorias: {
    width: 150,
    height: 200,
    margin: 10,
  },
});
export default Home;