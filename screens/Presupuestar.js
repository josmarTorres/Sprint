import React from 'react';
import { View, TextInput, Button, ScrollView, Text, StyleSheet } from 'react-native'
import Foto from '../Components/Fotos';
import Mapa from '../Components/Mapa';

const Presupuestar = ({ navigation }) =>{
return(
    <View>
        <ScrollView>
            <View style={{flex: 1, flexDirection: 'column', margin: 30, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                style ={{color: '#00308F', fontSize: 20}}
                
                >
                    Ingrese una imagen del problema
                </Text>
                    <Foto/>
                <View style = {{flex: 1, flexDirection: 'column', width: 40, margin: 20, justifyContent: 'center', alignItems: 'center'}}> 
                    <Text
                    style = {{height: 40, width: 190, color: '#00308F', fontSize: 20}}
                    >
                        ingrese la ubicacion
                    </Text>
                    <Mapa/>
                </View>
                    
            </View>
            <View style = {{width: 150, height: 100, alignItems: 'center', alignContent: 'center', justifyContent: 'center'}}>
                <Button
                    title ={'Cancelar'}
                    color = '#FFB72E'
                >
                </Button>
                <Button
                    title ={'Presupuestar'}
                    color = '#FFB72E'
                >
                </Button>
            </View>
        </ScrollView>
    </View>
);
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        padding: 10
    },
    Botones:{
        margin: 50,
        height: 50,
        width: 130,

    }
});

export default Presupuestar