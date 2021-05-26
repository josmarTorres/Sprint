import React, {useState, useEffect} from 'react';
import MapView, { Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { requestPermissionsAsync } from "expo-location";
/* import GetLocation from 'react-native-get-location'

GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
})
.then(location => {
    console.log(location);
})
.catch(error => {
    const { code, message } = error;
    console.warn(code, message);
})
 */



export default function App() {

  const [marcador,setMarcador]= useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
})

  return (
    <View style={styles.container}>
      <MapView style = {styles.map} initialRegion={{
        latitude: 19.51057,
        longitude: -99.04035,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}>
        <Marker draggable
        coordinate = {marcador}
        onDragEnd={(e) => setMarcador ({x: e.nativeEvent.coordinate})}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').height - 400,
  },
});