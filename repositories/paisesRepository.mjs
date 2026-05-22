
import IRepository from "./IRepository.mjs";
import paisesModelo from "../models/modelo.mjs";
import axios from "axios";

export const paisesAmerica = async () => {

    try {
        const paises = await axios.get('https://restcountries.com/v3.1/region/america');
        return paises.data;

    } catch (error) {
        console.error('Error al consumir la API:', error);
    }

};


class paisesRepository extends IRepository {

    // ruta metodo GET 
    async obtenerTodos() {

        try {
            return await paisesModelo.find();

        } catch (error) {
            console.log('Error Mongo: ', error.message);
        }
    }

    // ruta metodo post
    async importarEnMongoR(datos) {

        try {
            const datosRepo = await paisesModelo.find();
            await paisesModelo.insertMany(datos);
            console.log(`prueba insertMany correcta`);
            return datosRepo;
        } catch (error) {
            console.error('Detalle de errores importarEnMongoR (repositorio):', error.message);
        }
    }

    // ruta metodo delete
    async eliminarEnMongoR() {
        try {
            const datosAEliminar = await paisesModelo.find({ creador: "Gaby Bensadon" });
            await paisesModelo.deleteMany({ creador: "Gaby Bensadon" });
            console.log(`prueba deleteMany correcta`);
            return datosAEliminar;


        } catch (error) {
            console.error('Detalle de errores eliminarEnMongoR (repositorio):', error.message);
        }
    }
}

export default new paisesRepository();
