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
                <Button onPress = {navigation.navigate("selec")}>No pos va</Button>
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