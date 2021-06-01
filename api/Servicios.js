import { ServiciosPlomeria } from "../api/Plomeria"
import { ServiciosElectricidad } from "../api/Electricidad"
import { ServiciosHerreria } from "../api/Herreria"
import { ServiciosCarpinteria } from '../api/Carpinteria'
//import { ServiciosVeterinaria } from "../api/Veterinaria"
import { ServiciosLimpieza } from '../api/Limpieza'
import { ServiciosJardineria } from '../api/Jardineria'
import { ServiciosAlbañileria } from '../api/Albañileria'
import { ServiciosDefault } from "../api/Default"

import config from "../config/config";
import { ServiciosVeterinaria } from "./Veterinaria";
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
        }else if(cat === "Carpinteria"){
            return ServiciosCarpinteria();
        }else if(cat === "Veterinaria"){
            return ServiciosVeterinaria();
        }else if(cat === "Limpieza"){
            return ServiciosLimpieza();
        }else if(cat === "Jardineria"){
            return ServiciosJardineria();
        }else if(cat === "Albañileria"){
            return ServiciosAlbañileria();
        }else{
            return ServiciosDefault();
        }
    } catch (error) {
        return error;
    }
}