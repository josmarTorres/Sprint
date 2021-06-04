import { Categorias } from "./rest/CategoriasItems"



export function getCategorias() {
    //Metodo para obtener las categorias
    try {
        return Categorias();
    } catch (error) {
        return error;
    }
}