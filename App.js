import React, { useEffect, useState } from 'react';
import AuthNavigator from "./navigators/authnavigator"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import pallete from './config/colors'
import { userInfo } from './api/aut';
import MainDrawerNavigator from './navigators/mainnavigator';
 
Amplify.configure(awsconfig);
const theme = {
  ...DefaultTheme,
  roundness: 5,
  dark: true,
  mode: "exact",
  colors: {
    ...DefaultTheme.colors,
    primary: pallete.default.uno,
    accent: pallete.default.tres,
    background: "#ffffff"
  },
};

const App = () => {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    console.log("abrir la aplicacion");
    ObtenerDetalleUser();
  },[]); 
  const ObtenerDetalleUser = async () => {
    let userData = null;
    console.log("Mostrar lo que hay en user data", userData);
    userData = await Auth.currentUserInfo();
    console.log("Mostrar lo que hay en user data", userData);
    setUser(userData)
  }
  return (
    <PaperProvider theme={theme}>
      {
        user ? <MainDrawerNavigator/> : <AuthNavigator/>
      }
      
    </PaperProvider>
  );
};

export default App;