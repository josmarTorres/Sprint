import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SLIDER_WIDTH = Dimensions.get('window').width-10
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      {/* <TouchableOpacity onPress={() => navigation.navigate("Midnavigator", {screen: "ProfileProd", params: { servicio: item.key, categoria: item.cat }})}> */}
        <Image
          source = {{ uri: item.avatar }}
          style={styles.image}
        />
        <Text style={styles.header}>{item.name}</Text>
        <Text style={styles.body}>{item.desc}</Text>
      {/* </TouchableOpacity> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  header: {
    color: "#222",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 20,
    paddingLeft: 5,
    paddingRight: 5
  },
  body: {
    color: "#222",
    fontSize: 15,
    paddingLeft: 5,
    paddingRight: 5
  }
})

export default CarouselCardItem
