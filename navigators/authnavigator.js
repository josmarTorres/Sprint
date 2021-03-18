import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import loginScreen from "../screens/auth/login";
import registerScreen from "../screens/auth/register";

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthNavigator;