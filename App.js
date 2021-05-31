import React, { useEffect, useState , useMemo} from 'react';
import AuthNavigator from "./navigators/authnavigator"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import pallete from './config/colors'
import { userInfo } from './api/aut';
import MainDrawerNavigator from './navigators/mainnavigator';
import { SignIn } from "./api/aut";
import { ContextoAutentication } from './Components/AutenticationContex';
 
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

function funcion (){
    console.log('buenas noches, queridos amigos')
}

const App = () => {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    console.log("abrir la aplicacion");
    ObtenerDetalleUser();
  },[]); 
  

  const contextoAutenticacion = useMemo(() => ({
    login: async (user, password) => {
      let data = {user: user, password: password}
      let response = await SignIn(user, password)
      console.log(response)
      console.log(response.code)
      if (response.code==='UserNotFoundException') {
          alert('correo o contraseña invalido') 
          
      }if (response.code==='NotAuthorizedException') {
          alert('correo o contraseña invalido') 
      }else{
          setUser(response);
      }
  }, 
  signOut: async() => {
    try {
        await Auth.signOut();
        setUser(null);
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

    })) 

  const ObtenerDetalleUser = async () => {
    let userData = null;
    console.log("Mostrar lo que hay en user data", userData);
    userData = await Auth.currentUserInfo();
    console.log("Mostrar lo que hay en user data", userData);
    setUser(userData)
  }
  return (
    <PaperProvider theme={theme}>
      <ContextoAutentication.Provider value={contextoAutenticacion}>
        {
          user ? <MainDrawerNavigator/> : <AuthNavigator/>
        }
      </ContextoAutentication.Provider>
    </PaperProvider>
    
  );
};

export default App;