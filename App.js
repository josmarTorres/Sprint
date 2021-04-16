import React from 'react';
//import AuthNavigator from "./navigators/authnavigator"
import AuthNavigator from "./navigators/mainnavigator"
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import pallete from './config/colors'
 
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
  return (
    <PaperProvider theme={theme}>
      <AuthNavigator/>
    </PaperProvider>
  );
};

export default App;