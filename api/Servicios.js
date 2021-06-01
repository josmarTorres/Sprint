import { ServiciosPlomeria } from "../api/Plomeria"
import { ServiciosElectricidad } from "../api/Electricidad"
import { ServiciosHerreria } from "../api/Herreria"
import { ServiciosDefault } from "../api/Default"

import config from "../config/config";
let endpoint = config.EndPoint;


export function getServicesByCat(cat) {
    //Metodo para obtener los servicios por categoria
    try {
        if(cat === "plomeria"){
            return ServiciosPlomeria();
        }else if(cat === "Electricidad"){
            return ServiciosElectricidad();
        }else if(cat === "Herreria"){
            return ServiciosHerreria();
        }else{
            return ServiciosDefault();
        }
    } catch (error) {
        return error;
    }
}