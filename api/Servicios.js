import { ServiciosPlomeria } from "../api/Plomeria"
import { ServiciosDefault } from "../api/Default"

import config from "../config/config";
let endpoint = config.EndPoint;


export function getServicesByCat(cat) {
    //Metodo para obtener los servicios por categoria
    try {
        if(cat === "plomeria"){
            return ServiciosPlomeria();
        }else{
            return ServiciosDefault();
        }
    } catch (error) {
        return error;
    }
}