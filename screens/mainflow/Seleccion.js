import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, ScrollView, Text, View, SafeAreaView } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper'
import Constants from 'expo-constants'


const Seleccion = ({ navigation }) => {

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
    <SafeAreaView>
      <ScrollView>
        <View>
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{fex: 1, flexDirection: 'row'}}>
                    <View>
                        <Image
                            style= {{ margin: 10, height: 100, width: 120 }}
                            source = {{uri: 'https://www.hoyfortnite.com/images/skins/Marigold_1.png'}}
                        />
                    </View>
                    {/*cards con info*/}
                    <TouchableOpacity style={styles.orderCard} onPress={() => navigation.navigate('DetailsScreen')}>
                        <View style={{
                            backgroundColor: item.daysPassed == 0 ? Colors.Green : item.daysPassed == 1 ? Colors.Yellow : item.daysPassed > 1 ? Colors.Red : Colors.Red,
                            width: windowHeight / 5.5
                        }}>
                        </View>
                        <View style={styles.orderCardContent}>
                            <Text style={{ fontWeight: 'bold' }}>Número de orden:{item.orderNumber}</Text>
                            <Text style={{ fontWeight: 'bold' }}>{item.description}</Text>
                            <Text>Fecha de registro: {item.registerDate}</Text>
                            <Text>Fecha de atención: {item.atentionDate}</Text>
                            <Text>Cliente: {item.client}</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text>
                        la skin Marigold (Midas chica/mujer) llega a Fortnite, en forma del Pack de Desafío Toque Dorado. Os contamos qué incluye, y cómo conseguirlo.
El 09/03/2021 llegó a Fortnite Battle Royale el skin Marigold, que es la versión femenina de Midas. Forma parte del Pack de Desafío Toque Dorado de Fortnite, y se filtró previamente, con la llegada del parche 15.50.
                        </Text>
                    </View>
                </View>
                {usersData.map(u => (
                <Card style={{ margin: 10, flex: 1, flexDirection: 'row'  }}>
                    <View>
                        <Card.Cover source={{ uri: u.avatar }} style={{width: 100, heigth: 100}}/>
                    </View>
                    <View>
                        <Card.Content>
                            <Title>{u.name}</Title>
                            <Paragraph>{u.desc}</Paragraph>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress = {navigation.navigate("selec")}>Contratar</Button>
                        </Card.Actions>
                    </View>
                </Card>
                ))}
            </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
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
});
export default Seleccion;