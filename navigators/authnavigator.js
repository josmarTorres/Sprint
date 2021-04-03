import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import loginScreen from "../screens/auth/login";
import registerScreen from "../screens/auth/register";
import recoveryScreen from "../screens/auth/recovery";
import recovery2Screen from "../screens/auth/recovery2";
import CodigoV from '../screens/Codigo';
import home from '../screens/auth/Inicio';
import confirm from '../screens/auth/ConfirmAccount';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="login"
                    component={loginScreen} 
                    options={{
                        headerShown: false,
                        headerStyle: {
                            backgroundColor: "#F1C40F"
                        },
                        title: "Román",
                        headerTintColor: "#FFFFFF"
                    }} 
                />
                <Stack.Screen name="register" component={registerScreen} />
                <Stack.Screen name="recovery" component={recoveryScreen} />
                <Stack.Screen name="recovery2" component={recovery2Screen} />
                <Stack.Screen name="codigo" component={CodigoV} />
                <Stack.Screen name="home" component={home} />
                <Stack.Screen name="confirm" component={confirm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;