import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Presupuestar from '../screens/Presupuestar';
import ProfileProd from '../screens/mainflow/ProfileProd'
import Pertec from '../screens/PerTec'
import SelTec from '../screens/SelTec';

const Stack = createStackNavigator();

function Midnavigator() {
    return (
        
            <Stack.Navigator >
                <Stack.Screen name= "ProfileProd" component = {ProfileProd} options = {{headerShown: false}} />
                <Stack.Screen name= "Seltec" component = {SelTec} options = {{headerShown: false}} />
                <Stack.Screen name= "Pertec" component = {Pertec} options = {{headerShown: false}} />
                <Stack.Screen name= "Presupuest" component = {Presupuestar} options = {{headerShown: false}} />
            </Stack.Navigator>
    );
}

export default Midnavigator;