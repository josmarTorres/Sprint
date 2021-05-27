import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Presupuestar from '../screens/Presupuestar';
import ProfileProd from '../screens/mainflow/ProfileProd'


const Stack = createStackNavigator();

function Midnavigator() {
    return (
        
            <Stack.Navigator>
                <Stack.Screen name= "ProfileProd" component = {ProfileProd} options = {{headerShown: false}}/>
                <Stack.Screen name= "Presupuest" component = {Presupuestar} options = {{headerShown: false}}/>
            </Stack.Navigator>
        
    );
}

export default Midnavigator;