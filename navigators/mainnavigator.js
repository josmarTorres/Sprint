import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Image, ScrollView } from 'react-native';
import { Drawer } from 'react-native-paper';
import { ContextoAutentication } from '../Components/AutenticationContex'

//Pantallas del drawer navigation
import Home from '../screens/mainflow/Inicio';
import Selec from '../screens/mainflow/Seleccion';
import SelTec from '../screens/mainflow/SelTec';
import WishL from '../screens/mainflow/WishList';
import salir from '../screens/auth/GetOut';
import PerTec from '../screens/PerTec';
import PerUser from '../screens/PerUser';
import Carrito from '../screens/Carrito';

function Visual (props){
   /*   const GetOut = async () =>{
        let response = await SignOut();
        console.log(response) 
    } */
    const { signOut } = React.useContext(ContextoAutentication);

    return (
        <>
        <View style= {{flex: 1, backgroundColor: '#FFF86A'}}>
            <View style={{height:50}}>

            </View>
            <Image 
                source = {require('../assets/Fix.png')}
                style = {{height: 50, width: 100, margin: 20}}
            />
        </View>
        <View style= {{flex: 4}}>
            <ScrollView>
                <Drawer.Section>
                    <Drawer.Item
                        icon="logout"
                        label="Inicio"
                        onPress={() => props.navigation.navigate("Home")}
                    />
                    <Drawer.Item
                        icon="logout"
                        label="Perfil"
                        onPress={() => props.navigation.navigate("PerUser")}
                    />
                    <Drawer.Item
                        icon="logout"
                        label="Carrito de compras"
                        onPress={() => props.navigation.navigate("Carrito")}
                    />
                    <Drawer.Item
                        icon="logout"
                        label="mis servicios"
                        onPress={() => props.navigation.navigate("selec")}
                    />
                    <Drawer.Item
                        icon="logout"
                        label="Lista de tecnicos"
                        onPress={() => props.navigation.navigate("SelTec")}
                    />
                    <Drawer.Item
                        icon="logout"
                        label="Lista de deseos"
                        onPress={() => props.navigation.navigate("Lista de deseos")}
                    />
                </Drawer.Section>
                <Drawer.Section>
                    <Drawer.Item
                        icon="logout"
                        label="Perfil del tecnico"
                        onPress={() => props.navigation.navigate("Perfil del tecnico")}
                    />
                    <Drawer.Item
                        icon="logout"
                        label="Cerrar Sesion"
                        onPress={() => signOut()}
                    />
                </Drawer.Section>
                
            </ScrollView>
        </View>
        
        </>
    );
}
const DrawerNav = createDrawerNavigator();

function mainDrawerNavigator() {
    return (
        <NavigationContainer>
            <DrawerNav.Navigator initialRouteName="Home" drawerContent={(props) => <Visual {...props} />} >
            <DrawerNav.Screen 
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
            <DrawerNav.Screen 
                name="PerUser" 
                component={PerUser}
                options={{
                    headerShown: true,
                    title: "Inicio",
                    headerStyle: {
                        backgroundColor: "#FFB72E"
                    }
                }}
            />
            <DrawerNav.Screen 
                name="Carrito" 
                component={Carrito}
                options={{
                    headerShown: true,
                    title: "Inicio",
                    headerStyle: {
                        backgroundColor: "#FFB72E"
                    }
                }}
            />

                <DrawerNav.Screen 
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
                <DrawerNav.Screen 
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
                <DrawerNav.Screen 
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
                <DrawerNav.Screen 
                    name="Perfil del tecnico" 
                    component={PerTec}
                    options={{
                        headerShown: true,
                        title: "Perfil tecnico",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                    
                />
                <DrawerNav.Screen 
                    name="cerrar"
                    component={salir}
                    independent={true}
                    options={{
                        headerShown: true,
                        title: "Cerrar sesion",
                        headerStyle: {
                            backgroundColor: "#FFB72E"
                        }
                    }}
                    
                />
                {/**/}
            </DrawerNav.Navigator>
        </NavigationContainer>
        
    );
}

export default mainDrawerNavigator;