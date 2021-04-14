import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, TouchableOpacity, useWindowDimensions } from 'react-native';
import { Caption,Text } from 'react-native-paper';
import Colors from '../Constants/Colors';
import { useNavigation } from '@react-navigation/native';

function OrderList(props) {

    //Dimensiones
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    //Props
    const DATA = props.data;
    const getData=props.refreshFuntion;
    //Hook de navegación
    const navigation = useNavigation();

    const reloadData = async () => {
        await getData();
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            //marginTop: StatusBar.currentHeight/2 || 0,
        },
        item: {
            backgroundColor: '#f9c2ff',
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 16,
        },
        title: {
            fontSize: 32,
        },
        orderCard: {
            backgroundColor: '#FFFFFF',
            height: windowHeight / 5.5,
            elevation: 5,
            marginLeft: 10,
            marginRight: 10,
            marginTop: 6,
            marginBottom: 6,
            borderRadius: 3,
            overflow: 'hidden',
            flex: 1,
            flexDirection: 'row'
        },
        orderCardIcon: {
            backgroundColor: '#1f62cf',
            width: windowHeight / 5.5,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        orderCardContent: {
            flex: 1,
            flexDirection: 'column',
            padding: 5,
            justifyContent:'center'
        }
    })
    
    const renderItem = ({ item }) => (
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
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshing={false}
                onRefresh={() => reloadData()}
            />
        </SafeAreaView>
    );
}

export default OrderList;