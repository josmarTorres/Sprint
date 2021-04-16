import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Pantallas del drawer navigation
import Home from '../screens/mainflow/Inicio';
import Selec from '../screens/mainflow/Seleccion';

const Drawer = createDrawerNavigator();

function mainDrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen 
                    name="home" 
                    component={Home}
                    options={{
                        headerShown: true,
                        title: "Inicio",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                />
                <Drawer.Screen 
                    name="selec" 
                    component={Selec}
                    options={{
                        headerShown: true,
                        title: "Posibles técnicos",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
        
    );
}

export default mainDrawerNavigator;