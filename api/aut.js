import config from "../config/config";
import { Auth } from 'aws-amplify';
let endpoint = config.EndPoint;


    export async function SignIn(username,password) {
        //Metodo para iniciar sesión
        try {
            const user = await Auth.signIn(username, password);
            return user;
        } catch (error) {
            return error;
        }
    }

    export async function userInfo(){
        let userData = await Auth.currentUserInfo();
        console.log("Amplify currentUserInfo",Auth.currentUserInfo());
        return userData;
    }
    
    export async function signUp(data) {
        //Metodo para registrar un usuario
        let userData=data;
        console.log('Data registrada: ',userData)
        try {
            const { user } = await Auth.signUp({
                'username':userData.username,
                'password':userData.password,
                'attributes': {
                    'email': userData.username,
                    'custom:Nombre':userData.Nombre,
                    'custom:ApellidoPaterno':userData.ApellidoPaterno,
                    'custom:ApellidoMaterno':userData.ApellidoMaterno
                }
            });
            return user;
        } catch (error) {
            return error;
        }
    }

    //olvide mi contraseña

    export async function ForgotPassword(username){
        //Solicita un código de cambio de contraseña para el usuario que se especifique
        try {
            console.log('==== ForgotPassword ====',username);
            let resultData = await Auth.forgotPassword(username);
            return resultData;
        } catch (error) {
            return error;
        }
    }
        
    export async function forgotPasswordSubmit(user,code,password){
        //Metodo para cambiar contraseña recibe el nombre de usuario, código y contraseña
        try {
            console.log('==== ForgotPasswordSubmit ====');
            let resultData = await Auth.forgotPasswordSubmit(user, code, password);
            console.log("ForgotPasswordSubmit responde " + JSON.stringify(resultData));
            if(resultData === undefined) {
                resultData = {"code": "passwordChanged"}
            }
            return resultData;

        } catch (error) {
            return error;
        }
    }

    //Confirmar Cuenta
    export async function confirmSignUp(username, code) {
        try {
            await Auth.confirmSignUp(username, code);
        } catch (error) {
            console.log('error confirming sign up', error);
        }
    }

    export async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }