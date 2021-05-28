import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'
import SearchBar from '../../Components/Searchbar';
import CarouselCards from '../../CarouselCards';
import { Dimensions } from 'react-native';
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
  /*const [users, setUsers] = useState([])
  useEffect(() => {
    console.log('Me ejecuto en automatico')
  });
  //Funcion que recibe datos de la api
  const getData = () => {
    setUsers(usersData)
  }*/

  const usersData = [
    {
      key: 1,
      name: 'plomeria',
      avatar: 'https://media-adsa.camilyo.software/media-adsa/static/3681/273.jpg ',
      desc: 'descripcion 1',
      origin: 'url'
    },
    {
      key: 2,
      name: 'Electricidad',
      avatar: "https://media.istockphoto.com/photos/electrician-engineer-work-tester-measuring-voltage-and-current-of-picture-id1150199550?k=6&m=1150199550&s=612x612&w=0&h=_V2zpov23nUa9lF5WC2ssRgLniOTGIBbjEhGehYhW0o=",
      desc: 'descripcion 2 ',
      origin: "url"
    },
    {
      key: 3,
      name: 'Herreria',
      avatar: 'https://media-adsa.camilyo.software/media-adsa/static/3968/396.jpg',
      desc: 'descripcion 3 ',
      oringin: "url"
    },
    {
      key: 4,
      name: 'Carpinteria',
      avatar: 'https://lh3.googleusercontent.com/proxy/vLQl4INMnZAfBabi4VfdxRh4TX1BuOjdiDQ7nbv0tKFg2gwzSi8YP4qwzvuTbuQms1GK4Y7u2LQmDNaFOekIlsvPi1XNDc9_YagYwRHMA-YcWmOObCBd6_OQGAlf5BpHkA',
      desc: 'descripcion 4 ',
      origin: "url"
    },
    {
      key: 5,
      name: 'Veterinaria',
      avatar: 'https://www.cursosycarreras.com.mx/orientacion/wp-content/uploads/2019/05/Carrera-de-veterinaria.jpg',
      desc: 'descripcion 5 ',
      origin: 'url'
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SearchBar style={styles.searchbar} />
        <View style={styles.text}>

        </View>
        <View>
          <Text style={{ fontSize: 25 }}>Bienvenido</Text>
        </View>
        <Text >Oferta del día</Text>

        <CarouselCards />
        <Text style={styles.texto}>
          Categorias
        </Text>
        <View>
          <ScrollView
            horizontal //scrolling left to right instead of top to bottom
            showsHorizontalScrollIndicator={false} //hides native scrollbar
            //pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            style={{ flex: 1, flexDirection: 'row' }}
          >
            {usersData.map(u => (
              <Card 
                style={{ width: 200, margin: 10 }}
              >
                <Card.Cover source={{ uri: u.avatar }}/>
                <Card.Content>
                  <Title>{u.name}</Title>
                  <Paragraph>{u.desc}</Paragraph>
                </Card.Content>
                <Card.Actions>
                <Button>Ver mas...</Button>
                </Card.Actions>
              </Card>
              /*<RenderCards item = {u}/>*/
            ))}
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
});
export default Home;