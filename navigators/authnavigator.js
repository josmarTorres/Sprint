import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from "../screens/auth/login";
import RegisterScreen from "../screens/auth/register";
import RecoveryScreen from "../screens/auth/recovery";
import Recovery2Screen from "../screens/auth/recovery2";
import CodigoV from '../screens/Codigo';
import Home from '../screens/mainflow/Inicio';
import Confirm from '../screens/auth/ConfirmAccount';
import Selec from '../screens/mainflow/Seleccion';
import Drawer from './mainnavigator';
import PerTec from '../screens/PerTec';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="login"
                    component={LoginScreen} 
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: "#F1C40F"
                        },
                        title: "Román",
                        headerTintColor: "#FFFFFF"
                    }} 
                />
                <Stack.Screen name="register" component={RegisterScreen} />
                <Stack.Screen name="recovery" component={RecoveryScreen} />
                <Stack.Screen name="recovery2" component={Recovery2Screen} />
                <Stack.Screen name="codigo" component={CodigoV} />
                <Stack.Screen name="confirm" component={Confirm} />
                <Stack.Screen name="pertec" component={PerTec} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;