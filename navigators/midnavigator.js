import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Presupuestar from '../screens/Presupuestar';
import ProfileProd from '../screens/mainflow/ProfileProd';
import Pertec from '../screens/PerTec';
import SelTec from '../screens/SelTec';
import Sele from '../screens/mainflow/Seleccion';
import Ticket from '../screens/Ticket'

const Stack = createStackNavigator();

function Midnavigator() {
    return (
        
            <Stack.Navigator >
                <Stack.Screen name= "ProfileProd" component = {ProfileProd} options = {{headerShown: false, title: "Producto"}} />
                <Stack.Screen name= "Seltec" component = {SelTec} options = {{headerShown: false, title: "Posibles tecnicos"}} />
                <Stack.Screen name= "Pertec" component = {Pertec} options = {{headerShown: false, title: "Perfil Tecnico"}} />
                <Stack.Screen name= "Presupuest" component = {Presupuestar} options = {{headerShown: false, title: "Presupuestar"}} />
                <Stack.Screen name= "Seleccion" component = {Sele} options = {{headerShown: false, title: "Servicios"}} />
                <Stack.Screen name= "Ticket" component = {Ticket} options = {{headerShown: false, title: "Ticket"}} />
            </Stack.Navigator>
    );
}

export default Midnavigator;