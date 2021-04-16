import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Avatar } from 'react-native-paper';

const Profile_tec = ({navigation}) =>{

    return(
        <View>
            <Avatar.Image size = {24} source = {require('../../assets/trab1.jpg')}/>
            <Text>
                Tec. Atenojenes 
            </Text>
            <Text>
                Capacidades
            </Text>
            
        </View>
    );

}

export default Profile_tec;