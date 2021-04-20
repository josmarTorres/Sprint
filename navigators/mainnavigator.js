import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SignOut } from '../api/aut';

//Pantallas del drawer navigation
import Home from '../screens/mainflow/Inicio';
import Selec from '../screens/mainflow/Seleccion';
import SelTec from '../screens/mainflow/SelTec';
import WishL from '../screens/mainflow/WishList';
import salir from '../screens/auth/GetOut';

/*function Visual (){
    const GetOut = async () =>{
        let response = await SignOut();
        console.log(response)
    }
    return (
        <Drawer.Section>
            <Drawer.Item
                icon="logot"
                label="Cerrar Sesion"
                onPress={() => GetOut()}
            />
        </Drawer.Section>
    );
}*/
const Drawer = createDrawerNavigator();

function mainDrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">

            <Drawer.Screen 
                    name="selec" 
                    component={Selec}
                    options={{
                        headerShown: true,
                        title: "Servicios",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                    
                />
                <Drawer.Screen 
                    name="Home" 
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
                    name="SelTec" 
                    component={SelTec}
                    options={{
                        headerShown: true,
                        title: "Posibles técnicos",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                    
                />
                <Drawer.Screen 
                    name="Lista de deseos" 
                    component={WishL}
                    options={{
                        headerShown: true,
                        title: "Lista de deseos",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                    
                />
                <Drawer.Screen 
                    name="Salir" 
                    component={salir}
                    options={{
                        headerShown: true,
                        title: "Cerrar sesion",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                    
                />
                {/**/}
            </Drawer.Navigator>
        </NavigationContainer>
        
    );
}

export default mainDrawerNavigator;