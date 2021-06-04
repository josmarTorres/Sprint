import { ServiciosPlomeria }        from "./rest/Plomeria"
import { ServiciosElectricidad }    from "./rest/Electricidad"
import { ServiciosHerreria }        from "./rest/Herreria"
import { ServiciosCarpinteria }     from './rest/Carpinteria'
import { ServiciosLimpieza }        from './rest/Limpieza'
import { ServiciosJardineria }      from './rest/Jardineria'
import { ServiciosAlbañileria }     from './rest/Albañileria'
import { ServiciosDefault }         from "./rest/Default"
import { ServiciosVeterinaria }     from "./rest/Veterinaria";
import { ServiciosPintura }         from "./rest/Pintura";

import { ServiciosCarrito }         from "./rest/Carrito";
import { MisServicios }             from "./rest/MisServicios";
import { WishList }                 from "./rest/WishList";
import { Anuncios }                 from "./rest/Anuncios";



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
        }else if(cat === "Pintura y acabados"){
            return ServiciosPintura();
        }else if(cat === "Carrito"){
            return ServiciosCarrito();
        }else if(cat === "MisServicios"){
            return MisServicios();
        }else if(cat === "WishList"){
            return WishList();
        }else if(cat === "Anuncios"){
            return Anuncios();
        }else{
            return ServiciosDefault();
        }
    } catch (error) {
        return error;
    }
}

export function getServiceByID(cat, id) {
    //Metodo para obtener los servicios por categoria
    let services = "";
    try {
        
        services = getServicesByCat(cat);

        for (const [i, service] in services) {
            let ser = services[i];
            if(ser.key == id){
                return ser;
            }
        }

    } catch (error) {
        return error;
    }
}