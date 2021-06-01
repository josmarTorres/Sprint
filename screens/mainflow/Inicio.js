import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'
import SearchBar from '../../Components/Searchbar';
import CarouselCards from '../../CarouselCards';
import { Dimensions } from 'react-native';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
      avatar: 'https://www.quotatis.es/consejos-reformas/wp-content/uploads/sites/2/2019/02/shutterstock_712183354-min.jpg',
      desc: 'descripcion 4 ',
      origin: "url"
    },
    {
      key: 5,
      name: 'Veterinaria',
      avatar: 'https://www.cursosycarreras.com.mx/orientacion/wp-content/uploads/2019/05/Carrera-de-veterinaria.jpg',
      desc: 'descripcion 5 ',
      origin: 'url'
    },
    {
      key: 6,
      name: 'Limpieza',
      avatar: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/01/producto-limpieza-2189651.jpg',
      desc: 'descripcion 5 ',
      origin: 'url'
    },
    {
      key: 7,
      name: 'Jardineria',
      avatar: 'https://cdn.aarp.net/content/dam/aarp/home-and-family/your-home/2019/04/1140-green-thumb-esp.imgcache.rev.web.900.513.jpg',
      desc: 'descripcion 5 ',
      origin: 'url'
    },
    {
      key: 8,
      name: 'Albañileria',
      avatar: 'https://www.informeconstruccion.com/informeconstruccion/fotos/notas/2018/09/11/5800_20180911162848.png',
      desc: 'descripcion 5 ',
      origin: 'url'
    }
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <SearchBar style={styles.searchbar} /> */}
        <View style={styles.text}>
        </View>
        <View>
          <Text style={{ fontSize: 25 }}>Bienvenido</Text>
        </View>
        <Text style={{fontSize: 14}}>Oferta del día</Text>
        <View style = {{elevation: 5, marginBottom: 10}}>
          <CarouselCards />
        </View>
        <Text style={styles.texto}>
          Categorias
        </Text>
        <View style={{marginTop: 10, marginLeft: 10}}>
          <ScrollView
            horizontal //scrolling left to right instead of top to bottom
            showsHorizontalScrollIndicator={false} //hides native scrollbar
            //pagingEnabled //scrolls from one image to the next, instead of allowing any value inbetween
            style={{ flex: 1, flexDirection: 'row' }}
          >
            
            {usersData.map(u => (
              <TouchableOpacity onPress={() => navigation.navigate("selec", {categoria: u.name})}>
              <Card style={{ width: 200, margin: 5 }}>
                <Card.Cover source={{ uri: u.avatar }}/>
                <Card.Content>
                  <Title>{u.name}</Title>
                  <Paragraph>{u.desc}</Paragraph>
                </Card.Content>
                <Card.Actions>
                <Button>Ver mas...</Button>
                </Card.Actions>
              </Card>
              {/* /*<RenderCards item = {u}/>*/}
              </TouchableOpacity>
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