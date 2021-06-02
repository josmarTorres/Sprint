import { ServiciosPlomeria }        from "./Plomeria"
import { ServiciosElectricidad }    from "./Electricidad"
import { ServiciosHerreria }        from "./Herreria"
import { ServiciosCarpinteria }     from './Carpinteria'
import { ServiciosLimpieza }        from './Limpieza'
import { ServiciosJardineria }      from './Jardineria'
import { ServiciosAlbañileria }     from './Albañileria'
import { ServiciosDefault }         from "./Default"
import { ServiciosVeterinaria }     from "./Veterinaria";

import { ServiciosCarrito }         from "./Carrito";
import { MisServicios }             from "./MisServicios";
import { WishList }                 from "./WishList";



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
        }else if(cat === "Carrito"){
            return ServiciosCarrito();
        }else if(cat === "MisServicios"){
            return MisServicios();
        }else if(cat === "WishList"){
            return WishList();
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
        if(cat === "plomeria"){
            services = ServiciosPlomeria();
        }else if(cat === "Electricidad"){
            services = ServiciosElectricidad();
        }else if(cat === "Herreria"){
            services = ServiciosHerreria();
        }else if(cat === "Carpinteria"){
            services = ServiciosCarpinteria();
        }else if(cat === "Veterinaria"){
            services = ServiciosVeterinaria();
        }else if(cat === "Limpieza"){
            services = ServiciosLimpieza();
        }else if(cat === "Jardineria"){
            services = ServiciosJardineria();
        }else if(cat === "Albañileria"){
            services = ServiciosAlbañileria();
        }else if(cat === "Carrito"){
            services = ServiciosCarrito();
        }else if(cat === "MisServicios"){
            services = MisServicios();
        }else if(cat === "WishList"){
            services = WishList();
        }else{
            services = ServiciosDefault();
        }

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