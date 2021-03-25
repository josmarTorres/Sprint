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
        console.log("Amplify currentUserInfo",userInfo.attributes);
        return userData;
    }
